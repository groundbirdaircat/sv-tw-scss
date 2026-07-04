import { plural } from '../../src/lib/modules/general/util/general.util';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
import * as fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class AddIcon {
  static getExistingIconNames(): string[] {
    const iconPath = path.resolve(__dirname, '../../src/lib/modules/general/icon.ts');
    const content = fs.readFileSync(iconPath, 'utf-8');

    const match = content.match(/export const Icon = \{([\s\S]*?)\}/);
    if (!match) return [];

    const body = match[1];
    const lines = body
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);
    return lines;
  }

  static getNewIconNames(): string[] {
    const addIconsPath = path.resolve(__dirname, '../../src/lib/assets/add-icons/');
    const files = fs.readdirSync(addIconsPath).filter(f => f.endsWith('.svg'));

    return files.map(file => {
      const name = path.basename(file, '.svg');
      return AddIcon.toCamelCase(name);
    });
  }

  static toCamelCase(name: string): string {
    return name.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
  }

  static parseSvg(svgContent: string, filename: string): string | null {
    // Extract only content between <svg> and </svg>, ignoring XML declarations, comments, etc.
    const svgMatch = svgContent.match(/(<svg[\s\S]*?)<\/svg>/i);
    const isMalformed = !svgMatch;
    if (isMalformed) {
      console.warn(`Skipping malformed SVG (no <svg> tag found): ${filename}`);
      return null;
    }
    let result = svgMatch[1] + '</svg>';

    // Strip root <svg> attributes except viewBox
    // Matches the opening svg tag and its attributes
    const hasViewBox = /viewBox\s*=/i.test(result);

    if (hasViewBox) {
      // Keep only viewBox, remove all other attributes from root svg tag
      result = result.replace(/<svg\s+([^>]*?)>/, (_, attrs) => {
        // Extract viewBox attribute
        const viewBoxMatch = attrs.match(/(viewBox\s*=\s*"[^"]*")/i);
        return viewBoxMatch ? `<svg ${viewBoxMatch[1]}>` : '<svg>';
      });
    }

    // Add fill="#000000" to <path> elements missing a fill attribute
    // Matches all path tags, then checks if fill attribute is present
    result = result.replace(/<path((?:\s+[^>]+)?)\s*>/g, (_, attrs) => {
      const hasFill = /\s+fill\s*=/i.test(attrs);
      const isSelfClosing = attrs.trimEnd().endsWith('/');
      const cleanAttrs = isSelfClosing ? attrs.slice(0, -1) : attrs;
      const closing = isSelfClosing ? ' />' : '>';
      if (hasFill) return `<path${cleanAttrs}${closing}`;
      return `<path${cleanAttrs} fill="#000000"${closing}`;
    });

    // Strip leading whitespace from each line
    result = result
      .split('\n')
      .map(line => line.trimStart())
      .join('\n');

    // Remove trailing newline after </svg>
    result = result.replace(/\s+$/, '');

    return result;
  }

  static formatIcon(name: string, svgContent: string): string {
    return `const ${name} = \`${svgContent}\`;`;
  }

  static processAllIcons(): Array<{ name: string; content: string }> {
    const addIconsPath = path.resolve(__dirname, '../../src/lib/assets/add-icons/');
    const files = fs.readdirSync(addIconsPath).filter(f => f.endsWith('.svg'));

    const result: Array<{ name: string; content: string }> = [];
    for (const file of files) {
      const name = AddIcon.toCamelCase(path.basename(file, '.svg'));
      const svgPath = path.resolve(addIconsPath, file);
      const svgContent = fs.readFileSync(svgPath, 'utf-8');
      const parsedSvg = AddIcon.parseSvg(svgContent, file);
      const isSkipped = !parsedSvg;
      if (isSkipped) continue;
      const formatted = AddIcon.formatIcon(name, parsedSvg);
      result.push({ name, content: formatted });
    }
    return result;
  }

  static checkDuplicates(): void {
    const existing = AddIcon.getExistingIconNames();
    const newIcons = AddIcon.getNewIconNames();
    const duplicates = newIcons.filter(name => existing.includes(name));

    const hasDuplicates = duplicates.length > 0;
    if (hasDuplicates) {
      console.error(`Duplicate icon names found: ${duplicates.join(', ')}`);
      process.exit(1);
    }
  }

  static writeIcons(newIcons: Array<{ name: string; content: string }>): void {
    const iconPath = path.resolve(__dirname, '../../src/lib/modules/general/icon.ts');
    let content = fs.readFileSync(iconPath, 'utf-8');

    const newConstants = newIcons.map(icon => icon.content);

    const insertText = newConstants.join('\n') + '\n\n';
    content = content.replace(/export const Icon = \{/, insertText + 'export const Icon = {');

    const match = content.match(/export const Icon = \{([\s\S]*?)\}/);
    if (!match) {
      fs.writeFileSync(iconPath, content, 'utf-8');
      return;
    }

    const existingNames = match[1]
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    const allNames = [...existingNames, ...newIcons.map(icon => icon.name)];

    const sortedNames = allNames.sort((a, b) => {
      const lenDiff = b.length - a.length;
      if (lenDiff !== 0) return lenDiff;
      return a.localeCompare(b);
    });

    const formattedNames = sortedNames.map((name, i) => {
      const isLast = i === sortedNames.length - 1;
      return '  ' + name + (isLast ? '' : ',');
    });

    content = content.replace(
      /(export const Icon = \{)[\s\S]*?(\})/,
      (_, open, close) => open + '\n' + formattedNames.join('\n') + '\n' + close
    );

    fs.writeFileSync(iconPath, content, 'utf-8');
  }

  static cleanupSvgs(): void {
    const addIconsPath = path.resolve(__dirname, '../../src/lib/assets/add-icons/');
    const files = fs.readdirSync(addIconsPath).filter(f => f.endsWith('.svg'));

    files.forEach(file => {
      const filePath = path.resolve(addIconsPath, file);
      try {
        fs.unlinkSync(filePath);
      } catch {
        console.warn(`Failed to delete SVG: ${file}`);
      }
    });
  }

  static run(): void {
    AddIcon.checkDuplicates();

    const newIcons = AddIcon.processAllIcons();
    if (!newIcons.length) {
      console.log('No new icons found');
      return;
    }

    AddIcon.writeIcons(newIcons);
    AddIcon.cleanupSvgs();

    console.log(`Added ${newIcons.length} icon${plural(newIcons.length)}`);
    for (const icon of newIcons) console.log(icon.name);
  }
}

AddIcon.run();

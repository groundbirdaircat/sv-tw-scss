export function timeout(ms = 0): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}

export function plural(num: number): '' | 's' {
  return num === 1 ? '' : 's';
}

export function reversePlural(num: number): '' | 's' {
  return num !== 1 ? '' : 's';
}

export function trimSpace(value = ''): string {
  // trim and remove multiple tabs/spaces
  return value.trim().replaceAll(/[ \t]{2,}/g, ' ');
}

export function space(value: string): string {
  return value ? ' ' + value : '';
}

export function downloadFile(url: string, fileName: string): void {
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function downloadCsvString(csv: string, title: string): void {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const [month, day, year] = new Date().toLocaleDateString().split('/');
  downloadFile(url, title + `_${year}-${month}-${day}`);
  URL.revokeObjectURL(url);
}

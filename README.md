# **sv-tw-scss**

#### **Library Docs**

- **[Svelte](https://svelte.dev/docs/svelte/overview)**
- **[Sveltekit](https://svelte.dev/docs/kit/introduction)**
- **[Tailwind](https://tailwindcss.com/docs/styling-with-utility-classes)**
- **[Scss](https://sass-lang.com/documentation/syntax)**
- **[TypeScript](https://www.typescriptlang.org/docs/)**
- **[Prettier](https://prettier.io/docs/en/index.html)**
- **[ESLint](https://eslint.org/docs/latest/)**

#### **VSCode Extensions**

- [**Svelte for VS Code**](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [**Tailwind CSS IntelliSense**](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [**Prettier - Code formatter**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

<br />

## **Setup**

### .env file

```bash
PUBLIC_ENVIRONMENT=dev
```

`npm i`

`npm run dev`

<br />

## **Linting**

Format and lint consecutively

`npm run flint`

<br />

## **Global styles**

### **Tailwind**
##### *src/styles/tailwind.css*

- [**Tailwind utilities**](https://tailwindcss.com/docs/adding-custom-styles#adding-custom-utilities) - Classes used with Tailwind media queries

- [**Tailwind layers**](https://tailwindcss.com/docs/adding-custom-styles#adding-base-styles) - Other global css

### **Scss**
##### *src/styles/global.scss*

- For **Scss** features

<br />

## **Media queries**

Tailwind, Scss, and Svelte are configured to use the following values

|*values*                  | *mob* | *tab* | *lap* | *dsk* | *wde* | *uwd* | *suw* |
|------------------------|-----|-----|-----|-----|-----|-----|-----|
| beforeTablet         | 🔵   |     |     |     |     |     |     |
| beforeLaptop         | 🔵   | 🔵   |     |     |     |     |     |
| beforeDesktop        | 🔵   | 🔵   | 🔵   |     |     |     |     |
| beforeWide           | 🔵   | 🔵   | 🔵   | 🔵   |     |     |     |
| beforeUltrawide      | 🔵   | 🔵   | 🔵   | 🔵   | 🔵   |     |     |
| beforeSuperultrawide | 🔵   | 🔵   | 🔵   | 🔵   | 🔵   | 🔵   |     |
| afterMobile          |     | 🔵   | 🔵   | 🔵   | 🔵   | 🔵   | 🔵   |
| afterTablet          |     |     | 🔵   | 🔵   | 🔵   | 🔵   | 🔵   |
| afterLaptop          |     |     |     | 🔵   | 🔵   | 🔵   | 🔵   |
| afterDesktop         |     |     |     |     | 🔵   | 🔵   | 🔵   |
| afterWide            |     |     |     |     |     | 🔵   | 🔵   |
| afterUltrawide       |     |     |     |     |     |     | 🔵   |
| isSmall              | 🔵   | 🔵   |     |     |     |     |     |
| isMedium             |     |     | 🔵   | 🔵   |     |     |     |
| isLarge              |     |     |     |     | 🔵   | 🔵   | 🔵   |
| isMobile             | 🔵   |     |     |     |     |     |     |
| isTablet             |     | 🔵   |     |     |     |     |     |
| isLaptop             |     |     | 🔵   |     |     |     |     |
| isDesktop            |     |     |     | 🔵   |     |     |     |
| isWide               |     |     |     |     | 🔵   |     |     |
| isUltrawide          |     |     |     |     |     | 🔵   |     |
| isSuperultrawide     |     |     |     |     |     |     | 🔵   |
___

<br />


### **Svelte**

The reactive `Size` *class* can be accessed wherever [Svelte Runes](https://svelte.dev/docs/svelte/what-are-runes) are available   

```ts
if (Size.isSuperultrawide) {
  ...
}
```

### **Tailwind**
```html
<div class="afterTablet:text-lg">
  ...
</div>
  ```

### **Scss**

The `Size` *mixin* is be used in `<style lang="scss">` blocks

```scss
@include Size(isLaptop) {
  ...
};
```

#### **Breakpoint configs**  
##### *src/styles/tailwind.css*  
##### *src/lib/state/media-query.svelte.ts*  
##### *src/styles/mixins/_media-query.scss*  

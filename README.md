# **sv-tw-scss**

#### **Library Docs**

- **[Svelte](https://svelte.dev/docs/introduction)**
- **[Sveltekit](https://kit.svelte.dev/docs/introduction)**
- **[Tailwind](https://tailwindcss.com/docs/installation)**
- **[Scss](https://sass-lang.com/documentation/syntax)**
- **[TypeScript](https://www.typescriptlang.org/docs/)**
- **[Prettier](https://prettier.io/docs/en/index.html)**
- **[ESLint](https://eslint.org/docs/latest/)**

#### **VSCode Extensions**

- [**Svelte Intellisense**](https://marketplace.visualstudio.com/items?itemName=ardenivanov.svelte-intellisense)
- [**Svelte for VS Code**](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [**Tailwind CSS IntelliSense**](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [**Prettier - Code formatter**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

<br />

## **Setup**

`npm i`

`npm run dev`

<br />

## **Linting**

Format and lint consecutively

`npm run flint`

<br />

## **Global styles**

*src/styles/global.scss*

<br />

## **Media queries**

### **Svelte Store**

The readable store `ize` can be accessed with `$ize` in Svelte components  
Outside of Svelte components, use the `getSize()` function  
It can be compared against the `Size` enum

#### Enum properties  
##### MOBILE • TABLET • LAPTOP • DESKTOP • WIDE • ULTRAWIDE • SUPERULTRAWIDE

```ts
// Svelte components
if ($ize === Size.SUPERULTRAWIDE) {
  // do something big
}

// Typescript files
if (getSize() <= Size.TABLET) {
  // do something small
}
```

### **Tailwind Screens** ***&*** **Scss Mixins**

Tailwind and Scss are configured to use the following values

|*values*                  | *mob* | *tab* | *lap* | *dsk* | *wde* | *uwd* | *suw* |
|------------------------|-----|-----|-----|-----|-----|-----|-----|
| before(tablet)         | 🔵   |     |     |     |     |     |     |
| before(laptop)         | 🔵   | 🔵   |     |     |     |     |     |
| before(desktop)        | 🔵   | 🔵   | 🔵   |     |     |     |     |
| before(wide)           | 🔵   | 🔵   | 🔵   | 🔵   |     |     |     |
| before(ultrawide)      | 🔵   | 🔵   | 🔵   | 🔵   | 🔵   |     |     |
| before(superultrawide) | 🔵   | 🔵   | 🔵   | 🔵   | 🔵   | 🔵   |     |
| after(mobile)          |     | 🔵   | 🔵   | 🔵   | 🔵   | 🔵   | 🔵   |
| after(tablet)          |     |     | 🔵   | 🔵   | 🔵   | 🔵   | 🔵   |
| after(laptop)          |     |     |     | 🔵   | 🔵   | 🔵   | 🔵   |
| after(desktop)         |     |     |     |     | 🔵   | 🔵   | 🔵   |
| after(wide)            |     |     |     |     |     | 🔵   | 🔵   |
| after(ultrawide)       |     |     |     |     |     |     | 🔵   |
| is(small)              | 🔵   | 🔵   |     |     |     |     |     |
| is(medium)             |     |     | 🔵   | 🔵   |     |     |     |
| is(large)              |     |     |     |     | 🔵   | 🔵   | 🔵   |
| is(mobile)             | 🔵   |     |     |     |     |     |     |
| is(tablet)             |     | 🔵   |     |     |     |     |     |
| is(laptop)             |     |     | 🔵   |     |     |     |     |
| is(desktop)            |     |     |     | 🔵   |     |     |     |
| is(wide)               |     |     |     |     | 🔵   |     |     |
| is(ultrawide)          |     |     |     |     |     | 🔵   |     |
| is(superultrawide)     |     |     |     |     |     |     | 🔵   |
___

<br />

### **Tailwind**
```html
<div class="bg-blue-500 after(tablet):bg-green-500">
  default: blue
  larger than tablet: green
</div>
  ```

### 

  ### **Scss**

```scss
@include before(laptop) {
  div {
    color: red;
  }
};
```

#### **Breakpoint configs**  
##### *tailwind.config.js*  
##### *src/lib/utils/media-query.ts*  
##### *src/styles/mixins/_mq-breakpoints.scss*  

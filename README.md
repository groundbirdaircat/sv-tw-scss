# **sv-tw-scss**

#### **Library Docs:**

- **[Svelte](https://svelte.dev/docs/introduction)**
- **[Sveltekit](https://kit.svelte.dev/docs/introduction)**
- **[Tailwind](https://tailwindcss.com/docs/installation)**
- **[Scss](https://sass-lang.com/documentation/syntax)**
- **[TypeScript](https://www.typescriptlang.org/docs/)**
- **[Prettier](https://prettier.io/docs/en/index.html)**
- **[ESLint](https://eslint.org/docs/latest/)**

#### **VSCode Extensions:**

- [**Tailwind CSS IntelliSense**](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [**Svelte Intellisense**](https://marketplace.visualstudio.com/items?itemName=ardenivanov.svelte-intellisense)
- [**Svelte for VS Code**](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

<br />

## **Setup**

`npm i`

`npm run dev`

<br />

## **Linting**

Format and lint consecutively:

`npm run flint`

<br />

## **Global styles**

**src/styles/global.scss**

<br />

## **Media query mixins**

- **before()**
- **after()**
- **is()**

Uses:

- **mobile**
- **tablet**
- **laptop**
- **desktop**
- **wide**
- **ultrawide**
- **superultrawide**

`is()` also accepts:

- **small**
- **medium**
- **large**

<br />


```scss
// @use not required

@include before(tablet) {
  .example {
    color: blue;
  }
};
```

<br />

|                        | *mob* | *tab* | *lap* | *dsk* | *wde* | *uwd* | *suw* |
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
| is(mobile)             | 🔵   |     |     |     |     |     |     |
| is(tablet)             |     | 🔵   |     |     |     |     |     |
| is(laptop)             |     |     | 🔵   |     |     |     |     |
| is(desktop)            |     |     |     | 🔵   |     |     |     |
| is(wide)               |     |     |     |     | 🔵   |     |     |
| is(ultrawide)          |     |     |     |     |     | 🔵   |     |
| is(superultrawide)     |     |     |     |     |     |     | 🔵   |
| is(small)              | 🔵   | 🔵   |     |     |     |     |     |
| is(medium)             |     |     | 🔵   | 🔵   |     |     |     |
| is(large)              |     |     |     |     | 🔵   | 🔵   | 🔵   |
___

<br />

# **sv-tw-scss**

### **[Sveltekit](https://kit.svelte.dev/docs/introduction) 🔹 [Tailwind](https://tailwindcss.com/docs/installation) 🔹 [Scss](https://sass-lang.com/documentation/syntax) 🔹 [TS](https://www.typescriptlang.org/docs/) 🔹 [Prettier](https://prettier.io/docs/en/index.html) 🔹 [ESLint](https://eslint.org/docs/latest/)**

<br />

## **Setup**

`npm i`

<br />

## **Dev Server**

`npm run dev`

For the **--host** flag:

`npm run dev-h`

<br />

## **Linting**

Format and lint consecutively:

`npm run flint`


<br />

## **Aliases**

- **$dev**
- **$utils**
- **$assets**
- **$guards**
- **$models**
- **$stores**
- **$actions**
- **$classes**
- **$services**
- **$components**

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

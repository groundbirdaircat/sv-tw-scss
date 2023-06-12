# **sv-tw-scss**

## **[`Sveltekit`](https://kit.svelte.dev/docs/introduction) 🔹 [`Tailwind`](https://tailwindcss.com/docs/installation) 🔹 [`Scss`](https://sass-lang.com/documentation/syntax) 🔹 [`TS`](https://www.typescriptlang.org/docs/) 🔹 [`Prettier`](https://prettier.io/docs/en/index.html) 🔹 [`ESLint`](https://eslint.org/docs/latest/)**

<br />

## **Setup**

****

`npm i`

<br />

## **Linting**

****

`npm run format-lint`

<br />

## **Aliases**

****

Directories in the lib folder:

- **$utils**
- **$guards**
- **$stores**
- **$assets**
- **$models**
- **$actions**
- **$services**
- **$components**

<br />

## **Global styles**

****

Global styles go in **src/styles/global.scss**.

<br />

## **Media query mixins**

****

- **before()**
- **after()**
- **is()**

Can be used with:

- **mobile**
- **tablet**
- **laptop**
- **desktop**
- **wide**
- **ultrawide**
- **superultrawide**


```scss
// @use not required

@include before(tablet) {
  .example {
    color: blue;
  }
};
```

|                        | mobile | tablet | laptop | desktop | wide | ultrawide | superultrawide |
|------------------------|--------|--------|--------|---------|------|-----------|----------------|
| **before**(tablet)         | 🔵      |        |        |         |      |           |                |
| **before**(laptop)         | 🔵      | 🔵      |        |         |      |           |                |
| **before**(desktop)        | 🔵      | 🔵      | 🔵      |         |      |           |                |
| **before**(wide)           | 🔵      | 🔵      | 🔵      | 🔵       |      |           |                |
| **before**(ultrawide)      | 🔵      | 🔵      | 🔵      | 🔵       | 🔵    |           |                |
| **before**(superultrawide) | 🔵      | 🔵      | 🔵      | 🔵       | 🔵    | 🔵         |                |
| **after**(mobile)          |        | 🔵      | 🔵      | 🔵       | 🔵    | 🔵         | 🔵              |
| **after**(tablet)          |        |        | 🔵      | 🔵       | 🔵    | 🔵         | 🔵              |
| **after**(laptop)          |        |        |        | 🔵       | 🔵    | 🔵         | 🔵              |
| **after**(desktop)         |        |        |        |         | 🔵    | 🔵         | 🔵              |
| **after**(wide)            |        |        |        |         |      | 🔵         | 🔵              |
| **after**(ultrawide)       |        |        |        |         |      |           | 🔵              |
| **is**(mobile)             | 🔵      |        |        |         |      |           |                |
| **is**(tablet)             |        | 🔵      |        |         |      |           |                |
| **is**(laptop)             |        |        | 🔵      |         |      |           |                |
| **is**(desktop)            |        |        |        | 🔵       |      |           |                |
| **is**(wide)               |        |        |        |         | 🔵    |           |                |
| **is**(ultrawide)          |        |        |        |         |      | 🔵         |                |
| **is**(superultrawide)     |        |        |        |         |      |           | 🔵              |

<br />

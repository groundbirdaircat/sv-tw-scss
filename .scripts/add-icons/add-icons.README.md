# add-icons

## What it does

Imports SVG icons from `src/lib/assets/add-icons/` into `src/lib/modules/general/icon.ts`.

## How to use

1. Drop `.svg` files into `src/lib/assets/add-icons/`
2. Run `npm run add-icons`

## Notes

- Icon names based on filename
- Strips root SVG attributes except `viewBox`
- Adds `fill="#000000"` to paths missing a `fill` attribute
- Sorts the `Icon` object by property length (longest first)
- Deletes SVGs after successful import

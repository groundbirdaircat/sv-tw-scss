// typescript complains about custom actions
// https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#im-using-an-attributeevent-on-a-dom-element-and-it-throws-a-type-error
declare namespace svelteHTML {
	/* eslint-disable-next-line */
	interface HTMLAttributes<T> {
		/* eslint-disable-next-line */
		'on:outclick'?: (event: any) => any;
	}
}

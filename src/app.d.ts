declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  namespace svelteHTML {
    interface HTMLAttributes<T> {
      onClickOutside?: CompositionEventHandler<T>;
      onKeypress?: CompositionEventHandler<T>;
      onKeydown?: CompositionEventHandler<T>;
    }
  }
}

export {};

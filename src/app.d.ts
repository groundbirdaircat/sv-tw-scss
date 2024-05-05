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
      onPressKeyCode?: CompositionEventHandler<T>;
    }
  }
}

export {};

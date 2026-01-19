declare namespace JSX {
  type Element = HTMLElement;

  interface IntrinsicElements {
    div: Partial<HTMLDivElement>;
    li: Partial<HTMLLIElement>;
    ul: Partial<HTMLUListElement>;
    span: Partial<HTMLSpanElement>;
    h1: Partial<HTMLHeadingElement>;
    p: Partial<HTMLParagraphElement>;
    main: Partial<HTMLMainElement>;
    form: Partial<HTMLFormElement>;
    input: Partial<HTMLInputElement>;
    button: Partial<HTMLButtonElement>;
    textarea: Partial<HTMLTextAreaElement>;
    a: Partial<HTMLAnchorElement>;
    // Можно добавить и другие, которые вам нужны
  }
}

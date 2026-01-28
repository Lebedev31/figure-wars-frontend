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
    h2: Partial<HTMLHeadingElement>;
    img: Partial<HTMLImageElement>;
    select: Partial<HTMLSelectElement>;
    option: Partial<HTMLOptionElement>;
    header: Partial<HTMLHeadElement>;
    // Переопределяем svg
    svg: Partial<Omit<SVGSVGElement, "viewBox">> & {
      viewBox?: string;
      width?: string | number;
      height?: string | number;
      fill?: string;
    };

    // Для path тоже лучше явно указать d
    path: Partial<Omit<SVGPathElement, "d">> & {
      d?: string;
      fill?: string;
      stroke?: string;
    };
    circle: Partial<SVGCircleElement>;
  }
}

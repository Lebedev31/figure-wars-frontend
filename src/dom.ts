type Props = {
  [key: string]: any;
  children?: Children;
  ref?: (el: HTMLElement | SVGElement) => void;
  style?: Partial<CSSStyleDeclaration> | string;
  className?: string;
  class?: string;
};

type Child =
  | HTMLElement
  | SVGElement
  | Text
  | string
  | number
  | boolean
  | null
  | undefined;
type Children = Child | Child[];

const SVG_TAGS = new Set([
  "svg",
  "path",
  "circle",
  "rect",
  "line",
  "polyline",
  "polygon",
  "ellipse",
  "g",
  "text",
  "tspan",
  "defs",
  "use",
  "symbol",
]);

export function h(
  tag: string | ((props: Props) => HTMLElement | SVGElement),
  props: Props | null,
  ...children: Child[]
): HTMLElement | SVGElement {
  // Поддержка функциональных компонентов
  if (typeof tag === "function") {
    return tag({ ...props, children });
  }

  // Создание элемента (HTML или SVG)
  const isSvg = SVG_TAGS.has(tag);
  const el = isSvg
    ? document.createElementNS("http://www.w3.org/2000/svg", tag)
    : document.createElement(tag);

  // Обработка props
  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      if (key === "children" || value == null) return;

      // Ref
      if (key === "ref" && typeof value === "function") {
        value(el);
        return;
      }

      // Стили
      if (key === "style") {
        if (typeof value === "string") {
          el.setAttribute("style", value);
        } else if (typeof value === "object") {
          Object.assign(el.style, value);
        }
        return;
      }

      // className / class
      if (key === "className" || key === "class") {
        if (isSvg) {
          el.setAttribute("class", value);
        } else {
          (el as HTMLElement).className = value;
        }
        return;
      }

      // Обработчики событий (onClick, onInput и т.д.)
      if (key.startsWith("on") && typeof value === "function") {
        const eventName = key.substring(2).toLowerCase();
        el.addEventListener(eventName, value);
        return;
      }

      // dangerouslySetInnerHTML
      if (key === "dangerouslySetInnerHTML" && value?.__html) {
        el.innerHTML = value.__html;
        return;
      }

      // Булевы атрибуты (disabled, checked и т.д.)
      if (typeof value === "boolean") {
        if (value) {
          el.setAttribute(key, "");
        }
        return;
      }

      // Обычные атрибуты
      if (isSvg || key.includes("-") || key === "viewBox") {
        el.setAttribute(key, String(value));
      } else {
        (el as any)[key] = value;
      }
    });
  }

  // Обработка children
  const flatChildren = children.flat(Infinity);

  flatChildren.forEach((child) => {
    if (child == null || child === false || child === true) return;

    if (typeof child === "string" || typeof child === "number") {
      el.appendChild(document.createTextNode(String(child)));
    } else if (child instanceof Node) {
      el.appendChild(child);
    }
  });

  return el;
}

// Вспомогательная функция для создания фрагментов
export function Fragment(props: { children: Children }): DocumentFragment {
  const fragment = document.createDocumentFragment();
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];

  children.flat(Infinity).forEach((child) => {
    if (child == null || child === false || child === true) return;

    if (typeof child === "string" || typeof child === "number") {
      fragment.appendChild(document.createTextNode(String(child)));
    } else if (child instanceof Node) {
      fragment.appendChild(child);
    }
  });

  return fragment as any;
}

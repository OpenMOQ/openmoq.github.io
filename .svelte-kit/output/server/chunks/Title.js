import { a3 as sanitize_props, a4 as rest_props, a5 as fallback, a6 as spread_attributes, V as escape_html, a7 as bind_props, Q as pop, O as push, a0 as element, X as attr_class, $ as attr_style, Y as clsx } from "./index.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "data",
    "viewBox",
    "size",
    "width",
    "height",
    "color",
    "stroke",
    "fill",
    "title"
  ]);
  push();
  let elements;
  let data = fallback($$props["data"], "");
  let viewBox = fallback($$props["viewBox"], () => extractViewBox(data), true);
  let size = fallback($$props["size"], "20px");
  let width = fallback($$props["width"], size);
  let height = fallback($$props["height"], size);
  let color = fallback($$props["color"], "currentColor");
  let stroke = fallback($$props["stroke"], color);
  let fill = fallback($$props["fill"], color);
  let title = fallback($$props["title"], "");
  function extractViewBox(svg) {
    const regex = /viewBox="([\d\- \.]+)"/;
    const res = regex.exec(svg);
    if (!res) return "0 0 20 20";
    return res[1];
  }
  elements = data.replace(/<svg[ \n]([^>]*)>/, "").replace("</svg>", "");
  $$payload.out.push(`<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width,
      height,
      viewBox,
      stroke,
      fill,
      ...$$restProps
    },
    null,
    void 0,
    void 0,
    3
  )}>`);
  if (title) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<title>${escape_html(title)}</title>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->${html(elements)}</svg>`);
  bind_props($$props, {
    data,
    viewBox,
    size,
    width,
    height,
    color,
    stroke,
    fill,
    title
  });
  pop();
}
const anchorIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10">\n  <path d="M3 9.5H0v-3h3v3Zm3-3H3v-3h3v3Zm-3-3H0v-3h3v3Z" />\n</svg>\n';
function Text($$payload, $$props) {
  let {
    tag = "p",
    color,
    opacity = 1,
    size,
    weight = 400,
    align = "left",
    uppercase = false,
    font = "be-vietnam-pro",
    maxWidth,
    className,
    centered = false,
    children
  } = $$props;
  element(
    $$payload,
    tag,
    () => {
      $$payload.out.push(`${attr_class(
        clsx([
          "text",
          color,
          `opacity-${opacity * 100}`,
          `size-${size}`,
          `weight-${weight}`,
          `align-${align}`,
          font,
          uppercase && "uppercase",
          centered && "centered",
          className
        ]),
        "svelte-19nsq94"
      )}${attr_style(maxWidth ? `max-width: ${maxWidth}px` : void 0)}`);
    },
    () => {
      children($$payload);
      $$payload.out.push(`<!---->`);
    }
  );
}
function Title($$payload, $$props) {
  let {
    level,
    color,
    size,
    weight,
    align = "left",
    balance = false,
    className,
    maxWidth,
    children,
    centered = false
  } = $$props;
  element(
    $$payload,
    `h${level}`,
    () => {
      $$payload.out.push(`${attr_class(
        clsx([
          "title",
          color,
          `size-${size}`,
          `weight-${weight}`,
          `align-${align}`,
          centered && "centered",
          balance && "balance",
          className
        ]),
        "svelte-4miuqv"
      )}${attr_style(maxWidth ? `max-width: ${maxWidth}px` : void 0)}`);
    },
    () => {
      children($$payload);
      $$payload.out.push(`<!---->`);
    }
  );
}
export {
  Icon as I,
  Text as T,
  Title as a,
  anchorIcon as b
};

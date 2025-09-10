import { X as attr_class, $ as attr_style, Y as clsx } from "./index.js";
function Container($$payload, $$props) {
  let { maxWidth, sideLines, lines, relative = false, children } = $$props;
  $$payload.out.push(`<div${attr_class(
    clsx([
      "container",
      !maxWidth && "default",
      sideLines && `lines-${sideLines}`,
      lines && `lines-${lines}`,
      relative && "relative"
    ]),
    "svelte-14r6caw"
  )}${attr_style(maxWidth ? `max-width: ${maxWidth}px` : void 0)}>`);
  children($$payload);
  $$payload.out.push(`<!----></div>`);
}
function Divider($$payload, $$props) {
  let { color = "dark" } = $$props;
  $$payload.out.push(`<hr${attr_class(clsx(["divider", color]), "svelte-10omayx")}/>`);
}
export {
  Container as C,
  Divider as D
};

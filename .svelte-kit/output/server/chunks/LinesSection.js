import { a0 as element, X as attr_class, $ as attr_style, Y as clsx, W as attr } from "./index.js";
import { D as Divider, C as Container } from "./Divider.js";
function Padding($$payload, $$props) {
  let {
    tag,
    top,
    bottom,
    overflow = "visible",
    position = "static",
    children
  } = $$props;
  element(
    $$payload,
    tag,
    () => {
      $$payload.out.push(`${attr_class(
        clsx([
          "padding",
          overflow && `overflow-${overflow}`,
          position && `position-${position}`
        ]),
        "svelte-g7e0wp"
      )}${attr_style(`--top: ${top}px; --bottom: ${bottom}px`)}`);
    },
    () => {
      children($$payload);
      $$payload.out.push(`<!---->`);
    }
  );
}
function Section($$payload, $$props) {
  let { id, background, overflow, children } = $$props;
  $$payload.out.push(`<section${attr("id", id)}${attr_class(clsx(["wrapper", background, overflow && "overflow"]), "svelte-1ry8c5t")}>`);
  children($$payload);
  $$payload.out.push(`<!----></section>`);
}
function LinesSection($$payload, $$props) {
  let { id, background, children } = $$props;
  const dividerColor = background === "dark" ? "light" : "dark";
  Divider($$payload, { color: dividerColor });
  $$payload.out.push(`<!----> `);
  Section($$payload, {
    background,
    id,
    children: ($$payload2) => {
      $$payload2.out.push(`<div${attr_class(clsx(["divider", "top"]), "svelte-6zk1el")}>`);
      Divider($$payload2, { color: dividerColor });
      $$payload2.out.push(`<!----></div> `);
      Container($$payload2, {
        sideLines: dividerColor,
        lines: "single",
        children: ($$payload3) => {
          children($$payload3);
          $$payload3.out.push(`<!---->`);
        }
      });
      $$payload2.out.push(`<!----> <div${attr_class(clsx(["divider", "bottom"]), "svelte-6zk1el")}>`);
      Divider($$payload2, { color: dividerColor });
      $$payload2.out.push(`<!----></div>`);
    }
  });
  $$payload.out.push(`<!---->`);
}
export {
  LinesSection as L,
  Padding as P,
  Section as S
};

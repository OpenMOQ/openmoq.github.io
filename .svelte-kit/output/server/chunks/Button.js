import { b as base } from "./paths.js";
import { r as resolve_route } from "./routing.js";
import { W as attr, X as attr_class, Y as clsx, Q as pop, O as push } from "./index.js";
import { I as Icon, b as anchorIcon } from "./Title.js";
function resolve(id, params) {
  return base + resolve_route(
    id,
    /** @type {Record<string, string>} */
    params
  );
}
function Button($$payload, $$props) {
  push();
  let {
    children,
    variant = "primary",
    size = "md",
    withArrow = false,
    disabled = false,
    color,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  const className = [
    "button",
    variant,
    color && `color-${color}`,
    size && `size-${size}`
  ];
  function buttonContent($$payload2) {
    $$payload2.out.push(`<span class="svelte-bg97h3">`);
    children($$payload2);
    $$payload2.out.push(`<!----></span> `);
    if (withArrow) {
      $$payload2.out.push("<!--[-->");
      $$payload2.out.push(`<span class="arrow svelte-bg97h3">`);
      Icon($$payload2, { data: anchorIcon, class: "arrow", stroke: "none", size: "10" });
      $$payload2.out.push(`<!----></span>`);
    } else {
      $$payload2.out.push("<!--[!-->");
    }
    $$payload2.out.push(`<!--]-->`);
  }
  if ("href" in rest) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<a${attr("href", rest.href)}${attr_class(clsx(className), "svelte-bg97h3")}>`);
    buttonContent($$payload);
    $$payload.out.push(`<!----></a>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<button${attr_class(clsx(className), "svelte-bg97h3")}${attr("type", rest.type)}${attr("disabled", disabled, true)}>`);
    buttonContent($$payload);
    $$payload.out.push(`<!----></button>`);
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
export {
  Button as B,
  resolve as r
};

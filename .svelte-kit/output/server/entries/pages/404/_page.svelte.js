import { W as attr, Q as pop, O as push } from "../../../chunks/index.js";
import { a as Title, T as Text, I as Icon, b as anchorIcon } from "../../../chunks/Title.js";
import { B as Button, r as resolve } from "../../../chunks/Button.js";
import { M as Meta } from "../../../chunks/Meta.js";
const dotsImage = "/_app/immutable/assets/dots-2.a4IwvGNu.svg";
function _page($$payload, $$props) {
  push();
  Meta($$payload, { title: "Page not found" });
  $$payload.out.push(`<!----> <div class="wrapper svelte-1q7bwuj">`);
  Title($$payload, {
    level: 1,
    color: "light",
    size: 60,
    weight: 500,
    className: "mb-40",
    align: "center",
    children: ($$payload2) => {
      $$payload2.out.push(`<!---->404`);
    }
  });
  $$payload.out.push(`<!----> `);
  Text($$payload, {
    color: "light",
    size: 16,
    weight: 400,
    className: "mb-40",
    align: "center",
    children: ($$payload2) => {
      $$payload2.out.push(`<!---->The page you are looking for doesn’t exist or has been moved.`);
    }
  });
  $$payload.out.push(`<!----> `);
  Button($$payload, {
    href: resolve("/"),
    children: ($$payload2) => {
      $$payload2.out.push(`<span class="buttonContent svelte-1q7bwuj"><span class="icon svelte-1q7bwuj">`);
      Icon($$payload2, { data: anchorIcon, class: "arrow", stroke: "none", size: "10" });
      $$payload2.out.push(`<!----></span> Back to homepage</span>`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> <img${attr("src", dotsImage)} alt="Error" class="dots svelte-1q7bwuj"${attr("width", 812)}${attr("height", 833)}/></div>`);
  pop();
}
export {
  _page as default
};

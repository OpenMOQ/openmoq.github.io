import "clsx";
import { L as LinesSection, P as Padding } from "../../../chunks/LinesSection.js";
import { a as Title, T as Text, I as Icon, b as anchorIcon } from "../../../chunks/Title.js";
import { T as ensure_array_like, V as escape_html, W as attr } from "../../../chunks/index.js";
import { M as Meta } from "../../../chunks/Meta.js";
function ContactBoxes($$payload) {
  const data = [
    {
      title: "General support",
      text: "For questions about OpenMOQ or help with resources.",
      link: "support@openmoq.org"
    },
    {
      title: "Membership & partnerships",
      text: "Interested in joining or collaborating with OpenMOQ? Let’s talk.",
      link: "membership@openmoq.org"
    },
    {
      title: "Media requests",
      text: "For interviews, press inquiries, or official statements.",
      link: "director@openmoq.org"
    }
  ];
  const each_array = ensure_array_like(data);
  $$payload.out.push(`<ul class="boxes svelte-vj5sv5"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out.push(`<li class="box">`);
    Title($$payload, {
      level: 3,
      size: 20,
      weight: 400,
      color: "light",
      className: "mb-10",
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->${escape_html(item.title)}`);
      }
    });
    $$payload.out.push(`<!----> `);
    Text($$payload, {
      color: "light",
      size: 15,
      opacity: 0.8,
      maxWidth: 300,
      className: "mb-20",
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->${escape_html(item.text)}`);
      }
    });
    $$payload.out.push(`<!----> <div class="link svelte-vj5sv5">`);
    Icon($$payload, {
      data: anchorIcon,
      stroke: "none",
      size: "10",
      fill: "currentColor"
    });
    $$payload.out.push(`<!----> <a${attr("href", `mailto:${item.link}`)}>${escape_html(item.link)}</a></div></li>`);
  }
  $$payload.out.push(`<!--]--></ul>`);
}
function Header($$payload) {
  LinesSection($$payload, {
    background: "dark",
    children: ($$payload2) => {
      Padding($$payload2, {
        tag: "div",
        top: 200,
        bottom: 200,
        children: ($$payload3) => {
          Title($$payload3, {
            level: 1,
            color: "light",
            size: 60,
            weight: 400,
            className: "mb-20",
            align: "center",
            maxWidth: 500,
            centered: true,
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->Get in touch with OpenMOQ`);
            }
          });
          $$payload3.out.push(`<!----> `);
          Text($$payload3, {
            color: "light",
            size: 18,
            weight: 400,
            align: "center",
            className: "mb-120",
            maxWidth: 550,
            opacity: 0.8,
            centered: true,
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->We’re here to answer your questions, explore collaboration, and share
      updates on our work.`);
            }
          });
          $$payload3.out.push(`<!----> `);
          ContactBoxes($$payload3);
          $$payload3.out.push(`<!---->`);
        }
      });
    }
  });
}
function _page($$payload) {
  Meta($$payload, { title: "Contact" });
  $$payload.out.push(`<!----> `);
  Header($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _page as default
};

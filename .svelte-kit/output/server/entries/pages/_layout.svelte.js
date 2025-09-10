import { T as ensure_array_like, V as escape_html, Q as pop, O as push, W as attr, X as attr_class, Y as clsx, Z as head } from "../../chunks/index.js";
import "clsx";
import { B as Button } from "../../chunks/Button.js";
import { C as Container, D as Divider } from "../../chunks/Divider.js";
import { T as Text, a as Title, I as Icon } from "../../chunks/Title.js";
import { e as external, g as getInternalHref, i as internal } from "../../chunks/routes.js";
import { M as Meta } from "../../chunks/Meta.js";
function List($$payload, $$props) {
  let { data } = $$props;
  const each_array = ensure_array_like(data);
  $$payload.out.push(`<ul class="list svelte-z2gj8y"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out.push(`<li class="item svelte-z2gj8y">`);
    Text($$payload, {
      color: "dark",
      tag: "p",
      size: 14,
      weight: 400,
      opacity: 0.8,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->${escape_html(item)}`);
      }
    });
    $$payload.out.push(`<!----></li>`);
  }
  $$payload.out.push(`<!--]--></ul>`);
}
function Footer($$payload, $$props) {
  push();
  $$payload.out.push(`<footer class="footer svelte-1bklmoz">`);
  Container($$payload, {
    sideLines: "dark",
    lines: "double",
    children: ($$payload2) => {
      $$payload2.out.push(`<div class="row svelte-1bklmoz"><div class="column svelte-1bklmoz"><div class="content svelte-1bklmoz">`);
      Title($$payload2, {
        level: 3,
        color: "dark",
        size: 20,
        weight: 500,
        className: "mb-20",
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->Get involved`);
        }
      });
      $$payload2.out.push(`<!----> `);
      Text($$payload2, {
        color: "dark",
        tag: "p",
        size: 14,
        weight: 400,
        opacity: 0.8,
        className: "mb-6",
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->Become an organizational member:`);
        }
      });
      $$payload2.out.push(`<!----> <div class="list svelte-1bklmoz">`);
      List($$payload2, {
        data: [
          "Participate in the Steering Committee",
          "Contribute engineering resources",
          "Define roadmap and priorities"
        ]
      });
      $$payload2.out.push(`<!----></div> <div class="buttons svelte-1bklmoz">`);
      Button($$payload2, {
        href: external.join,
        withArrow: true,
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->Join the initiative`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></div></div></div> <div class="column svelte-1bklmoz"><div class="content svelte-1bklmoz">`);
      Title($$payload2, {
        level: 3,
        color: "dark",
        size: 20,
        weight: 500,
        className: "mb-20",
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->Stay informed`);
        }
      });
      $$payload2.out.push(`<!----> `);
      Text($$payload2, {
        color: "dark",
        tag: "p",
        size: 14,
        weight: 400,
        opacity: 0.8,
        className: "mb-6",
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->Sign up to get email updates about:`);
        }
      });
      $$payload2.out.push(`<!----> <div class="list svelte-1bklmoz">`);
      List($$payload2, {
        data: [
          "Technical milestones and releases",
          "Community events and workshops",
          "Contribution opportunities"
        ]
      });
      $$payload2.out.push(`<!----></div> <div class="buttons svelte-1bklmoz">`);
      Button($$payload2, {
        href: external.join,
        withArrow: true,
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->Send me updates`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></div></div></div></div>`);
    }
  });
  $$payload.out.push(`<!----> `);
  Divider($$payload, { color: "dark" });
  $$payload.out.push(`<!----> `);
  Container($$payload, {
    sideLines: "dark",
    children: ($$payload2) => {
      $$payload2.out.push(`<div class="empty svelte-1bklmoz"></div>`);
    }
  });
  $$payload.out.push(`<!----></footer>`);
  pop();
}
const openmoq = "/_app/immutable/assets/openmoq.BvNsTLvx.svg";
const hamburgerIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">\n    <path\n        d="M25 21.75a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h20Zm0-7.5a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h20Zm0-7.5a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h20Z" />\n</svg>\n';
const menuCloseIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">\n    <path\n        d="M21.97 6.97a.75.75 0 1 1 1.06 1.06L16.06 15l6.97 6.97a.75.75 0 1 1-1.06 1.06L15 16.06l-6.97 6.97a.75.75 0 1 1-1.06-1.06L13.94 15 6.97 8.03a.75.75 0 1 1 1.06-1.06L15 13.94l6.97-6.97Z" />\n</svg>\n';
function Menu($$payload, $$props) {
  push();
  const links = [
    { label: "Why OpenMOQ", href: getInternalHref("why") },
    { label: "Technology", href: getInternalHref("technology") },
    { label: "Members", href: getInternalHref("members") },
    { label: "Get Involved", href: internal.contact }
  ];
  let { isOpen } = $$props;
  const each_array = ensure_array_like(links);
  $$payload.out.push(`<div class="menu-container svelte-1w2c6o9"><input type="checkbox" id="menu-toggle" class="menu-toggle svelte-1w2c6o9"${attr("checked", isOpen, true)}/> <label for="menu-toggle" class="menu-button svelte-1w2c6o9"><div class="hamburger-icon svelte-1w2c6o9">`);
  Icon($$payload, { data: hamburgerIcon, size: "30", stroke: "none" });
  $$payload.out.push(`<!----></div> <div class="close-icon svelte-1w2c6o9">`);
  Icon($$payload, { data: menuCloseIcon, size: "30", stroke: "none" });
  $$payload.out.push(`<!----></div></label> <nav class="menu svelte-1w2c6o9"><ul class="links svelte-1w2c6o9"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$payload.out.push(`<li class="item"><a${attr("href", link.href)} class="link svelte-1w2c6o9">${escape_html(link.label)}</a></li>`);
  }
  $$payload.out.push(`<!--]--></ul></nav></div>`);
  pop();
}
function Topbar($$payload, $$props) {
  push();
  let isOpen = false;
  $$payload.out.push(`<div><div${attr_class(clsx(["wrapper", "top", isOpen]), "svelte-1akjid1")}>`);
  Container($$payload, {
    children: ($$payload2) => {
      $$payload2.out.push(`<div class="content svelte-1akjid1"><a${attr("href", internal.index)}><img${attr("src", openmoq)} alt="OpenMOQ logo"${attr("width", 168)}${attr("height", 34)} class="logo svelte-1akjid1"/></a> `);
      Menu($$payload2, {
        isOpen
      });
      $$payload2.out.push(`<!----></div>`);
    }
  });
  $$payload.out.push(`<!----></div> <button${attr_class(clsx(["overlay", isOpen]), "svelte-1akjid1")}${attr("tabindex", -1)} aria-label="Close menu"></button></div>`);
  pop();
}
const favicon96x96 = "data:image/png;base64,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";
const faviconSvg = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='28'%20height='28'%3e%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28%2014C28%2021.732%2021.732%2028%2014%2028C6.26802%2028%200%2021.732%200%2014C0%206.26801%206.26802%200%2014%200C21.732%200%2028%206.26801%2028%2014ZM8.40001%2014C8.40001%2017.0928%2010.9072%2019.6%2014%2019.6C17.0928%2019.6%2019.6%2017.0928%2019.6%2014C19.6%2010.9072%2017.0928%208.4%2014%208.4C10.9072%208.4%208.40001%2010.9072%208.40001%2014Z'%20fill='%235950FA'%3e%3c/path%3e%3c/svg%3e%3cstyle%3e@media%20(prefers-color-scheme:%20light)%20{%20:root%20{%20filter:%20none;%20}%20}%20@media%20(prefers-color-scheme:%20dark)%20{%20:root%20{%20filter:%20contrast(0.8333333333333334)%20brightness(1.7);%20}%20}%20%3c/style%3e%3c/svg%3e";
const favicon = "/_app/immutable/assets/favicon.CjYWDbNF.ico";
const appleTouchIcon = "data:image/png;base64,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";
const siteWebmanifest = "data:application/manifest+json;base64,ewogICJuYW1lIjogIk9wZW5NT1EiLAogICJzaG9ydF9uYW1lIjogIk9wZW5NT1EiLAogICJpY29ucyI6IFsKICAgIHsKICAgICAgInNyYyI6ICIvd2ViLWFwcC1tYW5pZmVzdC0xOTJ4MTkyLnBuZyIsCiAgICAgICJzaXplcyI6ICIxOTJ4MTkyIiwKICAgICAgInR5cGUiOiAiaW1hZ2UvcG5nIiwKICAgICAgInB1cnBvc2UiOiAibWFza2FibGUiCiAgICB9LAogICAgewogICAgICAic3JjIjogIi93ZWItYXBwLW1hbmlmZXN0LTUxMng1MTIucG5nIiwKICAgICAgInNpemVzIjogIjUxMng1MTIiLAogICAgICAidHlwZSI6ICJpbWFnZS9wbmciLAogICAgICAicHVycG9zZSI6ICJtYXNrYWJsZSIKICAgIH0KICBdLAogICJ0aGVtZV9jb2xvciI6ICIjZmZmZmZmIiwKICAiYmFja2dyb3VuZF9jb2xvciI6ICIjZmZmZmZmIiwKICAiZGlzcGxheSI6ICJzdGFuZGFsb25lIgp9Cg==";
function _layout($$payload, $$props) {
  let { children } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<link rel="icon" type="image/png"${attr("href", favicon96x96)} sizes="96x96"/> <link rel="icon" type="image/svg+xml"${attr("href", faviconSvg)}/> <link rel="shortcut icon"${attr("href", favicon)}/> <link rel="apple-touch-icon" sizes="180x180"${attr("href", appleTouchIcon)}/> <meta name="apple-mobile-web-app-title" content="OpenMOQ"/> <link rel="manifest"${attr("href", siteWebmanifest)}/> <link rel="icon"${attr("href", favicon)}/>`);
  });
  Meta($$payload, {
    title: "OpenMOQ Software Consortium",
    description: "OpenMOQ unites industry leaders to build future-ready, open-source media transport on QUIC and WebTransport, enabling low latency and massive scale."
  });
  $$payload.out.push(`<!----> <div class="layout svelte-1xoexue">`);
  Topbar($$payload);
  $$payload.out.push(`<!----> <div class="content svelte-1xoexue">`);
  children($$payload);
  $$payload.out.push(`<!----></div> `);
  Footer($$payload);
  $$payload.out.push(`<!----></div>`);
}
export {
  _layout as default
};

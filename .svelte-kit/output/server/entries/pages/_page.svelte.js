import "clsx";
import { _ as current_component, X as attr_class, $ as attr_style, Y as clsx, Q as pop, O as push, W as attr, T as ensure_array_like, V as escape_html } from "../../chunks/index.js";
import { B as Button } from "../../chunks/Button.js";
import { C as Container } from "../../chunks/Divider.js";
import { T as Text, a as Title, I as Icon } from "../../chunks/Title.js";
import { e as external, g as getInternalHref } from "../../chunks/routes.js";
import { P as Padding, S as Section, L as LinesSection } from "../../chunks/LinesSection.js";
import Autoscroll from "embla-carousel-auto-scroll";
import ClassNames from "embla-carousel-class-names";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function Dot($$payload) {
  $$payload.out.push(`<div class="dot svelte-3zh47r"></div>`);
}
const headerImage = {
  sources: {
    avif: "/_app/immutable/assets/header-bg.BrLbJMdX.avif 1440w, /_app/immutable/assets/header-bg.B0KQJlA8.avif 2880w",
    webp: "/_app/immutable/assets/header-bg.jOIw5ioL.webp 1440w, /_app/immutable/assets/header-bg.CeNLDQ2l.webp 2880w",
    jpeg: "/_app/immutable/assets/header-bg.DD23jcR_.jpeg 1440w, /_app/immutable/assets/header-bg.D1njhDuB.jpeg 2880w"
  },
  img: {
    src: "/_app/immutable/assets/header-bg.D1njhDuB.jpeg",
    w: 2880,
    h: 1438
  }
};
function Parallax($$payload, $$props) {
  push();
  let {
    top,
    left,
    opacity = 1,
    zIndex,
    boundary = 0.5,
    parallaxSpeed = 0.5,
    offset = "middle",
    parallaxDirection = "down",
    children
  } = $$props;
  let scrollY = 0;
  let elementHeight = 0;
  const handleScroll = () => {
    return;
  };
  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", handleScroll);
    }
  });
  const parallaxTransform = () => {
    const speed = parallaxSpeed * scrollY;
    const maxMovement = elementHeight * boundary;
    const constrainedSpeed = Math.max(-maxMovement, Math.min(maxMovement, speed));
    switch (parallaxDirection) {
      case "up":
        return `translate(0, ${-constrainedSpeed}px)`;
      case "down":
        return `translate(0, ${constrainedSpeed}px)`;
      case "left":
        return `translate(${-constrainedSpeed}px, 0)`;
      case "right":
        return `translate(${constrainedSpeed}px, 0)`;
      case "diagonal-up":
        return `translate(${constrainedSpeed * 0.5}px, ${-constrainedSpeed}px)`;
      case "diagonal-down":
        return `translate(${-constrainedSpeed * 0.5}px, ${constrainedSpeed}px)`;
      default:
        return `translate(0, ${-constrainedSpeed}px)`;
    }
  };
  $$payload.out.push(`<div${attr_class(clsx(["wrapper", left || top ? "absolute" : "relative"]), "svelte-1ujc1gl")}${attr_style(`top: ${top}%; left: ${left}%; z-index: ${zIndex}; opacity: ${opacity}; transform: ${parallaxTransform()};`)}>`);
  children($$payload);
  $$payload.out.push(`<!----></div>`);
  pop();
}
const planetImage = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20190%20190'%20fill='none'%3e%3cg%20filter='url(%23a)'%3e%3ccircle%20cx='95'%20cy='95'%20r='65'%20fill='url(%23b)'%20/%3e%3c/g%3e%3cdefs%3e%3cradialGradient%20id='b'%20cx='0'%20cy='0'%20r='1'%20gradientTransform='matrix(5.41665%20137.042%20-1562.65%201373.3%2085.792%2020.792)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23494955'%20/%3e%3cstop%20offset='1'%20stop-color='%23141414'%20/%3e%3c/radialGradient%3e%3cfilter%20id='a'%20width='190'%20height='190'%20x='0'%20y='0'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%20/%3e%3cfeBlend%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'%20/%3e%3cfeGaussianBlur%20result='effect1_foregroundBlur_63_641'%20stdDeviation='15'%20/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";
function Planet($$payload, $$props) {
  let { size, movement } = $$props;
  $$payload.out.push(`<img${attr("src", planetImage)} alt="Planet"${attr("width", size)}${attr("height", size)}${attr_class(clsx(["planet", movement && `movement-${movement}`]), "svelte-10jhxl4")}/>`);
}
function Header($$payload, $$props) {
  push();
  const list = ["Ingest", "Relay", "Playback"];
  Padding($$payload, {
    tag: "header",
    top: 140,
    bottom: 80,
    overflow: "hidden",
    position: "relative",
    children: ($$payload2) => {
      Container($$payload2, {
        relative: true,
        children: ($$payload3) => {
          Container($$payload3, {
            maxWidth: 960,
            children: ($$payload4) => {
              $$payload4.out.push(`<div class="listWrapper svelte-1wwlehv">`);
              Parallax($$payload4, {
                zIndex: 1,
                parallaxSpeed: 0.2,
                children: ($$payload5) => {
                  const each_array = ensure_array_like(list);
                  $$payload5.out.push(`<ul class="list svelte-1wwlehv"><!--[-->`);
                  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
                    let item = each_array[index];
                    $$payload5.out.push(`<li class="item svelte-1wwlehv">`);
                    if (index > 0) {
                      $$payload5.out.push("<!--[-->");
                      Dot($$payload5);
                    } else {
                      $$payload5.out.push("<!--[!-->");
                    }
                    $$payload5.out.push(`<!--]--> `);
                    Text($$payload5, {
                      tag: "span",
                      color: "light",
                      size: 13,
                      weight: 400,
                      uppercase: true,
                      font: "lexend-deca",
                      children: ($$payload6) => {
                        $$payload6.out.push(`<!---->${escape_html(item)}`);
                      }
                    });
                    $$payload5.out.push(`<!----></li>`);
                  }
                  $$payload5.out.push(`<!--]--></ul>`);
                }
              });
              $$payload4.out.push(`<!----></div> `);
              Title($$payload4, {
                level: 1,
                color: "light",
                size: 60,
                weight: 400,
                align: "center",
                balance: true,
                className: "mb-20",
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Building Open-Source MOQ Streaming Software`);
                }
              });
              $$payload4.out.push(`<!----> <div class="text svelte-1wwlehv">`);
              Text($$payload4, {
                color: "light",
                size: 18,
                opacity: 0.8,
                align: "center",
                weight: 300,
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->The OpenMOQ Software Consortium, initiated by industry leaders, is
          focused on advancing MOQ-based technology through high-performance,
          open-source software. Our mission is to deliver practical software and
          implementations that enable the next generation of media transport.`);
                }
              });
              $$payload4.out.push(`<!----></div> `);
              Parallax($$payload4, {
                zIndex: 1,
                parallaxSpeed: 0.03,
                parallaxDirection: "down",
                boundary: 2,
                children: ($$payload5) => {
                  $$payload5.out.push(`<div class="buttons svelte-1wwlehv">`);
                  Button($$payload5, {
                    href: external.join,
                    withArrow: true,
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->Join the initiative`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----> `);
                  Button($$payload5, {
                    href: getInternalHref("progress"),
                    variant: "secondary",
                    color: "light",
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->View progress`);
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out.push(`<!----></div>`);
                }
              });
              $$payload4.out.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----> `);
          Parallax($$payload3, {
            offset: "top",
            top: 60,
            left: -5,
            zIndex: -1,
            parallaxSpeed: 0.2,
            opacity: 0.6,
            boundary: 4,
            children: ($$payload4) => {
              Planet($$payload4, { size: 190, movement: 2 });
            }
          });
          $$payload3.out.push(`<!----> `);
          Parallax($$payload3, {
            offset: "top",
            top: 55,
            left: 85,
            zIndex: -1,
            opacity: 0.4,
            parallaxSpeed: 0.4,
            boundary: 4,
            children: ($$payload4) => {
              Planet($$payload4, { size: 64, movement: 1 });
            }
          });
          $$payload3.out.push(`<!----> `);
          Parallax($$payload3, {
            offset: "top",
            top: 0,
            left: 105,
            zIndex: -1,
            parallaxSpeed: 0.7,
            opacity: 0.6,
            boundary: 4,
            children: ($$payload4) => {
              Planet($$payload4, { size: 96, movement: 3 });
            }
          });
          $$payload3.out.push(`<!---->`);
        }
      });
      $$payload2.out.push(`<!----> `);
      if (typeof headerImage === "string") {
        $$payload2.out.push("<!--[-->");
        $$payload2.out.push(`<img${attr("src", headerImage.img.src)} alt="" class="background svelte-1wwlehv"${attr("width", headerImage.img.w)}${attr("height", headerImage.img.h)}/>`);
      } else {
        $$payload2.out.push("<!--[!-->");
        const each_array_1 = ensure_array_like(Object.entries(headerImage.sources));
        $$payload2.out.push(`<picture><!--[-->`);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let [format, srcset] = each_array_1[$$index_1];
          $$payload2.out.push(`<source${attr("srcset", srcset)}${attr("type", "image/" + format)}/>`);
        }
        $$payload2.out.push(`<!--]--> <img${attr("src", headerImage.img.src)} alt="" class="background svelte-1wwlehv"${attr("width", headerImage.img.w)}${attr("height", headerImage.img.h)}/></picture>`);
      }
      $$payload2.out.push(`<!--]-->`);
    }
  });
  pop();
}
const dotsImage = "/_app/immutable/assets/dots.CbLuLic0.svg";
function GridList($$payload, $$props) {
  let { children, columns, height = "auto" } = $$props;
  $$payload.out.push(`<ul${attr_class(clsx(["list", `height-${height}`, `columns-${columns}`]), "svelte-17z1aes")}>`);
  children($$payload);
  $$payload.out.push(`<!----></ul>`);
}
function GridListItem($$payload, $$props) {
  let { color, children } = $$props;
  $$payload.out.push(`<li${attr_class(clsx(["item", color]), "svelte-revgna")}>`);
  children($$payload);
  $$payload.out.push(`<!----></li>`);
}
function Subtitle($$payload, $$props) {
  let { level, children } = $$props;
  $$payload.out.push(`<span class="title mb-20 svelte-1myp94f">`);
  Dot($$payload);
  $$payload.out.push(`<!----> `);
  Title($$payload, {
    level,
    color: "dark",
    size: 20,
    weight: 500,
    children: ($$payload2) => {
      children($$payload2);
      $$payload2.out.push(`<!---->`);
    }
  });
  $$payload.out.push(`<!----></span>`);
}
function Benefits($$payload) {
  const benefits = [
    {
      title: "Tunable Latency Regimes",
      description: "From real-time to sub-second to VOD (any-latency streaming), even with a single media publisher"
    },
    {
      title: "Broadcast Scale",
      description: "Supports delivery across millions of sessions"
    },
    {
      title: "High Performance & Reliability",
      description: "Built by companies who run infrastructure at scale"
    },
    {
      title: "Robust Architecture",
      description: "Clean, maintainable, and flexible by design"
    },
    {
      title: "Open-Source Foundation",
      description: "What we build may be freely used by the industry"
    },
    {
      title: "Integrated Signaling",
      description: "Simplified and versatile configurations for greater reliability and ease of deployment"
    }
  ];
  Section($$payload, {
    background: "light",
    overflow: true,
    children: ($$payload2) => {
      Container($$payload2, {
        children: ($$payload3) => {
          Padding($$payload3, {
            tag: "div",
            top: 100,
            bottom: 100,
            position: "relative",
            children: ($$payload4) => {
              $$payload4.out.push(`<img${attr("src", dotsImage)} alt=""${attr("width", 812)}${attr("height", 409)} class="dots svelte-3qg3tc"/> `);
              Title($$payload4, {
                level: 2,
                color: "dark",
                size: 40,
                weight: 500,
                className: "mb-20",
                maxWidth: 450,
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->MOQ is designed for tunable latency regimes`);
                }
              });
              $$payload4.out.push(`<!----> `);
              Text($$payload4, {
                color: "dark",
                size: 16,
                weight: 400,
                opacity: 0.6,
                className: "mb-80",
                maxWidth: 450,
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->From real-time interactive experiences to sub-second live streaming to
        on-demand playback.`);
                }
              });
              $$payload4.out.push(`<!----> `);
              Subtitle($$payload4, {
                level: 3,
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Key benefits of using MOQ`);
                }
              });
              $$payload4.out.push(`<!----> `);
              GridList($$payload4, {
                columns: 3,
                children: ($$payload5) => {
                  const each_array = ensure_array_like(benefits);
                  $$payload5.out.push(`<!--[-->`);
                  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                    let benefit = each_array[$$index];
                    GridListItem($$payload5, {
                      color: "light",
                      children: ($$payload6) => {
                        Text($$payload6, {
                          tag: "strong",
                          color: "dark",
                          font: "lexend",
                          size: 18,
                          weight: 500,
                          className: "mb-10",
                          children: ($$payload7) => {
                            $$payload7.out.push(`<!---->${escape_html(benefit.title)}`);
                          }
                        });
                        $$payload6.out.push(`<!----> `);
                        Text($$payload6, {
                          color: "dark",
                          size: 16,
                          weight: 400,
                          opacity: 0.6,
                          children: ($$payload7) => {
                            $$payload7.out.push(`<!---->${escape_html(benefit.description)}`);
                          }
                        });
                        $$payload6.out.push(`<!---->`);
                      }
                    });
                  }
                  $$payload5.out.push(`<!--]-->`);
                }
              });
              $$payload4.out.push(`<!---->`);
            }
          });
        }
      });
    }
  });
}
const systemIcon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='50'%20height='50'%20fill='none'%3e%3cpath%20fill='%23EABA6D'%20fill-rule='evenodd'%20d='M24.988%2021.726a3.26%203.26%200%201%200%200%206.522%203.26%203.26%200%200%200%200-6.522Zm-5.436%203.261a5.436%205.436%200%201%201%2010.872%200%205.436%205.436%200%200%201-10.872%200Z'%20clip-rule='evenodd'%20opacity='.1'%20/%3e%3cpath%20fill='%23EABA6D'%20fill-rule='evenodd'%20d='M7.594%205.066a2.528%202.528%200%201%200%200%205.055%202.528%202.528%200%200%200%200-5.055ZM4.34%207.594a3.253%203.253%200%201%201%206.506%200%203.253%203.253%200%200%201-6.506%200ZM42.407%2039.878a2.528%202.528%200%201%200%200%205.056%202.528%202.528%200%200%200%200-5.056Zm-3.253%202.528a3.253%203.253%200%201%201%206.506%200%203.253%203.253%200%200%201-6.506%200ZM24.987%2018.11a6.876%206.876%200%201%200%200%2013.754%206.876%206.876%200%200%200%200-13.753Zm-7.601%206.877a7.601%207.601%200%201%201%2015.203%200%207.601%207.601%200%200%201-15.203%200Z'%20clip-rule='evenodd'%20/%3e%3cpath%20fill='%23EABA6D'%20fill-rule='evenodd'%20d='M29.898%2029.897a.363.363%200%200%201%20.513%200l7.904%207.904a.363.363%200%200%201-.513.513l-7.904-7.904a.362.362%200%200%201%200-.513ZM11.686%2011.685a.362.362%200%200%201%20.513.001l7.878%207.904a.363.363%200%200%201-.513.512l-7.879-7.904a.362.362%200%200%201%20.001-.513ZM7.594%2039.878a2.528%202.528%200%201%200%200%205.056%202.528%202.528%200%200%200%200-5.056ZM4.34%2042.406a3.253%203.253%200%201%201%206.506%200%203.253%203.253%200%200%201-6.506%200ZM42.407%205.066a2.528%202.528%200%201%200%200%205.055%202.528%202.528%200%200%200%200-5.055Zm-3.253%202.528a3.253%203.253%200%201%201%206.506%200%203.253%203.253%200%200%201-6.506%200ZM38.315%2011.686a.363.363%200%200%201%200%20.512l-7.904%207.904a.362.362%200%201%201-.513-.512l7.904-7.904a.362.362%200%200%201%20.513%200ZM20.076%2029.897a.363.363%200%200%201%20.001.513L12.2%2038.314a.362.362%200%201%201-.514-.512l7.879-7.904a.363.363%200%200%201%20.512-.001Z'%20clip-rule='evenodd'%20/%3e%3cpath%20fill='%23EABA6D'%20fill-rule='evenodd'%20d='M24.987%203.625a1.078%201.078%200%201%200%200%202.156%201.078%201.078%200%200%200%200-2.156Zm-4.703%201.078a4.703%204.703%200%201%201%209.406%200%204.703%204.703%200%200%201-9.406%200ZM24.987%2044.219a1.078%201.078%200%201%200%200%202.155%201.078%201.078%200%200%200%200-2.155Zm-4.703%201.078a4.703%204.703%200%201%201%209.407%200%204.703%204.703%200%200%201-9.407%200ZM45.297%2023.91a1.078%201.078%200%201%200%200%202.155%201.078%201.078%200%200%200%200-2.155Zm-4.703%201.077a4.703%204.703%200%201%201%209.406%200%204.703%204.703%200%200%201-9.406%200ZM4.703%2023.91a1.078%201.078%200%201%200%200%202.155%201.078%201.078%200%200%200%200-2.155ZM0%2024.986a4.703%204.703%200%201%201%209.406%200%204.703%204.703%200%200%201-9.406%200Z'%20clip-rule='evenodd'%20opacity='.4'%20/%3e%3c/svg%3e";
const brainIcon = "/_app/immutable/assets/brain.CKk0fBKa.svg";
const teamIcon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='50'%20height='50'%20fill='none'%3e%3cpath%20fill='%23EABA6D'%20d='M25.065%2044.749c10.871%200%2019.684-8.842%2019.684-19.749%200-10.907-8.813-19.749-19.684-19.749-10.87%200-19.683%208.842-19.683%2019.749%200%2010.907%208.812%2019.749%2019.683%2019.749Z'%20opacity='.1'%20/%3e%3cpath%20fill='%23EABA6D'%20fill-rule='evenodd'%20d='M19.102%2029.602a.309.309%200%200%201-.436%200l-4.357-4.357a.309.309%200%200%201%200-.437l4.357-4.357c.12-.12.316-.12.436%200l4.357%204.358c.12.12.12.316%200%20.436l-4.357%204.357Zm-.218-.654%203.92-3.921-3.92-3.92-3.92%203.92%203.92%203.92ZM25.215%2023.477a.309.309%200%200%201-.436%200l-4.357-4.358a.309.309%200%200%201%200-.436l4.357-4.357c.12-.12.316-.12.436%200l4.358%204.357c.12.12.12.316%200%20.436l-4.358%204.358Zm-.218-.655%203.92-3.92-3.92-3.921-3.92%203.92%203.92%203.921ZM31.326%2029.606a.309.309%200%200%201-.437%200l-4.357-4.357a.309.309%200%200%201%200-.437l4.357-4.357c.12-.12.316-.12.437%200l4.357%204.357c.12.12.12.316%200%20.437l-4.357%204.357Zm-.219-.655%203.921-3.92-3.92-3.921-3.921%203.92%203.92%203.921ZM25.212%2035.7a.309.309%200%200%201-.436%200l-4.357-4.357a.309.309%200%200%201%200-.436l4.357-4.357c.12-.12.316-.12.436%200l4.357%204.357c.12.12.12.316%200%20.436L25.212%2035.7Zm-.218-.654%203.92-3.92-3.92-3.922-3.92%203.921%203.92%203.92Z'%20clip-rule='evenodd'%20/%3e%3cpath%20fill='%23EABA6D'%20fill-rule='evenodd'%20d='M25%2023.444c-.855%200-1.535.685-1.535%201.512%200%20.828.68%201.513%201.535%201.513.855%200%201.535-.685%201.535-1.513%200-.827-.68-1.512-1.535-1.512Zm-3.386%201.512c0-1.865%201.524-3.364%203.386-3.364s3.386%201.499%203.386%203.364c0%201.866-1.524%203.365-3.386%203.365s-3.386-1.499-3.386-3.365Z'%20clip-rule='evenodd'%20opacity='.1'%20/%3e%3cpath%20fill='%23EABA6D'%20fill-rule='evenodd'%20d='M25.065%206.707c-10.06%200-18.205%208.132-18.205%2018.14H3.773c0-11.72%209.536-21.226%2021.292-21.226v3.086ZM25.065%2042.988c10.061%200%2018.206-8.132%2018.206-18.14h3.086c0%2011.721-9.535%2021.226-21.292%2021.226v-3.086Z'%20clip-rule='evenodd'%20opacity='.4'%20/%3e%3cpath%20fill='%23EABA6D'%20fill-rule='evenodd'%20d='M.309%2024.691c.17%200%20.308.139.308.309C.617%2038.46%2011.54%2049.383%2025%2049.383A.309.309%200%200%201%2025%2050C11.2%2050%200%2038.8%200%2025c0-.17.138-.309.309-.309ZM24.692.309c0-.17.138-.309.308-.309%2013.8%200%2025%2011.2%2025%2025a.309.309%200%200%201-.617%200C49.383%2011.54%2038.46.617%2025%20.617a.309.309%200%200%201-.308-.308Z'%20clip-rule='evenodd'%20/%3e%3c/svg%3e";
const scenarioIcon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='50'%20height='51'%20fill='none'%3e%3cpath%20fill='%23EABA6D'%20fill-rule='evenodd'%20d='M26.362%2023.958a1.027%201.027%200%201%200%200%202.053%201.027%201.027%200%200%200%200-2.053Zm-3.082%201.026a3.082%203.082%200%201%201%206.163%200%203.082%203.082%200%200%201-6.163%200ZM37.309%2034.905a1.027%201.027%200%201%200%200%202.053%201.027%201.027%200%200%200%200-2.053Zm-3.082%201.026a3.081%203.081%200%201%201%206.163%200%203.081%203.081%200%200%201-6.163%200Z'%20clip-rule='evenodd'%20opacity='.1'%20/%3e%3cpath%20fill='%23EABA6D'%20fill-rule='evenodd'%20d='M12.418%2032.959a.342.342%200%200%201%20.484%200l9.594%209.593a.342.342%200%201%201-.484.485l-9.594-9.594a.343.343%200%200%201%200-.484ZM48.28%203.408a1.035%201.035%200%201%200%200%202.07%201.035%201.035%200%200%200%200-2.07Zm-1.72%201.035a1.72%201.72%200%201%201%203.44%200%201.72%201.72%200%200%201-3.44%200ZM37.309%2022.596a2.388%202.388%200%201%200%200%204.777%202.388%202.388%200%200%200%200-4.777Zm-3.074%202.388a3.073%203.073%200%201%201%206.147%200%203.073%203.073%200%200%201-6.147%200ZM9.905%2028.082a2.388%202.388%200%201%200%200%204.776%202.388%202.388%200%200%200%200-4.776ZM6.832%2030.47a3.073%203.073%200%201%201%206.146%200%203.073%203.073%200%200%201-6.146%200Z'%20clip-rule='evenodd'%20/%3e%3cpath%20fill='%23EABA6D'%20fill-rule='evenodd'%20d='M37.309%2027.372c.189%200%20.342.154.342.343v8.216c0%20.09-.036.178-.1.242l-6.839%206.863a.343.343%200%200%201-.485-.483l6.74-6.763v-8.075c0-.19.153-.343.342-.343ZM8.94%2013.828a.343.343%200%200%201%20.473-.103l17.134%2010.97a.343.343%200%200%201%20.157.29V40.74a.343.343%200%200%201-.685%200V25.172L9.044%2014.302a.342.342%200%200%201-.104-.474ZM4.443%2016.425c.19%200%20.343.154.343.343v8.074l2.63%202.63a.343.343%200%200%201-.484.485l-2.73-2.73a.343.343%200%200%201-.101-.243v-8.216c0-.19.153-.343.342-.343Z'%20clip-rule='evenodd'%20/%3e%3cpath%20fill='%23EABA6D'%20fill-rule='evenodd'%20d='M32.765%207.438c.135.133.136.35.002.485L12.903%2027.956a.343.343%200%200%201-.486-.482L32.28%207.44a.343.343%200%200%201%20.484-.002ZM36.966%204.443c0-.189.154-.342.343-.342h8.216a.343.343%200%200%201%200%20.685H37.31a.343.343%200%200%201-.343-.343ZM48.28%2023.95a1.035%201.035%200%201%200%200%202.07%201.035%201.035%200%200%200%200-2.07Zm-1.72%201.034a1.72%201.72%200%201%201%203.44%200%201.72%201.72%200%200%201-3.44%200ZM39.721%2024.984c0-.189.154-.342.343-.342h5.461a.343.343%200%200%201%200%20.685h-5.461a.343.343%200%200%201-.343-.343ZM40.064%2045.868a1.035%201.035%200%201%200%200%202.07%201.035%201.035%200%200%200%200-2.07Zm-1.72%201.035a1.72%201.72%200%201%201%203.44%200%201.72%201.72%200%200%201-3.44%200ZM31.505%2046.903c0-.19.153-.343.343-.343h5.461a.342.342%200%201%201%200%20.685h-5.461a.343.343%200%200%201-.343-.342ZM9.905%2045.868a1.035%201.035%200%201%200%200%202.07%201.035%201.035%200%200%200%200-2.07Zm-1.72%201.035a1.72%201.72%200%201%201%203.44%200%201.72%201.72%200%200%201-3.44%200ZM12.317%2046.903c0-.19.154-.343.343-.343h8.216a.343.343%200%200%201%200%20.685H12.66a.343.343%200%200%201-.343-.342ZM23.607%203.408a1.035%201.035%200%201%200%200%202.07%201.035%201.035%200%200%200%200-2.07Zm-1.72%201.035a1.72%201.72%200%201%201%203.44%200%201.72%201.72%200%200%201-3.44%200ZM26.02%204.443c0-.189.152-.342.342-.342h5.485a.342.342%200%201%201%200%20.685h-5.485a.342.342%200%200%201-.343-.343ZM26.02%2024.984c0-.189.152-.342.342-.342h8.216a.343.343%200%201%201%200%20.685h-8.216a.343.343%200%200%201-.343-.343ZM37.309%209.562c.189%200%20.342.153.342.343v12.348a.343.343%200%200%201-.685%200V9.905c0-.19.154-.343.343-.343ZM9.905%2032.858c.189%200%20.342.154.342.343v10.97a.343.343%200%200%201-.685%200v-10.97c0-.19.154-.343.343-.343Z'%20clip-rule='evenodd'%20/%3e%3cpath%20fill='%23EABA6D'%20fill-rule='evenodd'%20d='M4.443%2010.264a1.018%201.018%200%201%200%200%202.036%201.018%201.018%200%200%200%200-2.036ZM0%2011.282a4.443%204.443%200%201%201%208.887%200%204.443%204.443%200%200%201-8.887%200ZM37.31%203.425a1.018%201.018%200%201%200%200%202.036%201.018%201.018%200%200%200%200-2.036Zm-4.444%201.018a4.443%204.443%200%201%201%208.886%200%204.443%204.443%200%200%201-8.886%200ZM26.434%2045.643a.97.97%200%201%200%200%201.94.97.97%200%200%200%200-1.94Zm-4.395.97a4.395%204.395%200%201%201%208.79%200%204.395%204.395%200%200%201-8.79%200Z'%20clip-rule='evenodd'%20opacity='.4'%20/%3e%3c/svg%3e";
const marketIcon = "/_app/immutable/assets/market.h6XSeQRa.svg";
function Why($$payload) {
  const list = [
    {
      icon: systemIcon,
      title: "Shared Cost & Effort",
      description: "Distribute development costs across organizations"
    },
    {
      icon: brainIcon,
      title: "Accelerated Development",
      description: "Leverage collective expertise for rapid MOQ advancement"
    },
    {
      icon: teamIcon,
      title: "Enhanced Interoperability",
      description: "Ensure compatibility with standardized, open-source implementations"
    },
    {
      icon: scenarioIcon,
      title: "Strategic Differentiation",
      description: "Focus resources on unique value, not reinventing the foundation"
    },
    {
      icon: marketIcon,
      title: "Market Growth",
      description: "Lower barriers, enabling new use cases"
    }
  ];
  LinesSection($$payload, {
    background: "dark",
    id: "why",
    children: ($$payload2) => {
      Padding($$payload2, {
        tag: "div",
        top: 160,
        bottom: 200,
        children: ($$payload3) => {
          const each_array = ensure_array_like(list);
          $$payload3.out.push(`<div class="header mb-100 svelte-1mrbjyc">`);
          Title($$payload3, {
            level: 2,
            color: "light",
            size: 40,
            weight: 500,
            align: "center",
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->Why OpenMOQ?`);
            }
          });
          $$payload3.out.push(`<!----> `);
          Text($$payload3, {
            color: "light",
            size: 16,
            weight: 400,
            opacity: 0.8,
            align: "center",
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->Meeting the demands of ultra-low latency and massive scale requires a
        shared foundation built together. By collaborating on open-source
        streaming infrastructure, we create shared value for the entire
        ecosystem.`);
            }
          });
          $$payload3.out.push(`<!----></div> <ul class="list svelte-1mrbjyc"><!--[-->`);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let item = each_array[$$index];
            $$payload3.out.push(`<li class="item svelte-1mrbjyc"><img${attr("src", item.icon)} alt=""${attr("width", 50)}${attr("height", 50)} class="icon svelte-1mrbjyc"/> <div class="content svelte-1mrbjyc">`);
            Text($$payload3, {
              tag: "strong",
              color: "light",
              size: 18,
              font: "lexend",
              weight: 500,
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->${escape_html(item.title)}`);
              }
            });
            $$payload3.out.push(`<!----> `);
            Text($$payload3, {
              color: "light",
              size: 16,
              weight: 400,
              opacity: 0.6,
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->${escape_html(item.description)}`);
              }
            });
            $$payload3.out.push(`<!----></div></li>`);
          }
          $$payload3.out.push(`<!--]--></ul>`);
        }
      });
    }
  });
}
function Badge($$payload, $$props) {
  let { color, className, children } = $$props;
  Parallax($$payload, {
    zIndex: 1,
    parallaxSpeed: 0.02,
    parallaxDirection: "up",
    children: ($$payload2) => {
      $$payload2.out.push(`<div${attr_class(clsx(["badge", color, className]), "svelte-190xwuf")}>`);
      Dot($$payload2);
      $$payload2.out.push(`<!----> `);
      Text($$payload2, {
        color,
        size: 13,
        weight: 400,
        uppercase: true,
        font: "lexend-deca",
        children: ($$payload3) => {
          children($$payload3);
          $$payload3.out.push(`<!---->`);
        }
      });
      $$payload2.out.push(`<!----></div>`);
    }
  });
}
function Carousel($$payload, $$props) {
  push();
  [
    Autoscroll({
      active: false,
      breakpoints: {
        "(min-width: 768px)": {
          active: true,
          startDelay: 0,
          stopOnMouseEnter: true,
          stopOnInteraction: false
        }
      }
    }),
    ClassNames()
  ];
  let { children } = $$props;
  $$payload.out.push(`<div class="embla svelte-h0dr7u"><ul class="container svelte-h0dr7u">`);
  children($$payload);
  $$payload.out.push(`<!----></ul></div>`);
  pop();
}
function CarouselSlide($$payload, $$props) {
  let { children } = $$props;
  $$payload.out.push(`<li class="item svelte-14bvykx">`);
  children($$payload);
  $$payload.out.push(`<!----></li>`);
}
function Testimonials($$payload, $$props) {
  let { title, list } = $$props;
  Title($$payload, {
    level: 3,
    color: "light",
    size: 20,
    weight: 500,
    className: "mb-30",
    children: ($$payload2) => {
      $$payload2.out.push(`<span class="title svelte-1iw8l5o">`);
      Dot($$payload2);
      $$payload2.out.push(`<!----> ${escape_html(title)}</span>`);
    }
  });
  $$payload.out.push(`<!----> `);
  Carousel($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(list);
      $$payload2.out.push(`<!--[-->`);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let item = each_array[$$index_1];
        CarouselSlide($$payload2, {
          children: ($$payload3) => {
            $$payload3.out.push(`<div class="item svelte-1iw8l5o">`);
            if (item.photo) {
              $$payload3.out.push("<!--[-->");
              if (typeof item.photo === "string") {
                $$payload3.out.push("<!--[-->");
                $$payload3.out.push(`<img${attr("src", item.photo.img.src)} alt="Will Law, Akamai" class="photo svelte-1iw8l5o"${attr("width", item.photo.img.w)}${attr("height", item.photo.img.h)}/>`);
              } else {
                $$payload3.out.push("<!--[!-->");
                const each_array_1 = ensure_array_like(Object.entries(item.photo.sources));
                $$payload3.out.push(`<picture class="svelte-1iw8l5o"><!--[-->`);
                for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
                  let [format, srcset] = each_array_1[$$index];
                  $$payload3.out.push(`<source${attr("srcset", srcset)}${attr("type", "image/" + format)}/>`);
                }
                $$payload3.out.push(`<!--]--> <img${attr("src", item.photo.img.src)} alt="Will Law, Akamai" class="photo svelte-1iw8l5o"${attr("width", item.photo.img.w)}${attr("height", item.photo.img.h)}/></picture>`);
              }
              $$payload3.out.push(`<!--]-->`);
            } else {
              $$payload3.out.push("<!--[!-->");
            }
            $$payload3.out.push(`<!--]--> <figure class="figure svelte-1iw8l5o">`);
            Text($$payload3, {
              tag: "blockquote",
              color: "light",
              size: 15,
              weight: 400,
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->“${escape_html(item.quote)}”`);
              }
            });
            $$payload3.out.push(`<!----> <figcaption class="figcaption svelte-1iw8l5o">`);
            Dot($$payload3);
            $$payload3.out.push(`<!----> `);
            Text($$payload3, {
              tag: "span",
              size: 13,
              color: "accent",
              uppercase: true,
              children: ($$payload4) => {
                $$payload4.out.push(`<!---->${escape_html(item.name)}, ${escape_html(item.company)}`);
              }
            });
            $$payload3.out.push(`<!----></figcaption></figure></div>`);
          }
        });
      }
      $$payload2.out.push(`<!--]-->`);
    }
  });
  $$payload.out.push(`<!---->`);
}
const gwendalSimonImage = {
  sources: {
    avif: "/_app/immutable/assets/gwendal-simon.CGZzS4AA.avif 330w, /_app/immutable/assets/gwendal-simon.D0xWsAYG.avif 660w",
    webp: "/_app/immutable/assets/gwendal-simon.BFg3ecLK.webp 330w, /_app/immutable/assets/gwendal-simon.FgjExyNX.webp 660w",
    jpeg: "/_app/immutable/assets/gwendal-simon.lRV3juG6.jpeg 330w, /_app/immutable/assets/gwendal-simon.CPrKgPMZ.jpeg 660w"
  },
  img: {
    src: "/_app/immutable/assets/gwendal-simon.CPrKgPMZ.jpeg",
    w: 660,
    h: 780
  }
};
const michalHosnaImage = {
  sources: {
    avif: "/_app/immutable/assets/michal-hosna.CwahH0Ih.avif 330w, /_app/immutable/assets/michal-hosna.Mtnv0InC.avif 660w",
    webp: "/_app/immutable/assets/michal-hosna.BzWI057-.webp 330w, /_app/immutable/assets/michal-hosna.BQov6M9T.webp 660w",
    jpeg: "/_app/immutable/assets/michal-hosna.CyUoT4iz.jpeg 330w, /_app/immutable/assets/michal-hosna.rml16BJv.jpeg 660w"
  },
  img: {
    src: "/_app/immutable/assets/michal-hosna.rml16BJv.jpeg",
    w: 660,
    h: 780
  }
};
const willLawImage = {
  sources: {
    avif: "/_app/immutable/assets/will-law.aVHwWjmr.avif 330w, /_app/immutable/assets/will-law.B2hkXU23.avif 660w",
    webp: "/_app/immutable/assets/will-law.c0ZhD_8V.webp 330w, /_app/immutable/assets/will-law.Bgj8bXZZ.webp 660w",
    jpeg: "/_app/immutable/assets/will-law.DzcxTIks.jpeg 330w, /_app/immutable/assets/will-law.CU2QChk0.jpeg 660w"
  },
  img: {
    src: "/_app/immutable/assets/will-law.CU2QChk0.jpeg",
    w: 660,
    h: 780
  }
};
const cullenJenningsImage = {
  sources: {
    avif: "/_app/immutable/assets/cullen-jennings.DUOFjLlc.avif 330w, /_app/immutable/assets/cullen-jennings.DNLHugct.avif 660w",
    webp: "/_app/immutable/assets/cullen-jennings.D2SQo2lH.webp 330w, /_app/immutable/assets/cullen-jennings.BsL0vfmK.webp 660w",
    jpeg: "/_app/immutable/assets/cullen-jennings.mAzq7gPb.jpeg 330w, /_app/immutable/assets/cullen-jennings.6P0A3Wej.jpeg 660w"
  },
  img: {
    src: "/_app/immutable/assets/cullen-jennings.6P0A3Wej.jpeg",
    w: 660,
    h: 780
  }
};
const seanMcCarthyImage = {
  sources: {
    avif: "/_app/immutable/assets/sean-mccarthy.xQqzpCA6.avif 330w, /_app/immutable/assets/sean-mccarthy.B5PdLv4s.avif 660w",
    webp: "/_app/immutable/assets/sean-mccarthy.3t6Ze9cB.webp 330w, /_app/immutable/assets/sean-mccarthy.Cjv0oV_R.webp 660w",
    jpeg: "/_app/immutable/assets/sean-mccarthy.CXSJf6Kn.jpeg 330w, /_app/immutable/assets/sean-mccarthy.D97xEpLE.jpeg 660w"
  },
  img: {
    src: "/_app/immutable/assets/sean-mccarthy.D97xEpLE.jpeg",
    w: 660,
    h: 780
  }
};
const akamaiLogo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='99'%20height='40'%20fill='none'%3e%3cpath%20fill='%23F93'%20d='M98.98%2020.71c0%201.156-.935%202.089-2.095%202.089a2.088%202.088%200%201%201%200-4.18c1.16%200%202.094.933%202.094%202.09ZM30.735%2032.426l.262%202.798h4.412L33.914%2019.03h-6.582l-8.339%2016.157h4.488l1.383-2.798h5.87v.037Zm-.187-3.172h-4.039l3.478-7.015h.038l.523%207.015ZM41.542%2028.097h.673l3.141-4.254h4.113l-4.375%205.448%202.693%205.896h-4.375l-1.72-4.59h-.674l-.972%204.59h-3.74l3.478-16.194h3.703l-1.945%209.104ZM55.266%2035.187h3.74l1.495-7.09c.823-3.918-.673-4.403-4.487-4.403-2.655%200-5.236-.037-5.983%203.508h3.739c.224-1.008.86-1.232%201.758-1.232%201.607%200%201.533.672%201.308%201.717l-.374%201.79h-.187c-.15-1.305-1.757-1.268-2.842-1.268-2.692%200-4.3.858-4.86%203.582-.6%202.873.747%203.508%203.365%203.508%201.308%200%203.029-.261%203.664-1.828h.112l-.448%201.716Zm-1.047-4.664c1.196%200%202.019.074%201.795%201.044-.262%201.194-.786%201.381-2.319%201.381-.56%200-1.608%200-1.346-1.231.224-1.045.972-1.194%201.87-1.194ZM66.484%2023.843l-.337%201.605h.15c.748-1.343%202.206-1.717%203.478-1.717%201.608%200%203.178.262%202.954%202.24h.187c.56-1.605%202.206-2.24%203.627-2.24%202.618%200%203.74%201.082%203.178%203.732l-1.645%207.724h-3.702l1.384-6.567c.187-1.195.411-2.053-1.047-2.053-1.459%200-1.945.97-2.207%202.164l-1.346%206.456h-3.74l1.46-6.866c.186-1.045.261-1.754-1.048-1.754-1.533%200-1.982.821-2.28%202.164l-1.347%206.456h-3.74l2.431-11.344h3.59ZM86.64%2035.187h3.739l1.495-7.09c.823-3.918-.673-4.403-4.487-4.403-2.655%200-5.235-.037-5.983%203.508h3.74c.224-1.008.86-1.232%201.757-1.232%201.645%200%201.533.672%201.346%201.717l-.374%201.79h-.187c-.15-1.305-1.757-1.268-2.842-1.268-2.692%200-4.3.858-4.86%203.582-.6%202.873.747%203.508%203.365%203.508%201.308%200%203.029-.261%203.664-1.828h.112l-.486%201.716Zm-1.048-4.664c1.197%200%202.02.074%201.795%201.044-.262%201.194-.785%201.381-2.318%201.381-.561%200-1.608%200-1.346-1.231.224-1.045.972-1.194%201.87-1.194ZM95.726%2035.187h-3.702l2.393-11.343h3.74l-2.43%2011.343Z'%20/%3e%3cpath%20fill='%23009CDE'%20d='M20.9%2039.105c.935.298.898.895-.15.895C9.608%2040%20.52%2031.045.52%2020S9.57%200%2020.75%200c1.048%200%201.272.56.412.82C12.786%203.21%206.653%2010.896%206.653%2020c0%208.992%205.983%2016.605%2014.247%2019.105Zm-10.433-14.44a23.053%2023.053%200%200%201-.074-1.643c0-8.768%207.142-15.895%2015.93-15.895%208.301%200%2010.806%203.694%2011.106%203.47.336-.261-3.03-7.612-12.79-7.612-8.787%200-15.93%207.127-15.93%2015.896%200%202.014.375%203.955%201.085%205.746.3.746.748.783.673.037Zm6.694-11.456c4.15-1.791%209.348-1.866%2014.434-.075%203.44%201.194%205.422%202.91%205.572%202.836.262-.112-1.982-3.694-6.095-5.261-4.974-1.866-10.284-.896-14.173%202.164-.411.336-.262.56.262.336Z'%20/%3e%3c/svg%3e";
const cdn77Logo = "data:image/svg+xml,%3csvg%20width='120'%20height='35'%20viewBox='0%200%20120%2035'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M39.0618%2017.7134C39.0618%2012.6663%2042.9202%209.26074%2048.024%209.26074C52.2975%209.26074%2054.4464%2011.7597%2055.4231%2014.0138L51.174%2015.9982C50.7589%2014.7243%2049.4891%2013.6218%2048.024%2013.6218C45.6551%2013.6218%2044.0677%2015.4347%2044.0677%2017.7134C44.0677%2019.9918%2045.6551%2021.8049%2048.024%2021.8049C49.4891%2021.8049%2050.7589%2020.7023%2051.174%2019.4283L55.4231%2021.3884C54.4708%2023.5689%2052.2975%2026.1658%2048.024%2026.1658C42.9202%2026.1658%2039.0618%2022.7359%2039.0618%2017.7134ZM68.1694%2017.6889C68.1694%2015.4837%2066.8996%2013.8423%2064.2622%2013.8423H61.8935V21.5597H64.2377C66.7043%2021.5597%2068.1694%2019.7468%2068.1694%2017.6889ZM56.9607%2025.872V9.53023H64.2377C69.3662%209.53023%2073.1755%2012.4701%2073.1755%2017.6889C73.1755%2022.9072%2069.3662%2025.872%2064.2622%2025.872H56.9607ZM85.873%2025.872L79.8657%2017.5907V25.872H74.9328V9.53023H80.0122L85.6776%2017.2724V9.53023H90.6105V25.872H85.873ZM94.8587%2025.872L100.012%2013.8423H92.368V9.53023H105.677V12.9603L100.256%2025.872H94.8587ZM108.959%2025.872L114.112%2013.8423H106.468V9.53023H119.777V12.9603L114.356%2025.872H108.959Z'%20fill='white'%20/%3e%3cpath%20d='M15.5681%200C23.7667%200%2030.4131%206.71588%2030.4131%2015C30.4131%2023.2843%2015.5681%2035%2015.5681%2035C15.5681%2035%200.723145%2023.2843%200.723145%2015C0.723145%206.71588%207.36942%200%2015.5681%200ZM15.5679%205.35648C10.57%205.35648%206.5189%209.4501%206.5189%2014.5005C6.5189%2019.5502%2010.57%2023.6444%2015.5679%2023.6444C20.5659%2023.6444%2024.6174%2019.5502%2024.6174%2014.5005C24.6174%209.4501%2020.5659%205.35648%2015.5679%205.35648Z'%20fill='%23FFE115'%20/%3e%3cpath%20d='M15.5677%2010.375C13.3135%2010.375%2011.4858%2012.2222%2011.4858%2014.5002C11.4858%2016.7781%2013.3135%2018.6252%2015.5677%2018.6252C17.8222%2018.6252%2019.6505%2016.7781%2019.6505%2014.5002C19.6505%2012.2222%2017.8222%2010.375%2015.5677%2010.375Z'%20fill='%23FFE115'%20/%3e%3c/svg%3e";
const ciscoLogo = "/_app/immutable/assets/cisco.BCI3cCP7.svg";
const synamediaLogo = "/_app/immutable/assets/synamedia.BGiNvWP9.svg";
const youtubeLogo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20828%20184.147'%3e%3cpath%20d='m789.184%20394.598%20511.246%20296.664-511.246%20295.222ZM216.02%2041.762C131.051%2064.809%2064.805%20132.488%2040.324%20216.02%200%20370.109%200%20691.262%200%20691.262s0%20321.148%2040.324%20473.798c24.48%2084.96%2090.727%20151.22%20175.696%20174.26%20152.652%2041.76%20769.023%2041.76%20769.023%2041.76s617.817%200%20770.467-41.76c86.41-23.04%20151.21-89.3%20174.26-174.26%2041.76-152.65%2041.76-473.798%2041.76-473.798s0-321.153-41.76-475.242c-23.05-83.532-87.85-151.211-174.26-174.258C1602.86%200%20985.043%200%20985.043%200S368.672%200%20216.02%2041.762'%20style='fill:%23ed1838;fill-opacity:1;fill-rule:nonzero;stroke:none'%20transform='matrix(.13333%200%200%20-.13333%200%20184.147)'%20/%3e%3cpath%20d='m789.184%20394.598%20511.246%20296.664-511.246%20295.222ZM2391.13%2084.969V463l-228.26%20831.68h198.01l82.09-368.676c18.72-84.973%2038.17-206.66%2046.81-250.586h1.44c8.64%2042.484%2027.36%20164.172%2046.8%20249.145l84.97%20370.117h198.02L2589.87%20463V84.969h-198.74M3102.51%20630.773c0%20169.938-15.84%20218.903-72%20218.903-57.6%200-74.89-48.965-74.89-218.903V427.715c0-175.695%2017.29-220.336%2072.01-220.336%2059.04%200%2074.88%2044.641%2074.88%20220.336zm201.63-67.687V492.52c0-313.938-69.13-420.508-275.07-420.508-211.7%200-275.06%20109.449-275.06%20420.508v70.566c0%20321.148%2082.08%20423.398%20279.38%20423.398s270.75-106.566%20270.75-423.398M3387.6%20305.309v663.898h198.74V326.191c0-77.769%2017.28-112.332%2058.32-112.332%2030.97%200%2061.2%2013.68%2082.81%2071.282v684.066h198.74V86.41h-168.5L3746.2%20205.22h-.73c-24.48-84.25-72.72-136.09-172.81-136.09-132.5%200-185.06%2084.961-185.06%20236.18'%20style='fill:%23fff;fill-opacity:1;fill-rule:nonzero;stroke:none'%20transform='matrix(.13333%200%200%20-.13333%200%20184.147)'%20/%3e%3cpath%20d='M4065.84%2086.41v1038.33h-196.57v169.94h591.9v-169.94h-196.58V86.41h-198.75'%20style='fill:%23fff;fill-opacity:1;fill-rule:nonzero;stroke:none'%20transform='matrix(.13333%200%200%20-.13333%200%20184.147)'%20/%3e%3cpath%20d='M4406.41%20305.309v663.898h198.74V326.191c0-77.769%2017.28-112.332%2058.32-112.332%2030.97%200%2061.2%2013.68%2082.8%2071.282v684.066h198.74V86.41h-168.49l-11.51%20118.809h-.73c-24.48-84.25-72.72-136.09-172.81-136.09-132.5%200-185.06%2084.961-185.06%20236.18M5403.62%20596.211c0%20204.5-17.27%20249.141-72.72%20249.141-37.45%200-73.45-33.122-87.85-96.489V261.379c17.28-33.84%2047.52-48.238%2079.21-48.238%2059.76%200%2081.36%2063.359%2081.36%20254.898zm203.07%200v-118.09c0-285.152-60.49-404.672-194.42-404.672-81.37%200-142.58%2036-174.26%2096.481h-.72l-12.96-83.52h-172.82v1252.91h191.54v-253.46c0-66.25%201.44-132.501-4.32-211.704h2.15c33.13%2066.246%2090.02%20112.328%20179.31%20112.328%20128.17%200%20186.5-83.523%20186.5-390.273M5880.96%20642.297v-66.969H6012v66.969c0%20162.734-6.47%20208.816-66.24%20208.816-59.76%200-64.8-47.523-64.8-208.816zm329.06-177.859h-329.06v-48.243c0-155.535%203.59-208.816%2067.68-208.816%2063.36%200%2077.77%2048.961%2079.2%20149.769l174.98-7.918c12.96-192.261-86.4-277.218-254.9-277.218-204.5%200-264.98%20133.929-264.98%20377.304v154.098c0%20256.34%2067.69%20381.633%20270.74%20381.633%20204.49%200%20256.34-106.57%20256.34-372.996V464.438'%20style='fill:%23fff;fill-opacity:1;fill-rule:nonzero;stroke:none'%20transform='matrix(.13333%200%200%20-.13333%200%20184.147)'%20/%3e%3c/svg%3e";
function Founders($$payload, $$props) {
  push();
  const list = [
    {
      photo: willLawImage,
      quote: "OpenMOQ represents the future of collaborative infrastructure development.",
      name: "Will Law",
      company: "Akamai",
      logo: { src: akamaiLogo, width: 99, height: 40 }
    },
    {
      photo: michalHosnaImage,
      quote: "With OpenMOQ, we are building the foundation for next-generation streaming.",
      name: "Michal Hosna",
      company: "CDN77",
      logo: { src: cdn77Logo, width: 120, height: 35 }
    },
    {
      photo: cullenJenningsImage,
      quote: "OpenMOQ will help accelerate building and deploying technologies that reduce latency. This will improve user experiences.",
      name: "Cullen Jennings",
      company: "Cisco",
      logo: { src: ciscoLogo, width: 77, height: 40 }
    },
    {
      photo: gwendalSimonImage,
      quote: "With OpenMOQ we have the opportunity to design a solid and efficient reference implementation, applying careful architecture so MOQ can serve both professional distribution and large-scale direct delivery.",
      name: "Gwendal Simon",
      company: "Synamedia",
      logo: { src: synamediaLogo, width: 179, height: 40 }
    },
    {
      photo: seanMcCarthyImage,
      quote: "OpenMoQ will be instrumental in tackling the streaming latency and scale challenge, benefiting both content providers and viewers globally.",
      name: "Sean McCarthy",
      company: "YouTube",
      logo: { src: youtubeLogo, width: 120, height: 35 }
    }
  ].sort((a, b) => a.company.localeCompare(b.company));
  Section($$payload, {
    background: "dark-gradient",
    id: "members",
    overflow: true,
    children: ($$payload2) => {
      Container($$payload2, {
        children: ($$payload3) => {
          Padding($$payload3, {
            tag: "div",
            top: 100,
            bottom: 80,
            position: "relative",
            children: ($$payload4) => {
              const each_array = ensure_array_like(list);
              Parallax($$payload4, {
                left: -7,
                top: 8,
                opacity: 0.6,
                zIndex: -1,
                parallaxSpeed: 0.1,
                children: ($$payload5) => {
                  Planet($$payload5, { size: 135, movement: 2 });
                }
              });
              $$payload4.out.push(`<!----> `);
              Badge($$payload4, {
                color: "light",
                className: "mb-60",
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Who's behind the initiative`);
                }
              });
              $$payload4.out.push(`<!----> `);
              Title($$payload4, {
                level: 2,
                color: "light",
                size: 32,
                weight: 400,
                className: "mb-20",
                maxWidth: 600,
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->OpenMOQ brings competing companies together to define a new standard for
        real-time media transport`);
                }
              });
              $$payload4.out.push(`<!----> `);
              Text($$payload4, {
                color: "light",
                size: 16,
                weight: 400,
                opacity: 0.8,
                className: "mb-40",
                maxWidth: 600,
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->We collaborate on the underlying protocol, while continuing to
        differentiate through our products and services.`);
                }
              });
              $$payload4.out.push(`<!----> `);
              Text($$payload4, {
                color: "light",
                size: 16,
                weight: 400,
                opacity: 0.8,
                className: "mb-10",
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->The following companies have expressed an interest in being founding
        members`);
                }
              });
              $$payload4.out.push(`<!----> <ul class="list mb-80 svelte-j7lahj"><!--[-->`);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let item = each_array[$$index];
                $$payload4.out.push(`<li class="item">`);
                Text($$payload4, {
                  tag: "strong",
                  color: "light",
                  size: 18,
                  weight: 500,
                  children: ($$payload5) => {
                    $$payload5.out.push(`<!---->${escape_html(item.company)}`);
                  }
                });
                $$payload4.out.push(`<!----></li>`);
              }
              $$payload4.out.push(`<!--]--></ul> <div class="section">`);
              Testimonials($$payload4, { title: "Supported by industry leaders", list });
              $$payload4.out.push(`<!----></div>`);
            }
          });
        }
      });
    }
  });
  pop();
}
const checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">\n    <path fill-rule="evenodd"\n        d="M13.01 3.051c-.053.02-.149.069-.213.109-.064.04-1.62 1.574-3.457 3.409L6.001 9.905l-1.367-1.36C3.043 6.962 3.127 7.027 2.667 7.027c-.257 0-.293.006-.434.078a1.177 1.177 0 0 0-.474.482c-.057.115-.066.17-.066.413 0 .47-.116.327 1.932 2.375S5.531 12.307 6 12.307c.484 0 .081.362 4.375-3.932S14.307 4.484 14.307 4c0-.243-.009-.298-.066-.413a1.187 1.187 0 0 0-.473-.482c-.131-.066-.187-.078-.407-.084a1.053 1.053 0 0 0-.351.03" />\n</svg>\n';
const dotsIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">\n    <path fill-rule="evenodd"\n        d="M2.914 6.383c-.583.148-1.094.683-1.208 1.264-.047.24-.022.698.05.898.168.467.557.857 1.032 1.035.137.051.211.059.545.059.334 0 .409-.008.545-.059a1.779 1.779 0 0 0 1.035-1.035c.051-.137.059-.211.059-.545 0-.334-.008-.408-.059-.545a1.77 1.77 0 0 0-1.035-1.033c-.198-.072-.746-.094-.964-.039m4.667 0c-.583.148-1.094.683-1.209 1.264-.047.24-.021.698.051.898.167.467.556.857 1.032 1.035.137.051.211.059.545.059.428 0 .554-.031.85-.205.189-.112.472-.395.584-.584.174-.296.205-.422.205-.85 0-.334-.008-.408-.059-.545a1.77 1.77 0 0 0-1.035-1.033c-.199-.072-.746-.094-.964-.039m4.666 0c-.582.148-1.093.683-1.208 1.264-.047.24-.021.698.05.898.168.467.557.857 1.033 1.035.136.051.211.059.545.059.428 0 .554-.031.85-.205.189-.112.472-.395.583-.584.175-.296.206-.422.206-.85 0-.334-.008-.408-.06-.545a1.769 1.769 0 0 0-1.034-1.033c-.199-.072-.746-.094-.965-.039M3.427 7.68c.065 0 .198.136.224.229a.332.332 0 0 1-.406.409c-.241-.067-.323-.385-.142-.555.069-.064.196-.112.253-.094a.284.284 0 0 0 .071.011m4.666 0c.066 0 .198.136.224.229a.332.332 0 0 1-.406.409c-.241-.067-.322-.385-.141-.555.068-.064.195-.112.252-.094.02.006.052.011.071.011m4.667 0c.066 0 .198.136.224.229a.332.332 0 0 1-.406.409c-.241-.067-.322-.385-.142-.555.069-.064.196-.112.253-.094a.284.284 0 0 0 .071.011" />\n</svg>\n';
function Roadmap($$payload, $$props) {
  push();
  let { items } = $$props;
  const each_array = ensure_array_like(items);
  $$payload.out.push(`<ul class="list svelte-3sq7u1"><!--[-->`);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let item = each_array[index];
    $$payload.out.push(`<li class="item svelte-3sq7u1"><div${attr_class(
      clsx([
        "state",
        (item.state === "completed" || item.state === "in progress") && "completed"
      ]),
      "svelte-3sq7u1"
    )}>`);
    if (item.state) {
      $$payload.out.push("<!--[-->");
      Icon($$payload, {
        data: item.state === "completed" ? checkIcon : dotsIcon,
        stroke: "none",
        size: "16"
      });
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> <div${attr_class(
      clsx([
        "line",
        items[index + 1] && (items[index + 1].state === "completed" || items[index + 1].state === "in progress") && "completed"
      ]),
      "svelte-3sq7u1"
    )}></div></div> <div class="content svelte-3sq7u1"><span class="title svelte-3sq7u1">`);
    if (item.date) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<span class="date svelte-3sq7u1">`);
      Text($$payload, {
        tag: "span",
        color: "light",
        font: "lexend-deca",
        size: 13,
        weight: 500,
        children: ($$payload2) => {
          $$payload2.out.push(`<!---->${escape_html(item.date)}`);
        }
      });
      $$payload.out.push(`<!----></span>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> `);
    Text($$payload, {
      tag: "strong",
      color: "light",
      font: "lexend",
      size: 18,
      weight: 500,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->${escape_html(item.title)}`);
      }
    });
    $$payload.out.push(`<!----></span> `);
    Text($$payload, {
      tag: "p",
      color: "light",
      size: 16,
      weight: 400,
      opacity: 0.6,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->${escape_html(item.description)}`);
      }
    });
    $$payload.out.push(`<!----></div></li>`);
  }
  $$payload.out.push(`<!--]--></ul>`);
  pop();
}
const linesImage$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='706'%20height='468'%20fill='none'%3e%3cg%20opacity='.7'%3e%3cmask%20id='b'%20width='706'%20height='468'%20x='0'%20y='0'%20maskUnits='userSpaceOnUse'%20style='mask-type:alpha'%3e%3cpath%20fill='url(%23a)'%20d='M0%200h706v468H0V0Z'%20/%3e%3c/mask%3e%3cg%20fill='%23fff'%20mask='url(%23b)'%3e%3cpath%20d='M1255%20123v1H210v-1h1045ZM1371%20443v1H94v-1h1277ZM1371%20379v1H94v-1h1277ZM1371%20699v1H94v-1h1277ZM1255%2059v1H210v-1h1045ZM1255%20315v1H210v-1h1045ZM1371%20635v1H94v-1h1277ZM1371-5v1H94v-1h1277ZM1255%20251v1H210v-1h1045ZM1371%20571v1H94v-1h1277ZM1255%20187v1H210v-1h1045ZM1371%20507v1H94v-1h1277ZM1453-101v1H13v-1h1440ZM1453-269v1H13v-1h1440ZM1453-349v1H13v-1h1440Z'%20/%3e%3cpath%20d='M94-269h1v931h-1v-931ZM674%20187h1v257h-1V187ZM1022%20187h1v257h-1V187ZM442%20187h1v257h-1V187ZM1370-269h1v931h-1v-931ZM326%2061h1v511h-1V61ZM1254-101h1v763h-1v-763ZM210-101h1v763h-1v-763ZM790%20187h1v257h-1V187ZM1138%2061h1v511h-1V61Z'%20/%3e%3cpath%20d='m110.918-51.483.422.906-195.479%2091.154-.422-.907%20195.479-91.153ZM110.918%20179.906l.422.906-195.479%2091.154-.422-.907%20195.479-91.153ZM110.918%2064.211l.422.907-195.479%2091.153-.422-.906%20195.479-91.154ZM110.918%20295.6l.422.907-195.479%2091.153-.422-.906L110.918%20295.6ZM110.918-34.955l.422.906-195.479%2091.154-.422-.907%20195.479-91.153ZM110.918%20196.434l.422.906-195.479%2091.153-.422-.906%20195.479-91.153ZM110.918%2080.74l.422.906-195.479%2091.153-.422-.906%20195.479-91.154ZM110.918%20312.128l.422.906-195.479%2091.154-.422-.907%20195.479-91.153ZM110.918-18.427l.422.906-195.479%2091.153-.422-.906%20195.479-91.153ZM110.918%20212.961l.422.907-195.479%2091.153-.422-.906%20195.479-91.154ZM110.918%2097.267l.422.906-195.479%2091.154-.422-.907%20195.479-91.153ZM110.918%20328.656l.422.906-195.479%2091.154-.422-.907%20195.479-91.153ZM110.918-1.9l.422.907L-84.139%2090.16l-.422-.906L110.918-1.9ZM110.918%20229.489l.422.906-195.479%2091.154-.422-.906%20195.479-91.154ZM110.918%20113.795l.422.906-195.479%2091.154-.422-.907%20195.479-91.153ZM110.918%20345.184l.422.906-195.479%2091.153-.422-.906%20195.479-91.153ZM110.918%2014.628l.422.906-195.479%2091.154-.422-.906%20195.479-91.154ZM110.918%20246.017l.422.906-195.479%2091.154-.422-.907%20195.479-91.153ZM110.918%20130.322l.422.907-195.479%2091.153-.422-.906%20195.479-91.154ZM110.918%20361.711l.422.907-195.479%2091.153-.422-.906%20195.479-91.154ZM110.918%2031.156l.422.906-195.479%2091.154-.422-.907%20195.479-91.153ZM110.918%20262.545l.422.906-195.479%2091.153-.422-.906%20195.479-91.153ZM110.918%20146.85l.422.907-195.479%2091.153-.422-.906%20195.479-91.154ZM110.918%20378.239l.422.906-195.479%2091.154-.422-.906%20195.479-91.154ZM110.918%2047.684l.422.906-195.479%2091.153-.422-.906%20195.479-91.153ZM110.918%20279.072l.422.907-195.479%2091.153-.422-.906%20195.479-91.154ZM110.918%20163.378l.422.906-195.479%2091.154-.422-.907%20195.479-91.153ZM110.918%20394.767l.422.906-195.479%2091.154-.422-.907%20195.479-91.153Z'%20/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='0'%20cy='0'%20r='1'%20gradientTransform='matrix(0%20311.183%20-469.435%200%20353%20156.817)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23fff'%20/%3e%3cstop%20offset='1'%20stop-color='%23fff'%20stop-opacity='0'%20/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
function Status($$payload) {
  const roadmap = [
    {
      // date: '2025/9',
      title: "Talks & Alignment",
      description: "Industry discussions completed",
      state: "completed"
    },
    {
      // date: '2025/9',
      title: "Plan Agreed",
      description: "Technical roadmap and collaboration framework established",
      state: "completed"
    },
    {
      // date: '2025/9',
      title: "Company setup",
      description: "Legal structure & governance in progress",
      state: "in progress"
    },
    {
      title: "MVP Components",
      description: "Core infrastructure development upcoming"
    }
  ];
  Section($$payload, {
    id: "progress",
    background: "dark-lighter",
    children: ($$payload2) => {
      Container($$payload2, {
        children: ($$payload3) => {
          Padding($$payload3, {
            tag: "div",
            top: 80,
            bottom: 80,
            position: "relative",
            children: ($$payload4) => {
              $$payload4.out.push(`<div class="wrapper svelte-1l7xacm"><div>`);
              Parallax($$payload4, {
                zIndex: 1,
                parallaxSpeed: 0.05,
                parallaxDirection: "up",
                boundary: 2,
                children: ($$payload5) => {
                  Title($$payload5, {
                    level: 2,
                    color: "light",
                    size: 40,
                    weight: 500,
                    maxWidth: 400,
                    children: ($$payload6) => {
                      $$payload6.out.push(`<!---->Development Status &amp; Roadmap`);
                    }
                  });
                }
              });
              $$payload4.out.push(`<!----></div> `);
              Roadmap($$payload4, { items: roadmap });
              $$payload4.out.push(`<!----> <img${attr("src", linesImage$1)} alt=""${attr("width", 706)}${attr("height", 468)} class="lines svelte-1l7xacm"/></div>`);
            }
          });
        }
      });
    }
  });
}
const linesImage = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='555'%20height='501'%20fill='none'%3e%3cmask%20id='b'%20width='555'%20height='501'%20x='0'%20y='0'%20maskUnits='userSpaceOnUse'%20style='mask-type:alpha'%3e%3cpath%20fill='url(%23a)'%20d='M0%200h555v501H0z'%20transform='matrix(-1%200%200%201%20555%200)'%20/%3e%3c/mask%3e%3cg%20mask='url(%23b)'%20opacity='.15'%3e%3cpath%20stroke='%2316121E'%20d='M-724%20226.5H321M-840%20482.5H437M-724%20162.5H321M-724%20418.5H321M-840%2098.5H437M-724%20354.5H321M-724%20290.5H321M-921%202.5H519M88.5%20547V290M436.5%20765v-931M320.5%20765V2M204.5%20675V164'%20/%3e%3cg%20clip-path='url(%23c)'%3e%3cmask%20id='d'%20fill='%23fff'%3e%3cpath%20d='M436%2098h119v385H436V98Z'%20/%3e%3c/mask%3e%3cpath%20stroke='%2316121E'%20d='M375.65%20143.124%20571.129%2051.97M375.65%20374.512l195.479-91.153M375.65%20258.818l195.479-91.153M375.65%20490.207l195.479-91.154M375.65%20159.651l195.479-91.153M375.65%20391.04l195.479-91.153M375.65%20275.346l195.479-91.154M375.65%20506.735l195.479-91.154M375.65%20176.179l195.479-91.153M375.65%20407.568l195.479-91.154M375.65%20291.874l195.479-91.154M375.65%20523.262l195.479-91.153M375.65%20192.707l195.479-91.153M375.65%20424.096l195.479-91.154M375.65%20308.401l195.479-91.153M375.65%20539.79l195.479-91.153M375.65%20209.235l195.479-91.154M375.65%20440.624l195.479-91.154M375.65%20324.929l195.479-91.153M375.65%20556.318l195.479-91.154M375.65%20225.762l195.479-91.153M375.65%20457.151l195.479-91.153M375.65%20341.457l195.479-91.154M375.65%20572.846l195.479-91.154M375.65%20242.29l195.479-91.153M375.65%20473.679l195.479-91.153M375.65%20357.985l195.479-91.154'%20/%3e%3c/g%3e%3cpath%20fill='%2316121E'%20d='M436%2098v1h119v-2H436v1Zm119%20385v-1H436v2h119v-1Z'%20mask='url(%23d)'%20/%3e%3c/g%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='0'%20cy='0'%20r='1'%20gradientTransform='matrix(0%20333.126%20-369.031%200%20277.5%20167.874)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23fff'%20/%3e%3cstop%20offset='1'%20stop-color='%23fff'%20stop-opacity='0'%20/%3e%3c/radialGradient%3e%3cclipPath%20id='c'%3e%3cpath%20fill='%23fff'%20d='M436%2098h119v385H436V98Z'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
function BeyondMedia($$payload) {
  const list = [
    "Live sports data",
    "Financial feeds",
    "Collaborative editing",
    "Gaming",
    "Metric collection and monitoring",
    "Connecting to AI/ML models",
    "IoT sensors",
    "AR/VR and immersive applications"
  ];
  let visible = false;
  Section($$payload, {
    overflow: true,
    background: "white",
    children: ($$payload2) => {
      Container($$payload2, {
        children: ($$payload3) => {
          Padding($$payload3, {
            tag: "div",
            top: 100,
            bottom: 100,
            children: ($$payload4) => {
              const each_array = ensure_array_like(list);
              $$payload4.out.push(`<div class="wrapper svelte-4cmhcm">`);
              Badge($$payload4, {
                color: "dark",
                className: "mb-30",
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Beyond the media`);
                }
              });
              $$payload4.out.push(`<!----> <div class="title svelte-4cmhcm">`);
              Title($$payload4, {
                level: 2,
                color: "dark",
                weight: 400,
                align: "center",
                maxWidth: 530,
                size: 32,
                className: "mb-40",
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Designed for media, but works for any real-time data needing
            efficient distribution`);
                }
              });
              $$payload4.out.push(`<!----></div> <ul class="list svelte-4cmhcm"><!--[-->`);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let item = each_array[$$index];
                $$payload4.out.push(`<li${attr_class(clsx(["item", visible]), "svelte-4cmhcm")}>`);
                Text($$payload4, {
                  color: "dark",
                  weight: 500,
                  size: 13,
                  uppercase: true,
                  font: "lexend-deca",
                  children: ($$payload5) => {
                    $$payload5.out.push(`<!---->${escape_html(item)}`);
                  }
                });
                $$payload4.out.push(`<!----></li>`);
              }
              $$payload4.out.push(`<!--]--></ul> <img${attr("src", linesImage)} alt=""${attr("width", 555)}${attr("height", 501)} class="lines svelte-4cmhcm"/></div>`);
            }
          });
        }
      });
    }
  });
}
function About($$payload) {
  const foundationData = [
    {
      title: "QUIC protocol",
      description: "Native security, multiplexing, partial reliability, and improved performance"
    },
    { title: "WebTransport", description: "Browser compatibility" },
    {
      title: "Independent streams",
      description: "Prevent head-of-line blocking"
    },
    {
      title: "Connection migration",
      description: "Mobile resilience"
    }
  ];
  const smartMediaData = [
    "Pub/sub model for efficient distribution",
    "Fine-grained prioritization",
    "Adaptive quality based on network conditions",
    "Support for interactive and live content"
  ];
  Section($$payload, {
    background: "white",
    id: "technology",
    children: ($$payload2) => {
      Container($$payload2, {
        children: ($$payload3) => {
          $$payload3.out.push(`<div class="header svelte-o7cb3t"><div><div class="badge svelte-o7cb3t">`);
          Badge($$payload3, {
            color: "dark",
            className: "mb-30",
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->What is MOQ?`);
            }
          });
          $$payload3.out.push(`<!----></div> `);
          Title($$payload3, {
            level: 2,
            color: "dark",
            size: 40,
            weight: 400,
            className: "mb-10",
            maxWidth: 530,
            align: "center",
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->MOQ: Balancing Latency, Scale &amp; Complexity`);
            }
          });
          $$payload3.out.push(`<!----> `);
          Text($$payload3, {
            color: "secondary-accent",
            weight: 400,
            size: 13,
            uppercase: true,
            font: "lexend-deca",
            align: "center",
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->Tunable Latency Regimes + Broadcast Scale + Robust Architecture`);
            }
          });
          $$payload3.out.push(`<!----></div> <div>`);
          Text($$payload3, {
            color: "dark",
            size: 16,
            weight: 400,
            opacity: 0.8,
            className: "mb-20",
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->MOQ is the next evolution in streaming protocols, designed for modern
          live, real-time, and on-demand applications.`);
            }
          });
          $$payload3.out.push(`<!----> `);
          Text($$payload3, {
            color: "dark",
            size: 16,
            weight: 400,
            opacity: 0.8,
            className: "mb-20",
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->It provides a foundation that unifies low-latency interactivity with
          scalability and flexibility, supporting both live and non-real-time
          scenarios such as caching, time-shifted playback, and VOD.`);
            }
          });
          $$payload3.out.push(`<!----> `);
          Text($$payload3, {
            color: "dark",
            size: 16,
            weight: 400,
            opacity: 0.8,
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->MOQ is built to balance the trade-offs between latency, scale, and
          complexity without forcing compromises.`);
            }
          });
          $$payload3.out.push(`<!----></div></div> <div class="section svelte-o7cb3t">`);
          Subtitle($$payload3, {
            level: 3,
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->Modern Foundations`);
            }
          });
          $$payload3.out.push(`<!----> `);
          GridList($$payload3, {
            columns: 4,
            children: ($$payload4) => {
              const each_array = ensure_array_like(foundationData);
              $$payload4.out.push(`<!--[-->`);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let item = each_array[$$index];
                GridListItem($$payload4, {
                  color: "light",
                  children: ($$payload5) => {
                    Text($$payload5, {
                      tag: "strong",
                      color: "dark",
                      size: 18,
                      weight: 500,
                      className: "mb-10",
                      font: "lexend",
                      children: ($$payload6) => {
                        $$payload6.out.push(`<!---->${escape_html(item.title)}`);
                      }
                    });
                    $$payload5.out.push(`<!----> `);
                    Text($$payload5, {
                      color: "dark",
                      size: 16,
                      weight: 400,
                      opacity: 0.6,
                      children: ($$payload6) => {
                        $$payload6.out.push(`<!---->${escape_html(item.description)}`);
                      }
                    });
                    $$payload5.out.push(`<!---->`);
                  }
                });
              }
              $$payload4.out.push(`<!--]-->`);
            }
          });
          $$payload3.out.push(`<!----></div> <div>`);
          Subtitle($$payload3, {
            level: 3,
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->Smart Media Delivery`);
            }
          });
          $$payload3.out.push(`<!----> `);
          GridList($$payload3, {
            columns: 4,
            children: ($$payload4) => {
              const each_array_1 = ensure_array_like(smartMediaData);
              $$payload4.out.push(`<!--[-->`);
              for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                let item = each_array_1[$$index_1];
                GridListItem($$payload4, {
                  color: "light",
                  children: ($$payload5) => {
                    Text($$payload5, {
                      tag: "strong",
                      color: "dark",
                      size: 18,
                      weight: 500,
                      font: "lexend",
                      children: ($$payload6) => {
                        $$payload6.out.push(`<!---->${escape_html(item)}`);
                      }
                    });
                  }
                });
              }
              $$payload4.out.push(`<!--]-->`);
            }
          });
          $$payload3.out.push(`<!----></div>`);
        }
      });
    }
  });
}
function _page($$payload) {
  Header($$payload);
  $$payload.out.push(`<!----> `);
  Why($$payload);
  $$payload.out.push(`<!----> `);
  Benefits($$payload);
  $$payload.out.push(`<!----> `);
  About($$payload);
  $$payload.out.push(`<!----> `);
  BeyondMedia($$payload);
  $$payload.out.push(`<!----> `);
  Founders($$payload);
  $$payload.out.push(`<!----> `);
  Status($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _page as default
};

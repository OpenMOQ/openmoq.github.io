import { Z as head, Q as pop, V as escape_html, W as attr, O as push } from "./index.js";
import { p as page } from "./index2.js";
const ogImage = "/_app/immutable/assets/og.BEcs81_P.png";
function Meta($$payload, $$props) {
  push();
  let { title, description } = $$props;
  let pageTitle = page?.data?.title || title;
  let pageDescription = page?.data?.description || description;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(pageTitle)} | Advancing MOQ Protocol</title>`;
    $$payload2.out.push(`<meta name="description"${attr("content", pageDescription)}/> <meta prefix="og: http://ogp.me/ns#" property="og:title"${attr("content", pageTitle)}/> <meta property="og:description"${attr("content", pageDescription)}/> <meta property="og:image"${attr("content", ogImage)}/> <meta property="og:type" content="website"/>`);
  });
  pop();
}
export {
  Meta as M
};

import { r as resolve } from "./Button.js";
const internal = {
  index: `${resolve("/")}`,
  contact: `${resolve("/contact")}`
};
const external = {
  join: "https://docs.google.com/forms/d/e/1FAIpQLScfrbs7p6QPfCLfchBkJw6IADUF7I_ud11jFyKONuNEKnTEjA/viewform?usp=send_form"
};
const indexSections = {
  why: "why",
  progress: "progress",
  technology: "technology",
  members: "members"
};
const getInternalHref = (path) => {
  return `${resolve("/")}#${indexSections[path]}`;
};
export {
  external as e,
  getInternalHref as g,
  internal as i
};

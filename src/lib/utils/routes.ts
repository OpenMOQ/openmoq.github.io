import { resolve } from "$app/paths";

export const internal = {
  index: `${resolve("/")}`,
  contact: `${resolve("/contact")}`,
};

export const external = {
  github: "https://github.com/openmoq",
  join: "https://docs.google.com/forms/d/e/1FAIpQLScfrbs7p6QPfCLfchBkJw6IADUF7I_ud11jFyKONuNEKnTEjA/viewform?usp=send_form",
};

export const indexSections = {
  why: "why",
  progress: "progress",
  technology: "technology",
  members: "members",
};

export const getInternalHref = (path: keyof typeof indexSections) => {
  return `${resolve("/")}#${indexSections[path]}`;
};

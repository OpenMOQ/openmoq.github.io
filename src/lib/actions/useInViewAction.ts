import type { Action } from "svelte/action";

let observer: IntersectionObserver | null = null;

export const inView: Action<Element, () => void> = (element, callback) => {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dispatchEvent(new CustomEvent("enterViewport"));
          }
        });
      },
      { rootMargin: "0px 0px 200px 0px" }
    );
  }

  const handler = () => callback();
  element.addEventListener("enterViewport", handler);
  observer.observe(element);

  return {
    destroy() {
      element.removeEventListener("enterViewport", handler);
      observer?.unobserve(element);
    },
  };
};

import { resolve } from '$app/paths';

export const handleLinkClick = (event: MouseEvent) => {
  const href = (event.target as HTMLAnchorElement).getAttribute('href');

  const base = `${resolve('/')}#`;
  if (href?.startsWith(base)) {
    const target = document.getElementById(href.replace(base, ''));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'start' });
      event.preventDefault();
    }
  }
};

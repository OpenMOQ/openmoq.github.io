<script lang="ts">
  import { handleLinkClick } from "./utils/handleLinkClick";
  import { getInternalHref, internal } from "./utils/routes";

  import hamburgerIcon from "$icons/hanburger.svg?raw";
  import menuCloseIcon from "$icons/menu-close.svg?raw";
  import { Icon } from "svelte-icon";

  const links = [
    { label: "Why OpenMOQ", href: getInternalHref("why") },
    { label: "Technology", href: getInternalHref("technology") },
    { label: "Members", href: getInternalHref("members") },
    { label: "Get Involved", href: internal.contact },
  ];

  interface Props {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  }

  let { isOpen, onOpen, onClose }: Props = $props();
</script>

<div class="menu-container">
  <input
    type="checkbox"
    id="menu-toggle"
    class="menu-toggle"
    checked={isOpen}
    onchange={isOpen ? onClose : onOpen}
  />
  <label for="menu-toggle" class="menu-button">
    <div class="hamburger-icon">
      <Icon data={hamburgerIcon} size="30" stroke="none" />
    </div>
    <div class="close-icon">
      <Icon data={menuCloseIcon} size="30" stroke="none" />
    </div>
  </label>

  <nav class="menu">
    <ul class="links">
      {#each links as link (link.href)}
        <li class="item">
          <a
            href={link.href}
            class="link"
            onclick={(e) => {
              handleLinkClick(e);
              onClose();
            }}
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  .menu-container {
    position: relative;
  }

  .menu-toggle {
    display: none;
  }

  .menu-button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
    color: white;
  }

  .menu {
    position: fixed;
    top: 65px;
    left: 0;
    width: 100%;
    background-color: hsla(var(--color-background), 0.95);
    backdrop-filter: blur(10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    border-bottom: 1px solid var(--color-border-light);
    transform: translateY(-10px);
  }

  .close-icon {
    display: none;
  }

  .links {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .link {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.875rem;
    padding: 20px 15px;
    display: block;
    transition: background-color 0.2s ease;
  }

  .link:hover {
    background-color: var(--color-border-light);
  }

  /* Show menu when checkbox is checked */
  .menu-toggle:checked ~ .menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  /* Animate hamburger to X when menu is open */
  .menu-toggle:checked ~ .menu-button .hamburger-icon {
    display: none;
  }

  .menu-toggle:checked ~ .menu-button .close-icon {
    display: block;
  }

  /* Desktop styles */
  @media (min-width: 768px) {
    .menu-button {
      display: none;
    }

    .menu {
      position: static;
      opacity: 1;
      visibility: visible;
      transform: none;
      background: transparent;
      border: none;
      backdrop-filter: none;
      padding: 0;
      min-width: auto;
    }

    .links {
      flex-direction: row;
      gap: 40px;
    }

    .link {
      padding: 0;
    }

    .link:hover {
      background-color: transparent;
      opacity: 0.8;
    }
  }
</style>

<script lang="ts">
  import { onMount } from "svelte";
  import Container from "./Container.svelte";

  import openmoq from "$images/openmoq.svg";
  import { internal } from "./utils/routes";
  import Menu from "./Menu.svelte";

  let isTop = true;

  const getIsTop = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    return st <= 0;
  };

  onMount(() => {
    isTop = getIsTop();

    window.addEventListener("scroll", () => {
      isTop = getIsTop();
    });
  });

  const scrollToTop = (e: MouseEvent) => {
    const currentRoute = window.location.pathname;
    if (currentRoute === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  let isOpen = false;
</script>

<div>
  <div class={["wrapper", isTop && "top", isOpen && "open"]}>
    <Container>
      <div class="content">
        <a href={internal.index} onclick={scrollToTop}>
          <img
            src={openmoq}
            alt="OpenMOQ logo"
            width={168}
            height={34}
            class="logo"
          />
        </a>

        <Menu
          {isOpen}
          onOpen={() => (isOpen = true)}
          onClose={() => (isOpen = false)}
        />
      </div>
    </Container>
  </div>
  <button
    class={["overlay", isOpen && "open"]}
    onclick={() => (isOpen = false)}
    tabindex={-1}
    aria-label="Close menu"
  ></button>
</div>

<style>
  .wrapper {
    --color-background: 254, 73%, 6%;

    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom: 1px solid var(--color-border-light);
    height: 65px;
    font-family: "Lexend Deca", sans-serif;
    transition: all 0.2s ease-in-out;
    background-color: hsl(var(--color-background), 0.96);
    backdrop-filter: blur(10px);
    z-index: 10;

    &.top:not(.open) {
      background-color: transparent;
    }

    &.open {
      border-color: transparent;
    }
  }

  .logo {
    pointer-events: none;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsl(var(--color-background), 0.25);
    backdrop-filter: blur(3px);
    z-index: 2;
    appearance: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-in-out;

    &.open {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }
</style>

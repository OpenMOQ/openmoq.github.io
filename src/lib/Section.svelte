<script lang="ts">
  import type { Snippet } from "svelte";
  import type { indexSections } from "./utils/routes";

  interface Props {
    id?: keyof typeof indexSections;
    background?: "white" | "light" | "dark" | "dark-gradient" | "dark-lighter";
    overflow?: boolean;
    children: Snippet;
  }

  let { id, background, overflow, children }: Props = $props();
</script>

<section {id} class={["wrapper", background, overflow && "overflow"]}>
  {@render children()}
</section>

<style>
  .wrapper {
    width: 100%;
    position: relative;
    scroll-margin-top: 65px;
    min-height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .white {
    background: var(--color-white);
  }

  .light {
    background: var(--color-beige);
  }

  .dark {
    background: var(--color-darkblue--darker);
  }

  .dark-gradient {
    background: linear-gradient(
      to bottom,
      var(--color-darkblue--darker) 0%,
      var(--color-darkblue) 100%
    );
  }

  .dark-lighter {
    background: var(--color-darkblue);
  }

  .overflow {
    overflow: hidden;
  }
</style>

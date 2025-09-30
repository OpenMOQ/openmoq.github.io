<script lang="ts">
  import type { Snippet } from "svelte";

  type PaddingSize = 80 | 100 | 140 | 160 | 200;

  interface Props {
    tag: "div" | "section" | "header";
    top: PaddingSize;
    bottom: PaddingSize;
    overflow?: "visible" | "hidden";
    position?: "relative" | "static";
    children: Snippet;
  }

  let {
    tag,
    top,
    bottom,
    overflow = "visible",
    position = "static",
    children,
  }: Props = $props();
</script>

<svelte:element
  this={tag}
  class={[
    "padding",
    overflow && `overflow-${overflow}`,
    position && `position-${position}`,
  ]}
  style={`--top: ${top}px; --bottom: ${bottom}px`}
>
  {@render children()}
</svelte:element>

<style>
  .padding {
    padding-top: calc(var(--top) * 0.6);
    padding-bottom: calc(var(--bottom) * 0.6);
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .position-relative {
    position: relative;
    z-index: 1;
  }

  @media (min-width: 768px) {
    .padding {
      padding-top: calc(var(--top) * 0.8);
      padding-bottom: calc(var(--bottom) * 0.8);
    }
  }

  @media (min-width: 960px) {
    .padding {
      padding-top: var(--top);
      padding-bottom: var(--bottom);
    }
  }
</style>

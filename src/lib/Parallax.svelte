<script lang="ts">
  import type { Snippet } from "svelte";
  import { onMount, onDestroy } from "svelte";

  interface Props {
    top?: number;
    left?: number;
    opacity?: 0.4 | 0.6 | 1;
    boundary?: number;
    zIndex: number;
    parallaxSpeed?: number;
    offset?: "middle" | "top";
    parallaxDirection?:
      | "up"
      | "down"
      | "left"
      | "right"
      | "diagonal-up"
      | "diagonal-down";
    children: Snippet;
  }

  let {
    top,
    left,
    opacity = 1,
    zIndex,
    boundary = 0.5,
    parallaxSpeed = 0.5,
    offset = "middle",
    parallaxDirection = "down",
    children,
  }: Props = $props();

  let scrollY = $state(0);
  let elementRef: HTMLDivElement;
  let initialOffset = $state(0);
  let isInitialized = $state(false);
  let elementHeight = $state(0);

  const handleScroll = () => {
    if (typeof window === "undefined" || !elementRef) return;

    if (!isInitialized) {
      // Get the element's initial position relative to the viewport
      const rect = elementRef.getBoundingClientRect();
      // Calculate offset to middle of screen instead of top
      initialOffset =
        offset === "middle"
          ? window.scrollY + rect.top - window.innerHeight / 2
          : 0;
      elementHeight = rect.height;
      isInitialized = true;
    }

    // Calculate scroll relative to element's position when it reaches middle of screen
    scrollY = window.scrollY - initialOffset;
  };

  onMount(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      // Initialize the element position immediately
      handleScroll();
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  const parallaxTransform = $derived(() => {
    const speed = parallaxSpeed * scrollY;
    const maxMovement = elementHeight * boundary; // percentage of element height

    // Apply boundary constraint
    const constrainedSpeed = Math.max(
      -maxMovement,
      Math.min(maxMovement, speed)
    );

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
  });
</script>

<div
  bind:this={elementRef}
  class={["wrapper", left || top ? "absolute" : "relative"]}
  style={`top: ${top}%; left: ${left}%; z-index: ${zIndex}; opacity: ${opacity}; transform: ${parallaxTransform()};`}
>
  {@render children()}
</div>

<style>
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    will-change: transform;
  }

  .absolute {
    position: absolute;
  }

  .relative {
    position: relative;
  }
</style>

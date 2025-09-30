<script lang="ts">
  import type { Snippet } from "svelte";

  import Dot from "./Dot.svelte";
  import Text from "./Text.svelte";
  import Parallax from "./Parallax.svelte";

  interface Props {
    color: "dark" | "light";
    className?: string;
    children: Snippet;
  }

  let { color, className, children }: Props = $props();
</script>

<Parallax zIndex={1} parallaxSpeed={0.02} parallaxDirection="up">
  <div class={["badge", color, className]}>
    <Dot />
    <Text {color} size={13} weight={400} uppercase font="lexend-deca">
      {@render children()}
    </Text>
  </div>
</Parallax>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px;
    border-radius: 20px;

    &.light {
      border: 1px solid var(--color-border-light);
    }

    &.dark {
      border: 1px solid var(--color-border-dark);
    }
  }

  @media (min-width: 768px) {
    .badge {
      padding: 6px 20px;
      gap: 10px;
    }
  }
</style>

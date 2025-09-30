<script lang="ts">
  import type { Snippet } from "svelte";

  import Divider from "./Divider.svelte";
  import Section from "./Section.svelte";
  import type { indexSections } from "./utils/routes";
  import Container from "./Container.svelte";

  interface Props {
    id?: keyof typeof indexSections;
    background: "light" | "dark";
    children: Snippet;
  }

  let { id, background, children }: Props = $props();

  const dividerColor = background === "dark" ? "light" : "dark";
</script>

<Divider color={dividerColor} />
<Section {background} {id}>
  <div class={["divider", "top"]}>
    <Divider color={dividerColor} />
  </div>
  <Container sideLines={dividerColor} lines="single">
    {@render children()}
  </Container>
  <div class={["divider", "bottom"]}>
    <Divider color={dividerColor} />
  </div>
</Section>

<style>
  .divider {
    border: none;
    background: var(--color-lines-light);
    width: 100%;
    height: 1px;
    margin: 0;

    --scale: 0.6;

    &.top {
      position: absolute;
      top: calc(100px * var(--scale));
    }

    &.bottom {
      position: absolute;
      bottom: calc(60px * var(--scale));
      box-shadow: 0 calc(60px * var(--scale) * -1) 0 0 var(--color-lines-light);
    }
  }

  @media (min-width: 768px) {
    .divider {
      --scale: 0.8;
    }
  }

  @media (min-width: 960px) {
    .divider {
      --scale: 1;
    }
  }
</style>

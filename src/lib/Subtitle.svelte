<script lang="ts">
  import type { Snippet } from "svelte";
  import Dot from "./Dot.svelte";
  import Title from "./Title.svelte";

  interface Props {
    level: 2 | 3;
    children: Snippet;
  }

  let { level, children }: Props = $props();
</script>

<span class="title mb-20">
  <Dot />
  <Title {level} color="dark" size={20} weight={500}>{@render children()}</Title
  >
</span>

<style>
  .title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>

<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<li class="item">{@render children()}</li>

<style>
  @media (min-width: 768px) {
    .item {
      flex: 1 0 520px;
      padding-left: 30px;
    }
  }

  @media (min-width: 960px) {
    .item {
      flex: 1 0 580px;
      padding-left: 30px;
    }
  }
</style>

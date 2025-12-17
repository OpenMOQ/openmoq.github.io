<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    color: "light" | "dark";
    children: Snippet;
  }

  let { color, children }: Props = $props();
</script>

<li class={["item", color]}>
  {@render children()}
</li>

<style>
  .item {
    padding: 10px 15px;
    border: 1px solid var(--border);
    border-right: none;
    border-bottom: none;
    position: relative;

    &:first-child {
      border-radius: 20px 0 0 0;
    }

    &:after {
      content: "";
      position: absolute;
      top: 100%;
      left: -1px;
      width: 1px;
      height: 20px;
      background-color: var(--border);
    }

    &:last-child {
      &:after {
        display: none;
      }
    }
  }

  .dark {
    --border: hsl(245, 9%, 25%, 1);
  }

  .light {
    --border: hsl(20, 10%, 82%, 1);
  }

  @media (min-width: 768px) {
    .item {
      padding: 30px 20px;
      border-radius: 20px 0 0 0;

      &:after {
        content: "";
        position: absolute;
        top: -1px;
        right: -20px;
        left: auto;
        width: 20px;
        height: 1px;
      }
    }
  }

  @media (min-width: 960px) {
    .item {
      padding: 40px 30px;
    }
  }
</style>

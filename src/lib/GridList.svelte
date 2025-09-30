<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    columns: 2 | 3 | 4;
    height?: 'auto' | 'full';
  }

  let { children, columns, height = 'auto' }: Props = $props();
</script>

<ul class={['list', `height-${height}`, `columns-${columns}`]}>
  {@render children()}
</ul>

<style>
  .list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  @media (min-width: 768px) {
    .list {
      display: grid;
      gap: 30px 0;
    }

    .columns-2,
    .columns-3,
    .columns-4 {
      grid-template-columns: repeat(2, 1fr);
    }

    .height-auto {
      height: auto;
    }

    .height-full {
      height: 100%;
    }
  }

  @media (min-width: 960px) {
    .columns-3 {
      grid-template-columns: repeat(3, 1fr);
    }

    .columns-4 {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

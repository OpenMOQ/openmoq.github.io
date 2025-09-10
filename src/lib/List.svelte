<script lang="ts">
  import Text from './Text.svelte';

  interface Props {
    data: readonly string[];
  }

  let { data }: Props = $props();
</script>

<ul class="list">
  {#each data as item (item)}
    <li class="item">
      <Text color="dark" tag="p" size={14} weight={400} opacity={0.8}>{item}</Text>
    </li>
  {/each}
</ul>

<style>
  .list {
    list-style-type: none;
    padding: 0 0 0 14px;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .item {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 8px;
      left: -14px;
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 1px;
      background-color: var(--color-yellow);
    }
  }
</style>

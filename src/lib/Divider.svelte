<script lang="ts">
  interface Props {
    color: 'dark' | 'light';
  }

  let { color = 'dark' } = $props();
</script>

<hr class={['divider', color]} />

<style>
  .divider {
    border: none;
    height: 1px;
    margin: 0;
  }

  .dark {
    background: var(--color-lines-dark);
  }

  .light {
    background: var(--color-lines-light);
  }
</style>

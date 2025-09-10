<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    maxWidth?: number;
    relative?: boolean;
    children: Snippet;
  } & (
    | { sideLines?: 'light' | 'dark'; lines?: 'single' | 'double' }
    | { lines?: never; sideLines?: never }
  );

  let { maxWidth, sideLines, lines, relative = false, children }: Props = $props();
</script>

<div
  class={[
    'container',
    !maxWidth && 'default',
    sideLines && `lines-${sideLines}`,
    lines && `lines-${lines}`,
    relative && 'relative'
  ]}
  style={maxWidth ? `max-width: ${maxWidth}px` : undefined}
>
  {@render children()}
</div>

<style>
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;

    &.default {
      max-width: 1150px;
    }

    &.relative {
      position: relative;
      z-index: 1;
    }
  }

  .lines-dark,
  .lines-light {
    position: relative;

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      width: 1px;
      height: 100%;
      background: currentColor;
    }

    &:before {
      left: 7px;
    }

    &:after {
      right: 7px;
    }
  }

  .lines-light {
    &:before,
    &:after {
      color: var(--color-lines-light);
    }
  }

  .lines-dark {
    &:before,
    &:after {
      color: var(--color-lines-dark);
    }
  }

  @media (min-width: 768px) {
    .container {
      padding: 0 25px;
    }

    .lines-dark,
    .lines-light {
      &:before {
        left: 15px;
      }

      &:after {
        right: 15px;
      }
    }
  }

  @media (min-width: 960px) {
    .lines-dark,
    .lines-light {
      &:before {
        left: 0;
        box-shadow: -60px 0 0 currentColor;
      }

      &:after {
        right: 0;
        box-shadow: 60px 0 0 currentColor;
      }

      &.lines-single {
        &:before,
        &:after {
          background: none;
        }
      }
    }
  }
</style>

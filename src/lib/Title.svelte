<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    color: "light" | "dark";
    size: 20 | 32 | 40 | 60;
    weight: 400 | 500 | 700;
    align?: "left" | "center" | "right";
    balance?: boolean;
    maxWidth?: number;
    className?: string;
    centered?: boolean;
    children: Snippet;
  }

  let {
    level,
    color,
    size,
    weight,
    align = "left",
    balance = false,
    className,
    maxWidth,
    children,
    centered = false,
  }: Props = $props();
</script>

<svelte:element
  this={`h${level}`}
  class={[
    "title",
    color,
    `size-${size}`,
    `weight-${weight}`,
    `align-${align}`,
    centered && "centered",
    balance && "balance",
    className,
  ]}
  style={maxWidth ? `max-width: ${maxWidth}px` : undefined}
>
  {@render children()}
</svelte:element>

<style>
  .title {
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: -0.03em;
    line-height: 125%;
    margin: 0;
    display: block;

    &.balance {
      text-wrap: balance;
    }

    &.centered {
      display: block;
      margin: 0 auto;
    }
  }

  /* Color */
  .light {
    color: white;
  }

  .dark {
    color: var(--color-darkblue);
  }

  /* Size */
  .size-20 {
    font-size: 1.125rem;
  }

  .size-32 {
    font-size: 1.25rem;
  }

  .size-40 {
    font-size: 1.625rem;
  }

  .size-60 {
    font-size: 1.625rem;
  }

  /* Weight */
  .weight-400 {
    font-weight: 400;
  }

  .weight-500 {
    font-weight: 500;
  }

  .weight-700 {
    font-weight: 700;
  }

  /* Align */
  .align-left {
    text-align: left;
  }

  .align-center {
    text-align: center;
  }

  .align-right {
    text-align: right;
  }

  @media (min-width: 375px) {
    /* Size */
    .size-60 {
      font-size: 1.875rem;
    }
  }

  @media (min-width: 768px) {
    /* Size */
    .size-20 {
      font-size: 1.25rem;
    }

    .size-32 {
      font-size: 1.75rem;
    }

    .size-40 {
      font-size: 2rem;
    }

    .size-60 {
      font-size: 3.25rem;
    }
  }

  @media (min-width: 960px) {
    /* Size */
    .size-20 {
      font-size: 1.25rem;
    }

    .size-32 {
      font-size: 2rem;
    }

    .size-40 {
      font-size: 2.5rem;
    }

    .size-60 {
      font-size: 3.75rem;
    }
  }
</style>

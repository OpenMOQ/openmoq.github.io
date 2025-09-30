<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    tag?: "p" | "strong" | "span" | "blockquote";
    color: "light" | "dark" | "accent" | "secondary-accent";
    opacity?: 0.6 | 0.8 | 1;
    size: 13 | 14 | 15 | 16 | 18;
    weight?: 300 | 400 | 500;
    align?: "left" | "center" | "right";
    uppercase?: boolean;
    font?: "lexend" | "lexend-deca" | "be-vietnam-pro";
    maxWidth?: number;
    className?: string;
    centered?: boolean;
    children: Snippet;
  }

  let {
    tag = "p",
    color,
    opacity = 1,
    size,
    weight = 400,
    align = "left",
    uppercase = false,
    font = "be-vietnam-pro",
    maxWidth,
    className,
    centered = false,
    children,
  }: Props = $props();
</script>

<svelte:element
  this={tag}
  class={[
    "text",
    color,
    `opacity-${opacity * 100}`,
    `size-${size}`,
    `weight-${weight}`,
    `align-${align}`,
    font,
    uppercase && "uppercase",
    centered && "centered",
    className,
  ]}
  style={maxWidth ? `max-width: ${maxWidth}px` : undefined}
>
  {@render children()}
</svelte:element>

<style>
  .text {
    font-size: 16px;
    line-height: 1.5;
    font-style: normal;
    margin: 0;
    padding: 0;
    display: block;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .centered {
    display: block;
    margin: 0 auto;
  }

  /* Font */
  .lexend {
    font-family: "Lexend", sans-serif;
    letter-spacing: -0.05em;
  }

  .lexend-deca {
    font-family: "Lexend Deca", sans-serif;
  }

  .be-vietnam-pro {
    font-family: "Be Vietnam Pro", sans-serif;
  }

  /* Color */
  .light {
    color: white;
  }

  .dark {
    color: var(--color-darkblue);
  }

  .accent {
    color: var(--color-yellow);
  }

  .secondary-accent {
    color: var(--color-blue);
  }

  /* Opacity */
  .opacity-60 {
    opacity: 0.6;
  }

  .opacity-80 {
    opacity: 0.8;
  }

  .opacity-100 {
    opacity: 1;
  }

  /* Size */
  .size-13 {
    font-size: 0.75rem;
  }

  .size-14 {
    font-size: 0.8125rem;
  }

  .size-15 {
    font-size: 0.875rem;
  }

  .size-16 {
    font-size: 0.9375rem;
  }

  .size-18 {
    font-size: 1rem;
  }

  /* Weight */
  .weight-300 {
    font-weight: 300;
  }

  .weight-400 {
    font-weight: 400;
  }

  .weight-500 {
    font-weight: 500;
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

  @media (min-width: 768px) {
    /* Size */
    .size-13 {
      font-size: 0.8125rem;
    }

    .size-14 {
      font-size: 0.875rem;
    }

    .size-15 {
      font-size: 0.875rem;
    }

    .size-16 {
      font-size: 0.9375rem;
    }

    .size-18 {
      font-size: 1.0625rem;
    }
  }

  @media (min-width: 960px) {
    /* Size */
    .size-13 {
      font-size: 0.8125rem;
    }

    .size-14 {
      font-size: 0.875rem;
    }

    .size-15 {
      font-size: 0.9375rem;
    }

    .size-16 {
      font-size: 1rem;
    }

    .size-18 {
      font-size: 1.125rem;
    }
  }
</style>

<script lang="ts">
  import type { Snippet } from "svelte";
  import { Icon } from "svelte-icon";

  import anchorIcon from "$icons/anchor.svg?raw";
  import { handleLinkClick } from "./utils/handleLinkClick";

  type Props = {
    withArrow?: boolean;
    disabled?: boolean;
    children: Snippet;
    size?: "sm" | "md";
  } & (
    | { onclick?: () => void; type?: "button" | "submit" }
    | { href: string; type?: never }
  ) &
    (
      | { variant?: "primary"; color?: never }
      | { variant: "secondary"; color: "light" | "dark" }
    );

  let {
    children,
    variant = "primary",
    size = "md",
    withArrow = false,
    disabled = false,
    color,
    ...rest
  }: Props = $props();

  const className = [
    "button",
    variant,
    color && `color-${color}`,
    size && `size-${size}`,
  ];
</script>

{#snippet buttonContent()}
  <span>{@render children()}</span>
  {#if withArrow}
    <span class="arrow"
      ><Icon data={anchorIcon} class="arrow" stroke="none" size="10" /></span
    >
  {/if}
{/snippet}

{#if "href" in rest}
  <a href={rest.href} class={className} onclick={handleLinkClick}>
    {@render buttonContent()}
  </a>
{:else}
  <button onclick={rest.onclick} class={className} type={rest.type} {disabled}>
    {@render buttonContent()}
  </button>
{/if}

<style>
  .button {
    font-family: "Lexend Deca", sans-serif;
    padding: 7px 10px;
    border-radius: 20px;
    appearance: none;
    border: none;
    cursor: pointer;
    font-size: 0.8125rem;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
    color: white;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;

    &.size-sm {
      padding: 5px 10px;
      font-size: 0.75rem;
    }

    &.size-md {
      padding: 7px 10px;
      font-size: 0.8125rem;
    }

    &:active {
      transform: scale(0.98);
    }

    &:hover:not(.disabled):not(:disabled),
    &:focus:not(.disabled):not(:disabled) {
      .arrow {
        transform: translateX(3px);
      }
    }

    &:disabled,
    &.disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;

      &:hover,
      &:focus {
        .arrow {
          transform: none;
        }
      }
    }

    > * {
      pointer-events: none;
    }
  }

  .arrow {
    display: flex;
    transition: all 0.2s ease-in-out;
  }

  /* Variant */
  .primary {
    background: var(--color-blue);
    border: 1px solid var(--color-blue);

    &:hover:not(.disabled):not(:disabled),
    &:focus:not(.disabled):not(:disabled) {
      background-color: var(--color-blue--darker);
      border: 1px solid var(--color-blue--darker);
    }
  }

  .secondary {
    background: transparent;

    &.color-light {
      border: 1px solid white;

      &:hover:not(.disabled):not(:disabled),
      &:focus:not(.disabled):not(:disabled) {
        background-color: white;
        color: var(--color-darkblue);
      }
    }

    &.color-dark {
      color: var(--color-darkblue);
      border: 1px solid var(--color-darkblue);

      &:hover:not(.disabled):not(:disabled),
      &:focus:not(.disabled):not(:disabled) {
        background-color: var(--color-darkblue);
        color: white;
      }
    }
  }

  @media (min-width: 375px) {
    .button {
      &.size-sm {
        padding: 8px 15px;
        font-size: 0.875rem;
      }

      &.size-md {
        padding: 10px 15px;
        font-size: 0.875rem;
      }
    }
  }

  @media (min-width: 768px) {
    .button {
      gap: 10px;

      &.size-sm {
        padding: 8px 15px;
        font-size: 0.875rem;
      }

      &.size-md {
        padding: 10px 15px;
        font-size: 0.875rem;
      }
    }
  }
</style>

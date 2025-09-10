<script lang="ts">
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import Autoscroll from "embla-carousel-auto-scroll";
  import ClassNames from "embla-carousel-class-names";
  import type { Snippet } from "svelte";

  let options = {
    loop: true,
    align: "center",
    slidesToScroll: 1,
    inViewThreshold: 0.7,
  } as const;
  let plugins = [
    Autoscroll({
      active: false,
      breakpoints: {
        "(min-width: 768px)": {
          active: true,
          startDelay: 0,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        },
      },
    }),
    ClassNames(),
  ];

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="embla" use:emblaCarouselSvelte={{ options, plugins }}>
  <ul class="container">
    {@render children()}
  </ul>
</div>

<style>
  .embla {
    overflow: hidden;
    opacity: 0;
    animation: fadeIn 0.5s ease-in-out forwards;
  }

  .container {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: 0;
    gap: 10px;
    max-width: 360px;
  }

  @media (min-width: 768px) {
    .embla {
      mask: linear-gradient(
        to right,
        transparent,
        var(--color-white) 5%,
        var(--color-white) 95%,
        transparent
      );
    }

    .container {
      flex-direction: row;
      margin-left: -30px;
      gap: 0;
      max-width: none;
    }
  }

  @media (min-width: 960px) {
    .embla {
      mask: linear-gradient(
        to right,
        transparent,
        var(--color-white) 15%,
        var(--color-white) 85%,
        transparent
      );
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>

<script lang="ts">
  import planetImage from '$images/planet.svg';

  interface Props {
    size: number;
    movement?: 1 | 2 | 3;
  }

  let { size, movement }: Props = $props();
</script>

<img
  src={planetImage}
  alt="Planet"
  width={size}
  height={size}
  class={['planet', movement && `movement-${movement}`]}
/>

<style>
  .planet {
    filter: blur(10px);
  }

  .movement-1 {
    animation: movement_one 6s linear infinite both;
  }

  .movement-2 {
    animation: movement_two 11s linear infinite both;
  }

  .movement-3 {
    animation: movement_three 9s linear infinite both;
  }

  @keyframes movement_one {
    0% {
      transform: translate(0%, 0%) rotateY(0deg) scale(1);
    }
    25% {
      transform: translate(15%, -10%) rotateY(5deg) scale(1.02);
    }
    50% {
      transform: translate(30%, -5%) rotateY(10deg) scale(1);
    }
    75% {
      transform: translate(15%, 5%) rotateY(5deg) scale(1.02);
    }
    100% {
      transform: translate(0%, 0%) rotateY(0deg) scale(1);
    }
  }

  @keyframes movement_two {
    0% {
      transform: translate(0%, 0%) rotate(0deg) scale(1);
    }
    20% {
      transform: translate(-10%, 15%) rotate(-3deg) scale(0.98);
    }
    40% {
      transform: translate(-20%, 25%) rotate(-6deg) scale(0.95);
    }
    60% {
      transform: translate(-15%, 20%) rotate(-8deg) scale(0.92);
    }
    80% {
      transform: translate(-5%, 10%) rotate(-3deg) scale(0.95);
    }
    100% {
      transform: translate(0%, 0%) rotate(0deg) scale(1);
    }
  }

  @keyframes movement_three {
    0% {
      transform: translate(0%, 0%) rotate(0deg) rotateY(0deg) scale(1);
    }
    16.66% {
      transform: translate(20%, 10%) rotate(2deg) rotateY(3deg) scale(1.01);
    }
    33.33% {
      transform: translate(35%, 5%) rotate(4deg) rotateY(6deg) scale(1.03);
    }
    50% {
      transform: translate(25%, -5%) rotate(6deg) rotateY(9deg) scale(1.05);
    }
    66.66% {
      transform: translate(10%, -10%) rotate(4deg) rotateY(6deg) scale(1.03);
    }
    83.33% {
      transform: translate(-5%, -5%) rotate(2deg) rotateY(3deg) scale(1.01);
    }
    100% {
      transform: translate(0%, 0%) rotate(0deg) rotateY(0deg) scale(1);
    }
  }
</style>

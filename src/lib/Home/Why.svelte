<script lang="ts">
  import Container from "$lib/Container.svelte";
  import Text from "$lib/Text.svelte";
  import Title from "$lib/Title.svelte";

  import systemIcon from "$icons/system.svg";
  import brainIcon from "$icons/brain.svg";
  import teamIcon from "$icons/team.svg";
  import scenarioIcon from "$icons/scenario.svg";
  import marketIcon from "$icons/market.svg";
  import Divider from "$lib/Divider.svelte";
  import Padding from "$lib/Padding.svelte";
  import LinesSection from "$lib/LinesSection.svelte";
  import Parallax from "$lib/Parallax.svelte";

  const list = [
    {
      icon: systemIcon,
      title: "Shared Cost & Effort",
      description: "Distribute development costs across organizations",
    },
    {
      icon: brainIcon,
      title: "Accelerated Development",
      description: "Leverage collective expertise for rapid MOQ advancement",
    },
    {
      icon: teamIcon,
      title: "Enhanced Interoperability",
      description:
        "Ensure compatibility with standardized, open-source implementations",
    },
    {
      icon: scenarioIcon,
      title: "Strategic Differentiation",
      description:
        "Focus resources on unique value, not reinventing the foundation",
    },
    {
      icon: marketIcon,
      title: "Market Growth",
      description: "Lower barriers, enabling new use cases",
    },
  ];
</script>

<LinesSection background="dark" id="why">
  <Padding tag="div" top={160} bottom={200}>
    <div class="header mb-100">
      <Title level={2} color="light" size={40} weight={500} align="center">
        Why OpenMOQ?
      </Title>
      <Text color="light" size={16} weight={400} opacity={0.8} align="center">
        Meeting the demands of ultra-low latency and massive scale requires a
        shared foundation built together. By collaborating on open-source
        streaming infrastructure, we create shared value for the entire
        ecosystem.
      </Text>
    </div>

    <ul class="list">
      {#each list as item (item.title)}
        <li class="item">
          <img src={item.icon} alt="" width={50} height={50} class="icon" />
          <div class="content">
            <Text
              tag="strong"
              color="light"
              size={18}
              font="lexend"
              weight={500}
            >
              {item.title}
            </Text>
            <Text color="light" size={16} weight={400} opacity={0.6}>
              {item.description}
            </Text>
          </div>
        </li>
      {/each}
    </ul>
  </Padding>
</LinesSection>

<style>
  .header {
    max-width: 660px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
    list-style-type: none;
    padding: 0 30px;
    max-width: 400px;
    margin: 0 auto;
  }

  .icon {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
  }

  .item {
    display: flex;
    gap: 20px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (min-width: 768px) {
    .list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      max-width: 700px;
      padding: 0;
      gap: 30px;
    }

    .icon {
      width: 50px;
      height: 50px;
    }

    .item {
      gap: 30px;
    }
  }

  @media (min-width: 960px) {
    .list {
      grid-template-columns: repeat(6, 1fr);
      gap: 74px 44px;
      max-width: none;
    }

    .item {
      grid-column: span 2;

      &:nth-child(4) {
        grid-column: 2 / span 2;
      }
    }
  }
</style>

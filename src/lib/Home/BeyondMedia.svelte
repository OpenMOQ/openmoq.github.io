<script lang="ts">
  import Container from "$lib/Container.svelte";
  import Section from "$lib/Section.svelte";
  import Text from "$lib/Text.svelte";
  import Title from "$lib/Title.svelte";

  import { inView } from "$lib/actions/useInViewAction";

  import linesImage from "$images/lines.svg";
  import Badge from "$lib/Badge.svelte";
  import Padding from "$lib/Padding.svelte";

  const list = [
    "Live sports data",
    "Financial feeds",
    "Collaborative editing",
    "Gaming",
    "Metric collection and monitoring",
    "Connecting to AI/ML models",
    "IoT sensors",
    "AR/VR and immersive applications",
  ];

  let visible = false;
</script>

<Section overflow background="white">
  <Container>
    <Padding tag="div" top={100} bottom={100}>
      <div class="wrapper">
        <Badge color="dark" className="mb-30">Beyond the media</Badge>
        <div class="title">
          <Title
            level={2}
            color="dark"
            weight={400}
            align="center"
            maxWidth={530}
            size={32}
            className="mb-40"
          >
            Designed for media, but works for any real-time data needing
            efficient distribution
          </Title>
        </div>

        <ul
          use:inView={() => {
            visible = true;
          }}
          class="list"
        >
          {#each list as item (item)}
            <li class={["item", visible && "visible"]}>
              <Text
                color="dark"
                weight={500}
                size={13}
                uppercase
                font="lexend-deca"
              >
                {item}
              </Text>
            </li>
          {/each}
        </ul>
        <img src={linesImage} alt="" width={555} height={501} class="lines" />
      </div>
    </Padding>
  </Container>
</Section>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .lines {
    display: none;
  }

  .title {
    display: flex;
    justify-content: center;
  }

  .list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 760px;
    margin: 0 auto;
    justify-content: center;
  }

  .item {
    background: hsla(37, 75%, 67%, 0.08);
    border: 1px solid hsla(37, 75%, 67%, 0.4);
    padding: 8px 10px;
    border-radius: 30px;
    opacity: 0.01;
    transform: scale(0.8);

    &.visible {
      animation: popIn 0.2s ease-in-out forwards;
    }

    &:nth-child(even) {
      animation-delay: 0.1s;
    }

    &:nth-child(odd) {
      animation-delay: 0.2s;
    }
  }

  @keyframes popIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (min-width: 768px) {
    .item {
      padding: 10px 15px;
    }
  }

  @media (min-width: 960px) {
    .item {
      padding: 16px 30px;
    }

    .lines {
      display: block;
      position: absolute;
      bottom: 10px;
      right: -185px;
      z-index: -1;
    }
  }
</style>

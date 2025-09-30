<script lang="ts">
  import Button from "$lib/Button.svelte";
  import Container from "$lib/Container.svelte";
  import Dot from "$lib/Dot.svelte";
  import Text from "$lib/Text.svelte";
  import Title from "$lib/Title.svelte";

  import headerImage from "$images/header-bg.jpg?enhanced";
  import Parallax from "$lib/Parallax.svelte";
  import Planet from "$lib/Planet.svelte";
  import { external, getInternalHref } from "$lib/utils/routes";
  import Padding from "$lib/Padding.svelte";

  const list = ["Ingest", "Relay", "Playback"];
</script>

<Padding
  tag="header"
  top={140}
  bottom={80}
  overflow="hidden"
  position="relative"
>
  <Container relative>
    <Container maxWidth={960}>
      <div class="listWrapper">
        <Parallax zIndex={1} parallaxSpeed={0.2}>
          <ul class="list">
            {#each list as item, index (item)}
              <li class="item">
                {#if index > 0}<Dot />{/if}
                <Text
                  tag="span"
                  color="light"
                  size={13}
                  weight={400}
                  uppercase
                  font="lexend-deca"
                >
                  {item}
                </Text>
              </li>
            {/each}
          </ul>
        </Parallax>
      </div>

      <Title
        level={1}
        color="light"
        size={60}
        weight={400}
        align="center"
        balance
        className="mb-20"
      >
        Building Open-Source MOQ Streaming Software
      </Title>

      <div class="text">
        <Text color="light" size={18} opacity={0.8} align="center" weight={300}>
          The OpenMOQ Software Consortium, initiated by industry leaders, is
          focused on advancing MOQ-based technology through high-performance,
          open-source software. Our mission is to deliver practical software and
          implementations that enable the next generation of media transport.
        </Text>
      </div>

      <Parallax
        zIndex={1}
        parallaxSpeed={0.03}
        parallaxDirection="down"
        boundary={2}
      >
        <div class="buttons">
          <Button href={external.join} withArrow>Join the initiative</Button>
          <Button
            href={getInternalHref("progress")}
            variant="secondary"
            color="light"
          >
            View progress
          </Button>
        </div>
      </Parallax>
    </Container>
    <Parallax
      offset="top"
      top={60}
      left={-5}
      zIndex={-1}
      parallaxSpeed={0.2}
      opacity={0.6}
      boundary={4}
    >
      <Planet size={190} movement={2} />
    </Parallax>
    <Parallax
      offset="top"
      top={55}
      left={85}
      zIndex={-1}
      opacity={0.4}
      parallaxSpeed={0.4}
      boundary={4}
    >
      <Planet size={64} movement={1} />
    </Parallax>
    <Parallax
      offset="top"
      top={0}
      left={105}
      zIndex={-1}
      parallaxSpeed={0.7}
      opacity={0.6}
      boundary={4}
    >
      <Planet size={96} movement={3} />
    </Parallax>
  </Container>

  <enhanced:img src={headerImage} alt="" class="background" />
</Padding>

<style>
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .listWrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  .list {
    padding: 6px 20px;
    border: 1px solid var(--color-border-light);
    margin: 0;
    list-style-type: none;
    display: inline-flex;
    gap: 10px;
    border-radius: 20px;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .text {
    max-width: 600px;
    margin: 0 auto 30px;
  }

  .buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .header {
      padding: 135px 0 80px;
    }

    .listWrapper {
      margin-bottom: 50px;
    }

    .text {
      margin: 0 auto 60px;
    }
  }

  @media (min-width: 960px) {
    .listWrapper {
      margin-bottom: 75px;
    }
  }
</style>

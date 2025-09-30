<script lang="ts">
  import Container from "$lib/Container.svelte";
  import Section from "$lib/Section.svelte";
  import Text from "$lib/Text.svelte";
  import Title from "$lib/Title.svelte";

  import dotsImage from "$images/dots.svg";
  import GridList from "$lib/GridList.svelte";
  import GridListItem from "$lib/GridListItem.svelte";
  import Subtitle from "$lib/Subtitle.svelte";
  import Padding from "$lib/Padding.svelte";

  const benefits = [
    {
      title: "Tunable Latency Regimes",
      description:
        "From real-time to sub-second to VOD (any-latency streaming), even with a single media publisher",
    },
    {
      title: "Broadcast Scale",
      description: "Supports delivery across millions of sessions",
    },
    {
      title: "High Performance & Reliability",
      description: "Built by companies who run infrastructure at scale",
    },
    {
      title: "Robust Architecture",
      description: "Clean, maintainable, and flexible by design",
    },
    {
      title: "Open-Source Foundation",
      description: "What we build may be freely used by the industry",
    },
    {
      title: "Integrated Signaling",
      description:
        "Simplified and versatile configurations for greater reliability and ease of deployment",
    },
  ];
</script>

<Section background="light" overflow>
  <Container>
    <Padding tag="div" top={100} bottom={100} position="relative">
      <img src={dotsImage} alt="" width={812} height={409} class="dots" />
      <Title
        level={2}
        color="dark"
        size={40}
        weight={500}
        className="mb-20"
        maxWidth={450}
      >
        MOQ is designed for tunable latency regimes
      </Title>
      <Text
        color="dark"
        size={16}
        weight={400}
        opacity={0.6}
        className="mb-80"
        maxWidth={450}
      >
        From real-time interactive experiences to sub-second live streaming to
        on-demand playback.
      </Text>

      <Subtitle level={3}>Key benefits of using MOQ</Subtitle>

      <GridList columns={3}>
        {#each benefits as benefit (benefit.title)}
          <GridListItem color="light">
            <Text
              tag="strong"
              color="dark"
              font="lexend"
              size={18}
              weight={500}
              className="mb-10"
            >
              {benefit.title}
            </Text>
            <Text color="dark" size={16} weight={400} opacity={0.6}>
              {benefit.description}
            </Text>
          </GridListItem>
        {/each}
      </GridList>
    </Padding>
  </Container>
</Section>

<style>
  .dots {
    position: absolute;
    top: 0;
    left: 50%;
  }
</style>

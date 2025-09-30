<script lang="ts">
  import Badge from "$lib/Badge.svelte";
  import Container from "$lib/Container.svelte";
  import GridList from "$lib/GridList.svelte";
  import GridListItem from "$lib/GridListItem.svelte";
  import Section from "$lib/Section.svelte";
  import Subtitle from "$lib/Subtitle.svelte";
  import Text from "$lib/Text.svelte";
  import Title from "$lib/Title.svelte";

  const foundationData = [
    {
      title: "QUIC protocol",
      description:
        "Native security, multiplexing, partial reliability, and improved performance",
    },
    {
      title: "WebTransport",
      description: "Browser compatibility",
    },
    {
      title: "Independent streams",
      description: "Prevent head-of-line blocking",
    },
    {
      title: "Connection migration",
      description: "Mobile resilience",
    },
  ];

  const smartMediaData = [
    "Pub/sub model for efficient distribution",
    "Fine-grained prioritization",
    "Adaptive quality based on network conditions",
    "Support for interactive and live content",
  ];
</script>

<Section background="white" id="technology">
  <Container>
    <div class="header">
      <div>
        <div class="badge">
          <Badge color="dark" className="mb-30">What is MOQ?</Badge>
        </div>
        <Title
          level={2}
          color="dark"
          size={40}
          weight={400}
          className="mb-10"
          maxWidth={530}
          align="center"
        >
          MOQ: Balancing Latency, Scale & Complexity
        </Title>
        <Text
          color="secondary-accent"
          weight={400}
          size={13}
          uppercase
          font="lexend-deca"
          align="center"
        >
          Tunable Latency Regimes + Broadcast Scale + Robust Architecture
        </Text>
      </div>
      <div>
        <Text
          color="dark"
          size={16}
          weight={400}
          opacity={0.8}
          className="mb-20"
        >
          MOQ is the next evolution in streaming protocols, designed for modern
          live, real-time, and on-demand applications.
        </Text>
        <Text
          color="dark"
          size={16}
          weight={400}
          opacity={0.8}
          className="mb-20"
        >
          It provides a foundation that unifies low-latency interactivity with
          scalability and flexibility, supporting both live and non-real-time
          scenarios such as caching, time-shifted playback, and VOD.
        </Text>
        <Text color="dark" size={16} weight={400} opacity={0.8}>
          MOQ is built to balance the trade-offs between latency, scale, and
          complexity without forcing compromises.
        </Text>
      </div>
    </div>
    <div class="section">
      <Subtitle level={3}>Modern Foundations</Subtitle>
      <GridList columns={4}>
        {#each foundationData as item (item.title)}
          <GridListItem color="light">
            <Text
              tag="strong"
              color="dark"
              size={18}
              weight={500}
              className="mb-10"
              font="lexend"
            >
              {item.title}
            </Text>
            <Text color="dark" size={16} weight={400} opacity={0.6}>
              {item.description}
            </Text>
          </GridListItem>
        {/each}
      </GridList>
    </div>
    <div>
      <Subtitle level={3}>Smart Media Delivery</Subtitle>
      <GridList columns={4}>
        {#each smartMediaData as item (item)}
          <GridListItem color="light">
            <Text
              tag="strong"
              color="dark"
              size={18}
              weight={500}
              font="lexend"
            >
              {item}
            </Text>
          </GridListItem>
        {/each}
      </GridList>
    </div>
  </Container>
</Section>

<style>
  .badge {
    display: flex;
    justify-content: center;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-top: 50px;
    max-width: 620px;
    margin: 0 auto 40px;
  }

  .section {
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    .header {
      padding-top: 70px;
      margin-bottom: 80px;
      gap: 40px;
    }

    .section {
      margin-bottom: 60px;
    }
  }
</style>

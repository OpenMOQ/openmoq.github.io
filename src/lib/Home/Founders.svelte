<script lang="ts">
  import Container from "$lib/Container.svelte";
  import Section from "$lib/Section.svelte";
  import Text from "$lib/Text.svelte";
  import Title from "$lib/Title.svelte";
  import Badge from "$lib/Badge.svelte";
  import Parallax from "$lib/Parallax.svelte";
  import Planet from "$lib/Planet.svelte";
  import Testimonials from "$lib/Testimonials.svelte";

  import gwendalSimonImage from "$images/gwendal-simon.jpg?enhanced";
  import michalHosnaImage from "$images/michal-hosna.jpg?enhanced";
  import willLawImage from "$images/will-law.jpg?enhanced";
  import cullenJenningsImage from "$images/cullen-jennings.jpg?enhanced";
  import seanMcCarthyImage from "$images/sean-mccarthy.jpg?enhanced";

  import akamaiLogo from "$logos/akamai.svg";
  import cdn77Logo from "$logos/cdn77.svg";
  import ciscoLogo from "$logos/cisco.svg";
  import synamediaLogo from "$logos/synamedia.svg";
  import youtubeLogo from "$logos/youtube.svg";
  import Padding from "$lib/Padding.svelte";

  const list = [
    {
      photo: willLawImage,
      quote:
        "OpenMOQ represents the future of collaborative infrastructure development.",
      name: "Will Law",
      company: "Akamai",
      logo: { src: akamaiLogo, width: 99, height: 40 },
    },
    {
      photo: michalHosnaImage,
      quote:
        "With OpenMOQ, we are building the foundation for next-generation streaming.",
      name: "Michal Hosna",
      company: "CDN77",
      logo: { src: cdn77Logo, width: 120, height: 35 },
    },
    {
      photo: cullenJenningsImage,
      quote:
        "OpenMOQ will help accelerate building and deploying technologies that reduce latency. This will improve user experiences.",
      name: "Cullen Jennings",
      company: "Cisco",
      logo: { src: ciscoLogo, width: 77, height: 40 },
    },
    {
      photo: gwendalSimonImage,
      quote:
        "With OpenMOQ we have the opportunity to design a solid and efficient reference implementation, applying careful architecture so MOQ can serve both professional distribution and large-scale direct delivery.",
      name: "Gwendal Simon",
      company: "Synamedia",
      logo: { src: synamediaLogo, width: 179, height: 40 },
    },
    {
      photo: seanMcCarthyImage,
      quote:
        "OpenMoQ will be instrumental in tackling the streaming latency and scale challenge, benefiting both content providers and viewers globally.",
      name: "Sean McCarthy",
      company: "YouTube",
      logo: { src: youtubeLogo, width: 120, height: 35 },
    },
  ].sort((a, b) => a.company.localeCompare(b.company));
</script>

<Section background="dark-gradient" id="members" overflow>
  <Container>
    <Padding tag="div" top={100} bottom={80} position="relative">
      <Parallax left={-7} top={8} opacity={0.6} zIndex={-1} parallaxSpeed={0.1}>
        <Planet size={135} movement={2} />
      </Parallax>
      <Badge color="light" className="mb-60">Who's behind the initiative</Badge>
      <Title
        level={2}
        color="light"
        size={32}
        weight={400}
        className="mb-20"
        maxWidth={600}
      >
        OpenMOQ brings competing companies together to define a new standard for
        real-time media transport
      </Title>

      <Text
        color="light"
        size={16}
        weight={400}
        opacity={0.8}
        className="mb-40"
        maxWidth={600}
      >
        We collaborate on the underlying protocol, while continuing to
        differentiate through our products and services.
      </Text>

      <Text
        color="light"
        size={16}
        weight={400}
        opacity={0.8}
        className="mb-10"
      >
        The following companies have expressed an interest in being founding
        members
      </Text>

      <ul class="list mb-80">
        {#each list as item}
          <li class="item">
            <Text tag="strong" color="light" size={18} weight={500}>
              {item.company}
            </Text>
          </li>
        {/each}
      </ul>

      <div class="section">
        <Testimonials title="Supported by industry leaders" {list} />
      </div>
    </Padding>
  </Container>
</Section>

<style>
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 5px 20px;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
</style>

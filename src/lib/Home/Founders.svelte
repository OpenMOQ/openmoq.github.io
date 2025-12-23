<script lang="ts">
  import Container from "$lib/Container.svelte";
  import Section from "$lib/Section.svelte";
  import Text from "$lib/Text.svelte";
  import Title from "$lib/Title.svelte";
  import Badge from "$lib/Badge.svelte";
  import Parallax from "$lib/Parallax.svelte";
  import Planet from "$lib/Planet.svelte";
  import Testimonials from "$lib/Testimonials.svelte";

  import akamaiLogo from "$logos/akamai.svg";
  import cdn77Logo from "$logos/cdn77.svg";
  import red5Logo from "$logos/red5.svg";
  import Padding from "$lib/Padding.svelte";
  import qualabsLogo from "$logos/qualabs.svg";
  import vindralLogo from "$logos/vindral.svg";
  import klagenfurtLogo from "$logos/klagenfurt.svg";
  import synamediaLogo from "$logos/synamedia.svg";
  import MembersSection from "$lib/MembersSection.svelte";
  import bitmovinLogo from "$logos/bitmovin.svg";
  import ozyeginUniversityLogo from "$logos/ozyegin-university.svg";

  const charterMembers = [
    {
      name: "Akamai",
      href: "https://www.akamai.com",
      src: akamaiLogo,
      width: 99,
      height: 40,
    },
    {
      name: "CDN77",
      href: "https://www.cdn77.com",
      src: cdn77Logo,
      width: 120,
      height: 35,
    },
    {
      name: "RED5",
      href: "https://www.red5.net",
      src: red5Logo,
      width: 100,
      height: 30,
    },
    {
      name: "Synamedia",
      href: "https://www.synamedia.com",
      src: synamediaLogo,
      width: 150,
      height: 38,
    },
  ];

  const standardMembers = [
    {
      name: "Bitmovin",
      href: "https://bitmovin.com",
      src: bitmovinLogo,
      width: 183,
      height: 40,
    },
    {
      name: "Qualabs",
      href: "https://qualabs.com",
      src: qualabsLogo,
      width: 139,
      height: 30,
    },
    {
      name: "Vindral",
      href: "https://vindral.com",
      src: vindralLogo,
      width: 146,
      height: 30,
    },
  ];

  const academicMembers = [
    {
      name: "Klagenfurt",
      href: "https://www.aau.at",
      src: klagenfurtLogo,
      width: 164,
      height: 60,
    },
    {
      name: "Ozyegin University",
      href: "https://www.ozyegin.edu.tr/en",
      src: ozyeginUniversityLogo,
      width: 140,
      height: 42,
    },
  ];
</script>

<Section background="dark-gradient" id="members" overflow>
  <Container>
    <Padding tag="div" top={100} bottom={80} position="relative">
      <div class="center">
        <Parallax
          left={-7}
          top={8}
          opacity={0.6}
          zIndex={-1}
          parallaxSpeed={0.1}
        >
          <Planet size={135} movement={2} />
        </Parallax>
        <Badge color="light" className="mb-60">
          Who's behind the initiative
        </Badge>
        <Title
          level={2}
          color="light"
          size={40}
          weight={400}
          className="mb-20"
          maxWidth={780}
          align="center"
        >
          OpenMOQ brings competing companies together to define a new standard
          for real-time media transport
        </Title>

        <Text
          color="light"
          size={16}
          weight={400}
          opacity={0.8}
          className="mb-100"
          maxWidth={550}
          align="center"
        >
          We collaborate on the underlying protocol, while continuing to
          differentiate through our products and services.
        </Text>
      </div>

      <div class="members">
        <MembersSection title="Charter members" members={charterMembers} />
        <MembersSection title="Standard members" members={standardMembers} />
        <MembersSection title="Academic members" members={academicMembers} />
      </div>

      <div class="section">
        <Testimonials title="Supported by industry leaders" />
      </div>
    </Padding>
  </Container>
</Section>

<style>
  .members {
    margin-bottom: 150px;
    display: flex;
    flex-direction: column;
    gap: 55px;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<script lang="ts">
  import LinesSection from "$lib/LinesSection.svelte";
  import Padding from "$lib/Padding.svelte";
  import Text from "$lib/Text.svelte";
  import Title from "$lib/Title.svelte";
  import ContactBoxes from "./ContactBoxes.svelte";
</script>

<LinesSection background="dark">
  <Padding tag="div" top={200} bottom={200}>
    <Title
      level={1}
      color="light"
      size={60}
      weight={400}
      className="mb-20"
      align="center"
      maxWidth={500}
      centered
    >
      Get in touch with OpenMOQ
    </Title>
    <Text
      color="light"
      size={18}
      weight={400}
      align="center"
      className="mb-120"
      maxWidth={550}
      opacity={0.8}
      centered
    >
      We’re here to answer your questions, explore collaboration, and share
      updates on our work.
    </Text>

    <ContactBoxes />
  </Padding>
</LinesSection>

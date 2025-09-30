<script lang="ts">
  import Title from "$lib/Title.svelte";
  import { Icon } from "svelte-icon";

  import anchorIcon from "$icons/anchor.svg?raw";
  import Text from "$lib/Text.svelte";

  const data = [
    {
      title: "General support",
      text: "For questions about OpenMOQ or help with resources.",
      link: "support@openmoq.org",
    },
    {
      title: "Membership & partnerships",
      text: "Interested in joining or collaborating with OpenMOQ? Let’s talk.",
      link: "membership@openmoq.org",
    },
    {
      title: "Media requests",
      text: "For interviews, press inquiries, or official statements.",
      link: "director@openmoq.org",
    },
  ];
</script>

<ul class="boxes">
  {#each data as item (item.title)}
    <li class="box">
      <Title level={3} size={20} weight={400} color="light" className="mb-10">
        {item.title}
      </Title>

      <Text
        color="light"
        size={15}
        opacity={0.8}
        maxWidth={300}
        className="mb-20"
      >
        {item.text}
      </Text>

      <div class="link">
        <Icon data={anchorIcon} stroke="none" size="10" fill="currentColor" />
        <a href={`mailto:${item.link}`}>{item.link}</a>
      </div>
    </li>
  {/each}
</ul>

<style>
  .boxes {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0;
    margin: 0 auto;
    list-style-type: none;
    max-width: 80vw;
  }

  .link {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
  }

  @media (min-width: 768px) {
    .boxes {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 960px) {
    .boxes {
      grid-template-columns: repeat(3, 1fr);
      max-width: none;
    }
  }
</style>

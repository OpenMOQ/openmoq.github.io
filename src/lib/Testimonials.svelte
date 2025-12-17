<script lang="ts">
  import Dot from "./Dot.svelte";
  import Text from "./Text.svelte";
  import Title from "./Title.svelte";
  import Carousel from "./Carousel.svelte";
  import CarouselSlide from "./CarouselSlide.svelte";

  import gwendalSimonImage from "$images/gwendal-simon.jpg?enhanced";
  import michalHosnaImage from "$images/michal-hosna.jpg?enhanced";
  import willLawImage from "$images/will-law.jpg?enhanced";
  import cullenJenningsImage from "$images/cullen-jennings.jpg?enhanced";
  import seanMcCarthyImage from "$images/sean-mccarthy.jpg?enhanced";

  interface Props {
    title: string;
  }

  let { title }: Props = $props();

  const list = [
    {
      photo: willLawImage,
      quote:
        "OpenMOQ represents the future of collaborative infrastructure development.",
      name: "Will Law",
      company: "Akamai",
    },
    {
      photo: michalHosnaImage,
      quote:
        "With OpenMOQ, we are building the foundation for next-generation streaming.",
      name: "Michal Hosna",
      company: "CDN77",
    },
    {
      photo: cullenJenningsImage,
      quote:
        "OpenMOQ will help accelerate building and deploying technologies that reduce latency. This will improve user experiences.",
      name: "Cullen Jennings",
      company: "Cisco",
    },
    {
      photo: gwendalSimonImage,
      quote:
        "With OpenMOQ we have the opportunity to design a solid and efficient reference implementation, applying careful architecture so MOQ can serve both professional distribution and large-scale direct delivery.",
      name: "Gwendal Simon",
      company: "Synamedia",
    },
    {
      photo: seanMcCarthyImage,
      quote:
        "OpenMoQ will be instrumental in tackling the streaming latency and scale challenge, benefiting both content providers and viewers globally.",
      name: "Sean McCarthy",
      company: "YouTube",
    },
  ].sort((a, b) => a.company.localeCompare(b.company));
</script>

<Title level={3} color="light" size={20} weight={500} className="mb-30">
  <span class="title">
    <Dot />
    {title}
  </span>
</Title>

<Carousel>
  {#each list as item (item.name)}
    <CarouselSlide>
      <div class="item">
        {#if item.photo}
          <enhanced:img src={item.photo} alt="Will Law, Akamai" class="photo" />
        {/if}
        <figure class="figure">
          <Text tag="blockquote" color="light" size={15} weight={400}>
            “{item.quote}”
          </Text>
          <figcaption class="figcaption">
            <Dot />
            <Text tag="span" size={13} color="accent" uppercase>
              {item.name}, {item.company}
            </Text>
          </figcaption>
        </figure>
      </div>
    </CarouselSlide>
  {/each}
</Carousel>

<style>
  .item {
    height: 100%;
    border-radius: 20px 0 0 0;
    overflow: hidden;
    border: 1px solid var(--color-lines-light);
    border-bottom: none;
    border-right: none;
    display: flex;
    gap: 20px;

    &:hover {
      .photo {
        opacity: 1;
      }

      .figure {
        opacity: 1;
      }
    }
  }

  :global(.is-snapped) {
    .photo {
      opacity: 1;
    }

    .figure {
      opacity: 1;
    }
  }

  .figure {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    padding: 10px 0;
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }

  .photo {
    width: 80px;
    height: 95px;
    opacity: 0.6;
    transition: all 0.2s ease-in-out;
    display: block;
  }

  .figcaption {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (min-width: 768px) {
    .item {
      gap: 20px;
    }

    .figure {
      padding: 20px 0;
      gap: 20px;
    }

    .photo {
      width: 110px;
      height: 130px;
    }
  }

  @media (min-width: 960px) {
    .photo {
      width: 220px;
      height: 260px;
    }

    .figure {
      padding: 5px 0;
      gap: 40px;
      justify-content: center;
    }

    .item {
      gap: 40px;
    }
  }
</style>

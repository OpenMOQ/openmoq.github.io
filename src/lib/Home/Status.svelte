<script lang="ts">
  import Container from "$lib/Container.svelte";
  import Section from "$lib/Section.svelte";
  import Roadmap from "$lib/Roadmap.svelte";
  import Title from "$lib/Title.svelte";

  import linesImage from "$images/lines-2.svg";
  import Padding from "$lib/Padding.svelte";
  import Parallax from "$lib/Parallax.svelte";

  const roadmap = [
    {
      // date: '2025/9',
      title: "Talks & Alignment",
      description: "Industry discussions completed",
      state: "completed",
    },
    {
      // date: '2025/9',
      title: "Plan Agreed",
      description: "Technical roadmap and collaboration framework established",
      state: "completed",
    },
    {
      // date: '2025/9',
      title: "Company setup",
      description: "Legal structure & governance in progress",
      state: "completed",
    },
    {
      title: "MVP Components",
      description: "Core infrastructure development upcoming",
    },
  ] as const;
</script>

<Section id="progress" background="dark-lighter">
  <Container>
    <Padding tag="div" top={80} bottom={80} position="relative">
      <div class="wrapper">
        <div>
          <Parallax
            zIndex={1}
            parallaxSpeed={0.05}
            parallaxDirection="up"
            boundary={2}
          >
            <Title
              level={2}
              color="light"
              size={40}
              weight={500}
              maxWidth={400}
            >
              Development Status & Roadmap
            </Title>
          </Parallax>

          <!-- <Text color="light" size={16} weight={400} maxWidth={360}>
					Find us on <a href="#" class="link">GitHub</a> for technical discussions and contributions.
				</Text> -->
        </div>

        <Roadmap items={roadmap} />
        <img src={linesImage} alt="" width={706} height={468} class="lines" />
      </div>
    </Padding>
  </Container>
</Section>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  /* .link {
		text-decoration: underline;
		text-underline-offset: 3px;
		text-decoration-thickness: 1px;
		color: var(--color-yellow);

		&:hover,
		&:focus {
			text-decoration: none;
		}
	} */

  .lines {
    display: none;
  }

  @media (min-width: 768px) {
    .wrapper {
      flex-direction: row;
      justify-content: space-between;
    }

    .lines {
      display: block;
      position: absolute;
      bottom: 0;
      left: -145px;
      object-fit: contain;
      object-position: center;
      opacity: 0.2;
    }
  }
</style>

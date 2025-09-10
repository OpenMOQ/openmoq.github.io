<script lang="ts">
  // import { Icon } from 'svelte-icon';

  import Button from "./Button.svelte";
  import Container from "./Container.svelte";
  import Divider from "./Divider.svelte";
  import List from "./List.svelte";
  import Text from "./Text.svelte";
  import Title from "./Title.svelte";
  import { external } from "./utils/routes";

  // import githubIcon from '$icons/github.svg?raw';
</script>

<footer class="footer">
  <Container sideLines="dark" lines="double">
    <div class="row">
      <div class="column">
        <div class="content">
          <Title level={3} color="dark" size={20} weight={500} className="mb-20"
            >Get involved</Title
          >
          <Text
            color="dark"
            tag="p"
            size={14}
            weight={400}
            opacity={0.8}
            className="mb-6"
          >
            Become an organizational member:
          </Text>

          <div class="list">
            <List
              data={[
                "Participate in the Steering Committee",
                "Contribute engineering resources",
                "Define roadmap and priorities",
              ]}
            />
          </div>

          <div class="buttons">
            <Button href={external.join} withArrow>Join the initiative</Button>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="content">
          <Title
            level={3}
            color="dark"
            size={20}
            weight={500}
            className="mb-20"
          >
            Stay informed
          </Title>
          <Text
            color="dark"
            tag="p"
            size={14}
            weight={400}
            opacity={0.8}
            className="mb-6"
          >
            Sign up to get email updates about:
          </Text>

          <div class="list">
            <List
              data={[
                "Technical milestones and releases",
                "Community events and workshops",
                "Contribution opportunities",
              ]}
            />
          </div>
          <div class="buttons">
            <Button href={external.join} withArrow>Send me updates</Button>
            <!-- <Button href="#" variant="secondary" color="dark">
							<span class="buttonContent">
								<Icon data={githubIcon} stroke="none" size="16" />
								<span>Follow on Github</span>
							</span>
						</Button> -->
          </div>
        </div>
      </div>
    </div>
  </Container>

  <Divider color="dark" />

  <Container sideLines="dark">
    <div class="empty"></div>
  </Container>
</footer>

<style>
  .footer {
    background: white;
  }

  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    gap: 50px;
  }

  .column {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0;
  }

  .content {
    width: 100%;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .list {
    margin-bottom: 30px;
  }

  .empty {
    height: 60px;
  }

  @media (min-width: 375px) {
    .content {
      max-width: 80vw;
    }
  }

  @media (min-width: 768px) {
    .footer {
      position: relative;

      &:before {
        content: "";
        position: absolute;
        border: none;
        background: var(--color-lines-dark);
        width: 100%;
        height: 1px;
        top: 35px;
      }
    }

    .row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0;
    }

    .content {
      width: auto;
    }

    .column {
      padding: 90px 0 70px;
      border-right: 1px solid var(--color-lines-dark);

      &:last-child {
        border-right: none;
      }
    }
  }
</style>

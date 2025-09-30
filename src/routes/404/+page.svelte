<script>
  import { Icon } from "svelte-icon";

  import Button from "$lib/Button.svelte";
  import Text from "$lib/Text.svelte";
  import Title from "$lib/Title.svelte";

  import anchorIcon from "$icons/anchor.svg?raw";
  import dotsImage from "$images/dots-2.svg";
  import { resolve } from "$app/paths";
  import Meta from "$lib/Meta.svelte";
</script>

<Meta title="Page not found" />

<div class="wrapper">
  <Title
    level={1}
    color="light"
    size={60}
    weight={500}
    className="mb-40"
    align="center"
  >
    404
  </Title>
  <Text color="light" size={16} weight={400} className="mb-40" align="center">
    The page you are looking for doesn’t exist or has been moved.
  </Text>
  <Button href={resolve("/")}>
    <span class="buttonContent">
      <span class="icon"
        ><Icon data={anchorIcon} class="arrow" stroke="none" size="10" /></span
      >
      Back to homepage
    </span>
  </Button>

  <img src={dotsImage} alt="Error" class="dots" width={812} height={833} />
</div>

<style>
  .wrapper {
    height: 800px;
    margin: 0 auto;
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  .buttonContent {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .icon {
    transform: rotate(180deg);
    display: flex;
  }

  .dots {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
</style>

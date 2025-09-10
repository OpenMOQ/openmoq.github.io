<script lang="ts">
  import { page } from "$app/state";

  import ogImage from "$assets/og.png";

  interface Props {
    title?: string;
    description?: string;
  }

  let { title, description }: Props = $props();

  let pageTitle = $derived(page?.data?.title || title);
  let pageDescription = $derived(page?.data?.description || description);
</script>

<svelte:head>
  <title>{pageTitle} | Advancing MOQ Protocol</title>
  <meta name="description" content={pageDescription} />
  <meta
    prefix="og: http://ogp.me/ns#"
    property="og:title"
    content={pageTitle}
  />

  <meta property="og:description" content={pageDescription} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:type" content="website" />
</svelte:head>

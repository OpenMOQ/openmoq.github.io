<script lang="ts">
  import Footer from "$lib/Footer.svelte";
  import Meta from "$lib/Meta.svelte";
  import Topbar from "$lib/Topbar.svelte";

  import favicon96x96 from "$assets/favicon-96x96.png";
  import faviconSvg from "$assets/favicon.svg";
  import favicon from "$assets/favicon.ico";
  import appleTouchIcon from "$assets/apple-touch-icon.png";
  import siteWebmanifest from "$assets/site.webmanifest";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={favicon96x96} sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href={faviconSvg} />
  <link rel="shortcut icon" href={favicon} />
  <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
  <meta name="apple-mobile-web-app-title" content="OpenMOQ" />
  <link rel="manifest" href={siteWebmanifest} />
  <link rel="icon" href={favicon} />
</svelte:head>

<Meta
  title="OpenMOQ Software Consortium"
  description="OpenMOQ unites industry leaders to build future-ready, open-source media transport on QUIC and WebTransport, enabling low latency and massive scale."
/>

<div class="layout">
  <Topbar />
  <div class="content">
    {@render children()}
  </div>
  <Footer />
</div>

<style module>
  :root {
    --color-white: hsl(0, 0%, 98%, 1);
    --color-beige: hsl(36, 42%, 95%, 1);
    --color-blue: hsl(243, 57%, 54%, 1);
    --color-blue--darker: hsl(243, 57%, 34%, 1);
    --color-yellow: hsl(37, 75%, 67%, 1);
    --color-darkblue: hsl(251, 37%, 10%, 1);
    --color-darkblue--darker: hsl(254, 73%, 6%, 1);
    --color-gray: hsla(231, 8%, 46%, 1);
    --color-border-light: hsl(0, 0%, 100%, 0.1);
    --color-border-dark: hsl(0, 0%, 85%, 1);

    --color-lines-light: hsl(252, 30%, 14%);
    --color-lines-dark: hsl(260, 25%, 9%, 0.1);
  }

  :global * {
    box-sizing: border-box;
  }

  :global(html),
  :global(body) {
    padding: 0;
    margin: 0;
    font-family: "Lexend", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: var(--color-darkblue--darker);
  }

  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    flex: 1;
  }

  :global {
    a {
      text-decoration: underline;
      text-underline-offset: 3px;
      text-decoration-thickness: 1px;
      color: var(--color-yellow);

      &:hover,
      &:focus {
        text-decoration: none;
      }
    }

    .mb-6 {
      margin-bottom: 4px !important;
    }

    .mb-10 {
      margin-bottom: 5px !important;
    }

    .mb-20 {
      margin-bottom: 15px !important;
    }

    .mb-30 {
      margin-bottom: 15px !important;
    }

    .mb-40 {
      margin-bottom: 20px !important;
    }

    .mb-60 {
      margin-bottom: 30px !important;
    }

    .mb-80 {
      margin-bottom: 40px !important;
    }

    .mb-100 {
      margin-bottom: 50px !important;
    }

    .mb-120 {
      margin-bottom: 60px !important;
    }

    @media (min-width: 768px) {
      .mb-6 {
        margin-bottom: 6px !important;
      }

      .mb-10 {
        margin-bottom: 10px !important;
      }

      .mb-20 {
        margin-bottom: 20px !important;
      }

      .mb-30 {
        margin-bottom: 30px !important;
      }

      .mb-40 {
        margin-bottom: 40px !important;
      }

      .mb-60 {
        margin-bottom: 60px !important;
      }

      .mb-80 {
        margin-bottom: 80px !important;
      }

      .mb-100 {
        margin-bottom: 100px !important;
      }

      .mb-120 {
        margin-bottom: 120px !important;
      }
    }
  }
</style>

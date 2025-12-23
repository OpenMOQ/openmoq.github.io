<script lang="ts">
  import Title from "$lib/Title.svelte";
  import Dot from "$lib/Dot.svelte";
  import GridList from "$lib/GridList.svelte";
  import GridListItem from "$lib/GridListItem.svelte";

  interface Props {
    title: string;
    members: {
      name: string;
      href: string;
      src: string;
      width: number;
      height: number;
    }[];
  }

  let { title, members }: Props = $props();

  const sortedMembers = $derived(
    members.sort((a, b) => a.name.localeCompare(b.name))
  );
</script>

<div>
  <Title level={3} color="light" size={20} weight={500} className="mb-30">
    <span class="title">
      <Dot />
      {title}
    </span>
  </Title>
  <ul class="list">
    {#each sortedMembers as item (item.name)}
      <li class="item">
        <a href={item.href} target="_blank">
          <img
            src={item.src}
            alt={item.name}
            width={item.width}
            height={item.height}
            class="logo"
          />
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .title {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 80px;
    padding: 0;
    border: 1px solid hsl(245, 9%, 25%, 1);
    border-right: none;
    border-bottom: none;
    border-radius: 20px 0 0 0;
    margin: 0;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 80px;
  }

  @media (min-width: 465px) {
    .list {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 120px;
    }
  }

  @media (min-width: 768px) {
    .list {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 960px) {
    .list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

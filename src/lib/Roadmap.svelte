<script lang="ts">
  import { Icon } from "svelte-icon";
  import Text from "./Text.svelte";

  import checkIcon from "$icons/check.svg?raw";
  import dotsIcon from "$icons/dots.svg?raw";

  interface Props {
    items: readonly {
      date?: string;
      title: string;
      description: string;
      state?: "completed" | "in progress";
    }[];
  }

  let { items }: Props = $props();
</script>

<ul class="list">
  {#each items as item, index (item.title)}
    <li class="item">
      <div
        class={[
          "state",
          (item.state === "completed" || item.state === "in progress") &&
            "completed",
        ]}
      >
        {#if item.state}
          <Icon
            data={item.state === "completed" ? checkIcon : dotsIcon}
            stroke="none"
            size="16"
          />
        {/if}
        <div
          class={[
            "line",
            items[index + 1] &&
              (items[index + 1].state === "completed" ||
                items[index + 1].state === "in progress") &&
              "completed",
          ]}
        ></div>
      </div>
      <div class="content">
        <span class="title">
          {#if item.date}
            <span class="date">
              <Text
                tag="span"
                color="light"
                font="lexend-deca"
                size={13}
                weight={500}
              >
                {item.date}
              </Text>
            </span>
          {/if}
          <Text tag="strong" color="light" font="lexend" size={18} weight={500}
            >{item.title}</Text
          >
        </span>
        <Text tag="p" color="light" size={16} weight={400} opacity={0.6}
          >{item.description}</Text
        >
      </div>
    </li>
  {/each}
</ul>

<style>
  .list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .item {
    display: flex;
    gap: 20px;
    padding-bottom: 30px;
    position: relative;

    &:last-child {
      padding-bottom: 0;

      .line {
        display: none;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .date {
    padding: 2px 10px;
    border: 1px solid hsla(0, 0%, 100%, 0.2);
    display: inline-flex;
    border-radius: 20px;
  }

  .state {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid var(--color-gray);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    &.completed {
      background-color: var(--color-yellow);
      border: 1px solid var(--color-yellow);
    }
  }

  .line {
    position: absolute;
    top: 30px;
    left: 15px;
    width: 2px;
    height: calc(100% - 30px);
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.1);

    &.completed {
      background-color: var(--color-yellow);
    }
  }

  @media (min-width: 768px) {
    .item {
      gap: 30px;
      padding-bottom: 60px;
    }
  }
</style>

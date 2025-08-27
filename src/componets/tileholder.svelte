<script>
  const props = $props();

  import { track_mouse } from "./trackmouse.svelte";
  import { elements_positions } from "./componentScreenLocation.svelte";
  let index = props.index;

  let post = $state({});
  let postX = $state(0);
  let postY = $state(0);

  let tile;
  let elementRef;
  export function getRect() {
    return elementRef?.getBoundingClientRect();
  }

  function setPos(dx, dy) {
    let positionX = $derived(`${2 + dx + dx}px`);
    let positionY = $derived(`${2 + dy + dy}px`);
    tile.style.setProperty("--pos-x", positionX);
    tile.style.setProperty("--pos-y", positionY);
  }

  $effect(() => {
    post = elements_positions.updated_elements_positions[index];
    if (tile) {
      setPos(props.posX, props.posY);
    }
    if (post) {
      postX = post.X;
      postY = post.Y;
    }
  });
  $inspect(props.posX);
</script>

<div
  class="tile-container"
  bind:this={tile}
  bind:this={elementRef}
  style=" margin: {props.margin}; rotate:{props.rotate};left: var(--pos-x); top: var(--pos-y);"
>
  <div>
    <slot />
  </div>
</div>

<style>
  .tile-container {
    position: absolute;
    width: min-content;
    height: min-content;
    transition:
      left 0.3s ease,
      top 0.3s ease;
  }
</style>

<script>
  import Icon from "@iconify/svelte";
  import "../../app.css";
  export let icon = "";
</script>

<div class=" opacity-55 z-1">
  <div id="tile_big_2" class="grid place-content-center">
    <Icon style="color:white; width: 33px; height:33px" {icon} />
  </div>
</div>

<style>
  #tile_big {
    width: 80px;
    height: 80px;
    border: 1px solid #adb5bd;
    border-radius: 8px;
  }

  #tile_big_2 {
    width: 80px;
    height: 80px;
    border: none;
    border-radius: 8px;
    background: #adb5bd;
  }
</style>

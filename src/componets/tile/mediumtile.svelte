<script>
  import Icon from "@iconify/svelte";
  import "../../app.css";
  export let icon = "";
</script>

<div class=" opacity-55">
  <div id="tile_small_2" class="grid place-content-center">
    <Icon style="color:white; width: 26px; height:26px" {icon} />
  </div>
</div>

<style>
  #tile_small {
    width: 50px;
    height: 50px;
    border: 1px solid #adb5bd;
    border-radius: 8px;
  }

  #tile_small_2 {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background: #adb5bd;
  }
</style>

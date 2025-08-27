<script>
  import Icon from "@iconify/svelte";
  import "../../app.css";
  export let icon = "";
</script>

<div>
  <div id="tile_big_2">
    <Icon style="color:white; width: 35px; height:35px" {icon} />
  </div>
</div>

<style>
  #tile_big_2 {
    width: 80px;
    height: 80px;
    border: none;
    border-radius: 8px;
    background: #ced4da;
    display: grid;
    place-content: center;
  }
</style>

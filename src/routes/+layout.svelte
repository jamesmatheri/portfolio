<script>
  import "../app.css";
  import Navbar from "../componets/nav_bar/navbar.svelte";
  import Footer from "../componets/footer/footer.svelte";

  let { children } = $props();
</script>

<div>
  <Navbar />

  {@render children()}

  <Footer />
</div>

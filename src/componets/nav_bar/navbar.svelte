<script>
  import logo from "$lib/assets/logo.jpg";
  let visibility = $state({ id: "home" });
</script>

<div
  class="w-full h-24 text-white z-122 fixed flex items-center border-b"
  style="background-color:#ced4da;"
>
  <div class="ml-28 flex items-center">
    <div>
      <div class="flex items-center">
        <div>
          <div>
            <img id="logo" src={logo} alt="portfolio logo" srcset="" />
          </div>
        </div>
        <div>
          <h3 class="ml-3 text-black text-3xl font-bold font-custom">
            James Matheri
          </h3>
        </div>
      </div>
    </div>
    <div class="ml-72">
      <div class="flex gap-6 text-black text-xl font-bold font-custom2">
        <div class="flex flex-row gap-1">
          <a onmouseover={() => (visibility.id = "home")} href="/">
            <h3>Home</h3></a
          >
          <span
            class="{visibility.id === 'home'
              ? 'visible'
              : 'hidden'} text-3xl font-extrabold"
            style="color:#fe5d26;">*</span
          >
        </div>
        <div class="flex flex-row gap-1">
          <a
            onmouseover={() => (visibility.id = "projects")}
            id="projects"
            href="/hire_me"
          >
            <h3>Projects</h3></a
          >
          <span
            class="text-3xl font-extrabold {visibility.id === 'projects'
              ? 'visible'
              : 'hidden'} "
            style="color:#fe5d26; ">*</span
          >
        </div>
        <div class="flex flex-row gap-1">
          <a onmouseover={() => (visibility.id = "hireme")} href="/hire_me">
            <h3>Hire Me</h3></a
          >
          <span
            class="text-3xl font-extrabold {visibility.id === 'hireme'
              ? 'visible'
              : 'hidden'} "
            style="color:#fe5d26; ">*</span
          >
        </div>
      </div>
    </div>
  </div>
</div>

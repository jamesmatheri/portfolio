<script>
  import Icon from "@iconify/svelte";
</script>

<div
  class="h-100 w-full -mt-60 absolute grid place-content-center bg-white-1 top-202"
>
  <div
    id="glass"
    class="h-70 w-300 z-120 grid place-content-center border-0 rounded-4xl"
  >
    <div class="w-300 h-12 mb-3 flex flex-row justify-center">
      <span class="font-bold text-4xl text-white"> Tech Stack</span>
    </div>
    <div class="flex flex-row justify-evenly gap-7">
      <div
        class="h-25 w-25 flex flex-col justify-center items-center bg-white border-3 rounded-2xl"
      >
        <div>
          <Icon
            style="color:white; width: 50px; height:50px"
            icon="devicon:react"
          />
        </div>
        <h1 class="font-lg mt-1">React</h1>
      </div>
      <div
        class="h-25 w-25 flex flex-col justify-center items-center bg-white border-3 rounded-2xl"
      >
        <div>
          <Icon
            style="color:white; width: 50px; height:50px"
            icon="devicon:svelte"
          />
        </div>
        <h1 class="font-lg mt-1">Svelte</h1>
      </div>
      <div
        class="h-25 w-25 flex flex-col justify-center items-center bg-white border-3 rounded-2xl"
      >
        <div>
          <Icon
            style="color:white; width: 50px; height:50px"
            icon="logos:javascript"
          />
        </div>
        <h1 class="font-lg mt-1">JavaScript</h1>
      </div>
      <div
        class="h-25 w-25 flex flex-col justify-center items-center bg-white border-3 rounded-2xl"
      >
        <div>
          <Icon
            style="color:white; width: 50px; height:50px"
            icon="devicon:typescript"
          />
        </div>
        <h1 class="font-lg mt-1">TypeScript</h1>
      </div>
      <div
        class="h-25 w-25 flex flex-col justify-center items-center bg-white border-3 rounded-2xl"
      >
        <div>
          <Icon
            style="color:white; width: 50px; height:50px"
            icon="material-icon-theme:nodejs"
          />
        </div>
        <h1 class="font-lg mt-1">NodeJS</h1>
      </div>
      <div
        class="h-25 w-25 flex flex-col justify-center items-center bg-white border-3 rounded-2xl"
      >
        <div>
          <Icon
            style="color:white; width: 50px; height:50px"
            icon="devicon:mongodb"
          />
        </div>
        <h1 class="font-lg mt-1">MongoDB</h1>
      </div>
      <div
        class="h-25 w-25 flex flex-col justify-center items-center bg-white border-3 rounded-2xl"
      >
        <div>
          <Icon
            style="color:white; width: 50px; height:50px"
            icon="devicon:postgresql"
          />
        </div>
        <h1 class="font-lg mt-1">postgreSQL</h1>
      </div>
    </div>
  </div>
</div>

<style>
  #glass {
    opacity: 0.6;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
  /* #glass {
    background-color: black;
    opacity: 0.4;
    backdrop-filter: blur(20px);
    border: 1px solid white;
  } */
</style>

<script>
  import code_wars_logo from "$lib/assets/icons8-codewars.svg";
  import linkedin_wars_logo from "$lib/assets/icons8-linkedin.svg";
  import whatsup_logo from "$lib/assets/icons8-whatsapp.svg";
  import logo from "$lib/assets/logo.jpg";
</script>

<div class="w-full pt-40">
  <div class="w-full h-screen flex flex-col place-items-center">
    <div id="card">
      <div class="w-full h-full flex flex-row">
        <div class="w-1/4 h-full grid place-content-center">
          <div>
            <img id="logo" src={logo} alt="portfolio logo" srcset="" />
          </div>
        </div>
        <div class="w-3/4 h-full ml-2">
          <div>
            <h2 class="font-bold">James Matheri</h2>
            <p class="font-semi-bold text-grey-1">web Developer</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              amet sapiente eos suscipit
            </p>
            <div class="flex flex-row gap-3 mt-3">
              <a
                class="border borer-grey-800 rounded-md px-2 py-1 flex flex-row gap-1 place-items-center"
                href="https://www.linkedin.com/in/james-matheri/"
                target="_blank"
              >
                <img
                  class="w-8 h-8"
                  src={linkedin_wars_logo}
                  alt="link to my code wars profile"
                />
                <span>Linked In</span>
              </a>
              <a
                class="border borer-grey-800 rounded-md px-2 py-1 flex flex-row gap-1 place-items-center"
                href="https://www.codewars.com/users/jamesmatheri"
                target="_blank"
              >
                <img
                  class="w-8 h-8"
                  src={code_wars_logo}
                  alt="link to my code wars profile"
                />
                <span>Code Wars</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 flex flex-col gap-3">
      <div>
        <p class="text-lg font-medium">
          I'm always up for a chat or a coffee! Feel free to reach out.
        </p>
      </div>
      <div class="ml-24">
        <div>
          <a
            class="px-2 py-1 flex flex-row gap-1 place-items-center"
            href="mailto:matheridev@gmail.com"
          >
            <i class="material-icons"> mail </i>
            <span><strong>matheridev@gmail.com</strong></span>
          </a>
        </div>
        <div>
          <a
            class=" px-2 py-1 flex flex-row gap-1 place-items-center"
            href="https://wa.me/+254798524138"
          >
            <img
              class="w-8 h-8"
              src={whatsup_logo}
              alt="whatsup link"
              srcset=""
            />
            <span><strong>+254798524138</strong></span>
          </a>
        </div>
        <div>
          <a class=" px-2 py-1 flex flex-row gap-1 place-items-center" href="">
            <i class="material-icons"> call </i>
            <span><strong>+254798524138</strong></span>
          </a>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</div>

<!-- https://sumanthsamala.com/contact-me -->

<style>
  #card {
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    width: 400px;

    padding: 30px 15px;
    border: none;
    border-radius: 8px;
    margin-top: 100px;
  }
</style>

<script>
  import { onMount } from "svelte";
  import Tileholder from "../componets/tileholder.svelte";
  import Bigtile from "../componets/tile/bigtile.svelte";
  import Mediumtile from "../componets/tile/mediumtile.svelte";
  import Bignoemojitile from "../componets/tile/bignoemojitile.svelte";
  import Bigbordertile from "../componets/tile/bigbordertile.svelte";
  import Mediumbordertile from "../componets/tile/mediumbordertile.svelte";
  import Mediumnoemojitile from "../componets/tile/mediumnoemojitile.svelte";
  import { track_mouse } from "../componets/trackmouse.svelte";
  import { elements_positions } from "../componets/componentScreenLocation.svelte";
  import Techstack from "../componets/techstack/techstack.svelte";
  import Contact from "../componets/contact/contact.svelte";

  const skills = [
    "JavaScript",
    "React",
    "Svelte",
    "Node.js",
    "MongoDB",
    "postgreSQL",
    "Webpack",
    "Relational Database Design",
  ];

  let typedElement;
  let currentIndex = 0;
  let typingInterval = null;

  function displaySkills(arr) {
    const combinedString = arr.join(" | ");
    if (typingInterval) clearInterval(typingInterval);

    currentIndex = 0;
    typedElement.textContent = "";

    typingInterval = setInterval(() => {
      typedElement.textContent = combinedString.substring(0, currentIndex + 1);
      currentIndex++;

      if (currentIndex === combinedString.length) {
        clearInterval(typingInterval);

        setTimeout(() => {
          currentIndex = 0;
          displaySkills(arr);
        }, 2000);
      }
    }, 50);
  }
  let elements = [];

  const getPosition = (el, index) => {
    const rect = el.getRect();
    elements_positions.update(rect, index);
  };

  function updateComponentPosition(el) {
    el.forEach((element, index) => {
      getPosition(element, index);
    });
  }

  onMount(() => {
    displaySkills(skills);
  });
  //onmouseup={updateComponentPosition(elements)}
</script>

<main
  class="w-full h-screen grid place-items-center relative overflow-hidden"
  onmousemove={(e) => {
    track_mouse.update(e);
  }}
>
  <div class="w-full min-h-screen absolute z-10">
    <Tileholder
      bind:this={elements[1]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="10% 8%"
      rotate="25deg"><Mediumbordertile /></Tileholder
    >
    <Tileholder
      bind:this={elements[2]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="18% 50%"
      rotate="25deg"
      ><Mediumbordertile />
    </Tileholder>
    <Tileholder
      bind:this={elements[3]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="29% 60%"
      rotate="25deg"><Mediumbordertile /></Tileholder
    >
    <Tileholder
      bind:this={elements[4]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="15% 80%"
      rotate="25deg"><Mediumbordertile /></Tileholder
    >
  </div>
  <div class="w-full min-h-screen absolute z-20">
    <Tileholder
      bind:this={elements[5]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="7% 70%"
      rotate="65deg"><Mediumnoemojitile /></Tileholder
    >
    <Tileholder
      bind:this={elements[6]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="11% 50%"
      rotate="25deg"><Mediumnoemojitile /></Tileholder
    >

    <Tileholder
      bind:this={elements[7]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="23% 10%"
      rotate="25deg"><Mediumnoemojitile /></Tileholder
    >
    <Tileholder
      bind:this={elements[8]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="27% 23%"
      rotate="-35deg"><Mediumnoemojitile /></Tileholder
    >
    <Tileholder
      bind:this={elements[9]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="21% 65%"
      rotate="20deg"><Mediumnoemojitile /></Tileholder
    >
    <Tileholder
      bind:this={elements[10]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="2% 12%"
      rotate="20deg"><Mediumnoemojitile /></Tileholder
    >
  </div>
  <div class="w-full min-h-screen absolute z-30">
    <Tileholder
      bind:this={elements[11]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="10% 14%"
      rotate="-75deg"><Mediumtile icon="grommet-icons:node" /></Tileholder
    >
    <Tileholder
      bind:this={elements[12]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="11% 30%"
      rotate="25deg"><Mediumtile icon="proicons:svelte" /></Tileholder
    >
    <Tileholder
      bind:this={elements[13]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="27% 50%"
      rotate="-25deg"><Mediumtile icon="akar-icons:react-fill" /></Tileholder
    >
    <Tileholder
      bind:this={elements[14]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="30% 30%"
      rotate="25deg"><Mediumtile icon="ant-design:java-outlined" /></Tileholder
    >
    <Tileholder
      bind:this={elements[15]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="20% 80%"
      rotate="25deg"><Mediumtile icon="ph:atom-thin" /></Tileholder
    >
    <Tileholder
      bind:this={elements[16]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="15% 90%"
      rotate="-75deg"><Mediumtile icon="akar-icons:nextjs-fill" /></Tileholder
    >
    <Tileholder
      bind:this={elements[17]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="15% 63%"
      rotate="-35deg"><Mediumtile icon="devicon-plain:nuxtjs" /></Tileholder
    >
  </div>
  <div class="w-full top-0 min-h-9/12 absolute z-50">
    <Tileholder
      bind:this={elements[18]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="5% 80%"
      rotate="25deg"><Bigtile icon="fa6-brands:node" /></Tileholder
    >
    <Tileholder
      bind:this={elements[19]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="4% 38%"
      rotate="45deg"><Bigtile icon="ri:php-fill" /></Tileholder
    >
    <Tileholder
      bind:this={elements[20]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="30% 8%"
      rotate="-45deg"><Bigtile icon="devicon:java" /></Tileholder
    >
  </div>
  <div class="w-full top-0 min-h-9/12 absolute z-70">
    <Tileholder
      bind:this={elements[21]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="30% 80%"
      rotate="-25deg"><Bignoemojitile icon="simple-icons:go" /></Tileholder
    >
    <Tileholder
      bind:this={elements[22]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="25% 35%"
      rotate="-25deg"><Bignoemojitile icon="cib:rust" /></Tileholder
    >
    <Tileholder
      bind:this={elements[23]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="5% 18%"
      rotate="-45deg"
      ><Bignoemojitile icon="material-icon-theme:go" /></Tileholder
    >
    <Tileholder
      bind:this={elements[24]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="8% 60%"
      rotate="-35deg"
      ><Bignoemojitile icon="material-icon-theme:go" /></Tileholder
    >
  </div>
  <div class="w-full top-0 min-h-9/12 absolute z-10">
    <Tileholder
      bind:this={elements[25]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="15% 70%"
      rotate="25deg"><Bigbordertile /></Tileholder
    >
    <Tileholder
      bind:this={elements[26]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="37% 23%"
      rotate="-25deg"><Bigbordertile /></Tileholder
    >
    <Tileholder
      bind:this={elements[27]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="20% 41%"
      rotate="-45deg"><Bigbordertile /></Tileholder
    >
    <Tileholder
      bind:this={elements[28]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="3% 51%"
      rotate="-75deg"><Bigbordertile /></Tileholder
    >
    <Tileholder
      bind:this={elements[29]}
      posX={track_mouse.deltaX}
      posY={track_mouse.deltaY}
      margin="3% 5%"
      rotate="-75deg"><Bigbordertile /></Tileholder
    >
  </div>

  <div class="w-full flex items-center ml-28 top-0 h-9/12 absolute z-100">
    <div class="w-8/12 h-96 p-9 flex flex-col justify-center">
      <h1 class="text-5xl font-extrabold">
        James Matheri<strong>
          <span style="color:#4cc9f0;">&nbsp * &nbsp</span>
        </strong>Full-Stack Javascript Developer
      </h1>
      <div class="w-full h-10">
        <h1 class="text-2xl text-print" bind:this={typedElement}></h1>
      </div>
      <div class="-full flex flex-row mt-10 gap-8">
        <a
          class=" border-2 rounded-md font-bold flex flex-row items-center px-4 py-0"
          href="#"
        >
          Resume

          <i class="material-icons" style="font-size:35px;color:black;">
            visibility
          </i>
        </a>
        <a
          class=" border-2 rounded-md font-bold flex flex-row items-center px-4 py-0"
          href="#"
        >
          LinkedIn
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 48 48"
          >
            <path
              fill="#0288D1"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            ></path><path
              fill="#FFF"
              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
            ></path>
          </svg>
        </a>
        <a
          class=" border-2 rounded-md font-bold flex flex-row items-center px-4 py-0"
          href="#"
        >
          <span class="text-md"> Code Wars</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="oMwB8FKdal_w2h6EGYqYCa_Jq3kxPQV5K0C_gr1"
              x1="20.395"
              x2="29.813"
              y1="1.634"
              y2="60.07"
              gradientUnits="userSpaceOnUse"
              ><stop offset="0" stop-color="#f44f5a"></stop><stop
                offset=".443"
                stop-color="#ee3d4a"
              ></stop><stop offset="1" stop-color="#e52030"
              ></stop></linearGradient
            ><path
              fill="url(#oMwB8FKdal_w2h6EGYqYCa_Jq3kxPQV5K0C_gr1)"
              d="M42,10.5v27c0,2.48-2.02,4.5-4.5,4.5h-27C8.02,42,6,39.98,6,37.5v-27C6,8.02,8.02,6,10.5,6h27	C39.98,6,42,8.02,42,10.5z"
            ></path><linearGradient
              id="oMwB8FKdal_w2h6EGYqYCb_Jq3kxPQV5K0C_gr2"
              x1="20.961"
              x2="26.53"
              y1="1.513"
              y2="42.717"
              gradientUnits="userSpaceOnUse"
              ><stop offset="0" stop-color="#4b4b4b"></stop><stop
                offset="1"
                stop-color="#252525"
              ></stop></linearGradient
            ><path
              fill="url(#oMwB8FKdal_w2h6EGYqYCb_Jq3kxPQV5K0C_gr2)"
              d="M35.501,23.257c-0.034-0.062-0.08-0.116-0.116-0.177c0.804-1.675,0.832-3.817-0.09-5.6	c-1.1-2.251-3.596-3.837-6.188-3.812c-0.071-0.001-0.141,0.011-0.211,0.012c-1.049-1.533-2.89-2.628-4.894-2.722	c-2.499-0.173-5.121,1.196-6.395,3.453c-0.036,0.06-0.061,0.127-0.095,0.189c-1.852,0.142-3.721,1.188-4.804,2.878	c-1.399,2.078-1.525,5.033-0.207,7.265c0.034,0.062,0.08,0.116,0.116,0.177c-0.804,1.675-0.832,3.817,0.09,5.6	c1.1,2.251,3.596,3.837,6.188,3.812c0.071,0.001,0.141-0.011,0.211-0.012c1.049,1.533,2.89,2.628,4.894,2.722	c2.499,0.173,5.121-1.196,6.395-3.453c0.036-0.06,0.061-0.127,0.095-0.189c1.852-0.142,3.721-1.188,4.804-2.878	C36.693,28.444,36.819,25.489,35.501,23.257z M33.125,18.733c0.556,0.779,0.882,1.742,0.943,2.773	c-0.398-0.353-0.825-0.673-1.283-0.931c-1.132-0.59-2.422-0.914-3.681-0.825c-1.748,0.065-3.366,0.922-4.445,2.155	c-0.161-0.051-0.325-0.078-0.489-0.09c0.021-1.143,0.36-2.203,0.967-3.053c0.913-1.322,2.439-2.091,3.966-2.103	C30.653,16.622,32.171,17.411,33.125,18.733z M20.193,15.909c0.744-1.36,2.186-2.28,3.807-2.445c0.953-0.092,1.95,0.107,2.873,0.57	c-0.505,0.168-0.995,0.378-1.448,0.646c-1.077,0.685-2.003,1.64-2.555,2.775c-0.819,1.549-0.885,3.382-0.353,4.934	c-0.12,0.11-0.227,0.234-0.322,0.373c-0.981-0.59-1.73-1.414-2.163-2.366C19.343,18.943,19.44,17.238,20.193,15.909z M14.876,18.731	c0.397-0.871,1.067-1.635,1.93-2.203c-0.107,0.521-0.171,1.051-0.165,1.577c0.055,1.276,0.419,2.554,1.126,3.6	c0.931,1.483,2.484,2.456,4.093,2.773c0.036,0.162,0.085,0.321,0.157,0.471c-0.999,0.552-2.085,0.786-3.123,0.686	c-1.602-0.13-3.03-1.067-3.804-2.383C14.284,21.927,14.208,20.218,14.876,18.731z M14.875,29.267	c-0.556-0.779-0.882-1.742-0.943-2.773c0.398,0.353,0.825,0.673,1.283,0.931c1.132,0.59,2.422,0.914,3.681,0.825	c1.748-0.065,3.366-0.922,4.445-2.155c0.161,0.051,0.325,0.078,0.489,0.09c-0.021,1.143-0.36,2.203-0.967,3.053	c-0.913,1.322-2.439,2.091-3.966,2.103C17.347,31.378,15.829,30.589,14.875,29.267z M27.807,32.091	c-0.744,1.36-2.186,2.28-3.807,2.445c-0.953,0.092-1.95-0.107-2.873-0.57c0.505-0.168,0.995-0.378,1.448-0.646	c1.077-0.685,2.003-1.64,2.555-2.775c0.819-1.549,0.885-3.382,0.353-4.934c0.12-0.11,0.227-0.234,0.322-0.372	c0.981,0.59,1.73,1.414,2.163,2.366C28.657,29.057,28.56,30.762,27.807,32.091z M33.124,29.269c-0.397,0.871-1.067,1.635-1.93,2.203	c0.107-0.521,0.171-1.051,0.165-1.577c-0.055-1.275-0.419-2.554-1.126-3.6c-0.931-1.483-2.484-2.456-4.093-2.773	c-0.036-0.162-0.085-0.321-0.157-0.471c0.999-0.552,2.085-0.786,3.123-0.686c1.602,0.13,3.03,1.067,3.804,2.383	C33.716,26.073,33.792,27.782,33.124,29.269z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</main>
<Techstack />
<Contact />

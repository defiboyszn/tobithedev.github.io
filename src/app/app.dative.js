import Dative from "dativejs";
import {
  fadein,
  slidein,
  slideinups,
  slideinup,
  swirlin,
  focus,
} from "../animations";
// import template from "./app.dative.html";

export let App = Dative.extend({
  data() {
    return {
      name: ['Uche','Emeka',' Tobi'],
      post: {
        age: 16,
      },
      projects: [
        {
          name: "dativejs",
          link: "dativejs.js.org",
          description: "DativeJs Is a Mordern Ui Javascript Framework",
          blank: true,
        },
        {
          name: "dytejs",
          link: "dyte.js.org",
          description: "DyteJs Is DativeJs State Management + Pattern Library",
          blank: true,
        },
        {
          name: "pizzlejs",
          link: "pizzle.js.org",
          description: "PizzleJs Is An Animation Library For Javascript",
          blank: true,
        },
        {
          name: "ajiojs",
          link: "tobithedev.github.io/ajio",
          description: "ajiojs is a promised based http client for browser",
          blank: true,
        },
        {
          name: "virtual keyboard",
          link: "tobithedev.github.io/virtual-keyboard",
          description: "Virtual KeyBoard Made With Dative Js",
          blank: true,
        },
        {
          name: "MarkDown Editor",
          link: "https://tobithedev.github.io/markdown-editor/",
          description: "MarkDown Editor Made With Dative Js",
          blank: true,
        },
      ],
    };
  },
  template: `<div>
  <div id="navbar"></div>
  <div
    class="py-16 px-6 text-center backdrop-filter backdrop-blur-2xl mix-blend-screen bg-fixed bg-no-repeat z-50 relative top-14"
  >
  <div class="px-5 py-3 text-2xl">
    <div class="grid place-items-center">
      <div class="flex space-x-2 md:space-x-3 lg:space-x-5 items-center">
        {{#each name as i,l}}
          {{$: duration = 2500*(Number(i)+3);}}
          <h1 class="md:text-6xl text-xl md:first-letter:text-8xl" @fadein="{{duration}}, 0.4">{{l}}</h1>
        {{/each}}  
      </div>
    </div>
      <h1 @focus="2000,20" class="text-main-400">Frontend</h1>
    </div>
    <div class="grid place-items-center mt-24" @swirlin="3000, 50">
    <div class="max-w-xl w-full lg:flex mb-16 mt-8 lg:relative lg:left-10">
      <div
        class="h-48 lg:h-auto lg:w-48 bg-cover rounded-t lg:rounded-t-none lg:rounded-tl-full lg:rounded-bl-full text-center overflow-hidden bg-[url('/tobi.jpg')] bg-center"
        title="Tobi"
      ></div>
      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal"
      >
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">
            Hello World 😃
          </div>
          <p class="text-gray-700 text-base">
            My Name is Uche Emeka Tobi. <br>
            I'm {{post.age}} Years Old 😎 <br>
            I'm an Igbo Guy From Nigeria
          </p>
        </div>
      </div>
    </div>
    </div>
    <div class="mt-14 grid place-items-center">
      <h1 class="text-3xl">Projects</h1>
      <div >
      <div class="md:grid md:grid-cols-2 md:gap-4 md:items-center pt-5 mb-5">
        {{#each projects as i,project}}
            {{$: duration = 2500*(Number(i)+3);}}
            <div @fadein="{{duration}}, 10" class="max-w-sm rounded bg-main-800 overflow-hidden filter drop-shadow-2xl mb-5">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{project.name}}</div>
                <p class="text-main-400 text-base">{{project.description}}</p>
                {{#if project.blank}}
                  <a class="text-main-200" href="{{ 'https://'+project.link }}" target="_blank">Live Preview</a>
                {{/if}}
              </div>
            </div>
        {{/each}}
      </div>
      </div>
    </div>
    <div id="request"></div>
    <div id="service"></div>
    <!-- <div id="blog"></div> -->
  </div>
  <div id="footer"></div>
</div>
`,
  onmounted() {
    // this.$store.dispatch('loadApi')
    fetch("api/index.json")
      .then((res) => res.json())
      .then((data) => {
        this.post = data;
      });
  },
  animate: {
    fadein,
    focus,
    slidein,
    slideinup,
    slideinups,
    swirlin,
  },
});

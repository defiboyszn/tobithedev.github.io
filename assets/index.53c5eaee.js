var w=Object.defineProperty,k=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var c=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))_.call(t,a)&&c(e,a,t[a]);if(d)for(var a of d(t))S.call(t,a)&&c(e,a,t[a]);return e},m=(e,t)=>k(e,j(t));import{D as r,i as z,f as D,b as M}from"./vendor.991324d9.js";const A=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}};A();let L=function({setStyle:e,animate:t,duration:a,delay:s}){t([{transform:"translateX(-100%)",visibility:"visible"},{transform:"translatex(0)"}],{duration:a,delay:s,easing:"ease"})},C=function({setStyle:e,animate:t,duration:a,delay:s}){t([{transform:"translateX(100%)",visibility:"visible"},{transform:"translatex(0)"}],{duration:a,delay:s,easing:"ease"})},l=function({animate:e,duration:t,delay:a}){e([{transform:"translateY(-"+window.innerWidth+"px)",opacity:0},{transform:"translateY(0)",opacity:1},{transform:"translateY(-140px)",opacity:1},{transform:"translateY(0)",opacity:1},{transform:"translateY(-60px)",opacity:1},{transform:"translateY(0)",opacity:1}],{duration:t,delay:a,easing:"ease"})},E=function({animate:e,duration:t,delay:a}){e([{transform:"translateY(-"+window.innerWidth+"px)",opacity:0},{transform:"translateY(0)",opacity:1}],{duration:t,delay:a,easing:"ease"})},P=function({animate:e,duration:t,delay:a}){e([{transform:"translateY(-"+window.innerWidth+"px)",opacity:0},{transform:"translateY(0)",opacity:1}],{duration:t,delay:a,easing:"cubic-bezier(0.83, 0, 0.17, 1)"})},W=function({animate:e,duration:t,delay:a}){e([{transform:"scale(2)",transformOrigin:"0 50%",opacity:0},{transform:"scale(1)",transformOrigin:"0 50%",opacity:1}],{duration:t,delay:a,easing:"cubic-bezier(0.83, 0, 0.17, 1)"})},v=function({animate:e,duration:t,delay:a}){e([{letterSpacing:"-.5em",filter:"blur(12px)",opacity:0},{filter:"blur(0)",opacity:1}],{duration:t,delay:a,easing:"cubic-bezier(0.83, 0, 0.17, 1)"})};let $=r.extend({data(){return{open:!0,github:[],name:["Tobi","The","Alpha"],post:{age:16},projects:[{name:"dativejs",link:"dativejs.js.org",description:"DativeJs Is a Mordern Ui Javascript Framework",blank:!0,img:"dativejs-v2.png"},{name:"@dativejs/helpers",link:"dativejs.js.org/helper",description:"DativeJs Helper Plugin",blank:!0,img:"dativejs-v2.png"},{name:"dytejs",link:"dyte.js.org",description:"DyteJs Is DativeJs State Management + Pattern Library",blank:!0,img:"dyte.png"},{name:"pizzlejs",link:"pizzle.js.org",description:"PizzleJs Is An Animation Library For Javascript",blank:!0,img:"https://pizzle.js.org/assets/logo.png"},{name:"ajiojs",link:"tobithedev.github.io/ajiojs",description:"ajiojs is a promised based http client for browser",blank:!0,img:"ajio.png"},{name:"virtual keyboard",link:"tobithedev.github.io/virtual-keyboard",description:"Virtual KeyBoard Made With Dative Js",blank:!0,img:"https://tobithedev.github.io/virtual-keyboard/logo.png"},{name:"MarkDown Editor",link:"tobithedev.github.io/markdown-editor/",description:"MarkDown Editor Made With Dative Js",blank:!0,img:"md.png"}]}},template:`<div>
  <div id="navbar"></div>
  <div class="px-2 lg:px-24 pb-8 pt-32">
  <div class="hero min-h-screen bg-transparent lg:mx-13">
  <div class="hero-content !max-w-screen flex-col lg:flex-row-reverse">
   <img src="hero.png" class="w-80 md:max-w-sm rounded-lg h-screen object-contain" /> 
    <div>
      <h1 class="text-lg lg:text-5xl font-bold font-poppins_light" @fadein="3000, 10">Hello World, I'm TobitheAlpha</h1>
      <p class="py-6 text-poppins_regular text-xs sm:text-xl" @swirlin="3000, 10">A passionate Software Developer \u{1F680} having an experience of building Web applications with JavaScript/Sveltejs <br /> and Also the Creator of DativeJs.</p>
      <div class="flex flex-col justify-center items-center sm:flex-row gap-4 max-w-sm">
          <button class="btn btn-primary"><a href="#contact">Contact Me</a></button>
          <button class="btn btn-secondary"><a href="resume.pdf" download>See Resume</a></button>
      </div>
    </div>
  </div>
</div>

<!-- content -->
<div class="flex flex-col overflow-hidden rounded-md shadow-sm md:flex-row pb-11">
			<img src="https://img.freepik.com/free-photo/woman-with-virtual-reality-headset-smart-technology_53876-105043.jpg?size=626&ext=jpg&ga=GA1.2.1648852148.1647652142" alt="" class="h-80 object-cover bg-slate-500">
			<div class="flex flex-col justify-center flex-1 p-6 neon filter drop-shadow-lg">
				<span class="text-lg md:text-4xl uppercase text-slate-400">What I do</span>
				<h3 class="text-lg md:text-3xl font-bold">FULL STACK DEVELOPER</h3>
				<p class="text-xs md:text-xl my-6 text-slate-400">I build \u26A1 Progressive Web Applications/websites</p>
			</div>
		</div>

<div id="skills" class="px-2 md:px-34 text-base md:text-2xl" @focus="3000, 5">
    <h1 class="text-2xl font-bold font-poppins_medium pb-8">Skills</h1>
    <div class="pt-4 pb-8">
      <h1 class="text-base md:text-2xl font-bold font-poppins_regular">Frontend/Design</h1>
      <progress class="progress progress-secondary w-50 h-5 text-3xl" value="80" max="100"></progress>
    </div>
    <div class="pt-4">
      <h1 class="text-base md:text-2xl font-bold font-poppins_regular">Backend</h1>
      <progress class="progress progress-secondary w-50 h-5 text-3xl" value="50" max="100"></progress>
    </div>
</div>
<div id="open-source" class="text-xs md:text-2xl">
    <h1 class="text-2xl font-bold font-poppins_medium pb-8 pt-12">Open Source Projects</h1>
    <div class="pt-11 grid grid-cols-2 gap-2">
        {{#each github as i,git}}
         <div class="card neon px-1" @swirlin="3000, 10">
         <div class="card-body px-2 lg:px-[2rem]">
         <h2 class="card-title text-xs md:text-lg">{{git.name}}</h2>
            <p>{{git.description}}</p>
            <div class="flex flex-row gap-3">
              <div class="text-sm flex flex-row gap-1">
              <svg
                class="h-5 w-5 text-white"
                role="img"
                viewBox="0 0 10 16"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                ></path>
              </svg>
                <h1 class="font-poppins_medium">{{git.forks}}</h1>
              </div>
              <div class="text-sm flex flex-row gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <h1 class="font-poppins_medium">{{git.stargazers_count}}</h1>
              </div>
            </div>
          </div>
          </div>
        {{/each}}
    </div>
</div>
</div>
<div id="service"></div>
<div id="request"></div>
<div id="footer"></div>
  </div>`,onmounted(){fetch("api/index.json").then(e=>e.json()).then(e=>{this.post=e}),fetch("api/repo.json").then(e=>e.json()).then(e=>{this.github=e.slice(3,7)})},animate:{fadein:l,focus:v,slidein:L,slideinup:E,slideinups:P,swirlin:W,slideinright:C}});const I="modulepreload",u={},J="/",f=function(t,a){return!a||a.length===0?t():Promise.all(a.map(s=>{if(s=`${J}${s}`,s in u)return;u[s]=!0;const i=s.endsWith(".css"),n=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":I,i||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),i)return new Promise((b,y)=>{o.addEventListener("load",b),o.addEventListener("error",y)})})).then(()=>t())};var h={"./posts/dative-v2-alpha.md":()=>f(()=>import("./dative-v2-alpha.32f8e620.js"),[]),"./posts/sveltekit.md":()=>f(()=>import("./sveltekit.a52f2ff4.js"),[])};let x=[];for(const e in h){let t=0;h[e]().then(a=>{let s=a.attributes;x.push(m(p({id:t++},s),{body:a.html}))})}r.extend({template:`<div>
  <div class="mt-12 px-32">
    <h1 class="text-2xl mt-5 mb-5 font-poppins_semibold font-black">Blogs</h1>
    <div class="lg:grid lg:grid-cols-2 gap-2 place-items-center mt-2">
      {{#each contents as i,content}}
        {{$: duration = 2500*(Number(i)+3);}}
      <div
        @fadein="{{duration}}, 20"
        class="w-full flex flex-row px-3 mx-3 py-5 rounded-xl mb-10 neon"
      >
        <a>
          <img class="h-80 w-full flex-col object-cover rounded" src="{{content.headerImg}}" alt="">
          <p class="mt-6 text-sm text-blue-400">
            <span class="px-1 py-1  rounded-sm mr-4 text-main-100">{{content.tag}}</span>
            <span>{{new Date(content.date).toDateString()}}</span>
          </p>
          <h3 class="my-2 text-2xl font-bold font-heading">
            {{content.title}}
          </h3>
          <div class="leading-loose">
            {{$truncate(content.body, content.body.length / 7.5)}}
          </div>
        </a>
      </div>
      {{/each}}
    </div>
  </div>
</div>
`,data(){return{contents:x}},use:[z],animate:{fadein:l}});let N=r.extend({template:`<div>
    <div class="relative z-1000 font-poppins_medium text-center">
        <h1>\xA9\uFE0F 2022-{{new Date().getFullYear()}} Made With \u{1F5A4} By Tobithedev</h1>
        <h1>Powered By Dative.js</h1>
    </div>
</div>`}),O=r.extend({template:`
  <nav class="neon filter drop-shadow-2xl fixed w-full z-1000 font-poppins_regular" @flip="3000, 5">
  <div class="container px-6 py-3 mx-auto md:flex">
    <div class="flex items-center justify-between">
        <div>
        <span class="font-poppins-semibold text-slate-300 text-sm lg:text-2xl font-bold">
        &lt;<a
          class="text-base font-bold font-agustina transition-colors duration-200 transform text-white lg:text-3xl hover hover:text-gray-300"
          href="/"
          >TobitheAlpha</a
        >/&gt;
        </span>
        </div>

        <!-- Mobile menu button -->
        <div
          class="flex md:hidden"
          on:click="$ref.menu.classList.toggle('hidden')"
        >
          <button
            type="button"
            class="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div
        class="w-full mx-2 md:mx-12 md:flex font-poppins_light md:items-center md:justify-between hidden transition-all duration-100 delay-75"
        #menu
      >
        <div class="flex text-2xl flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
          <a
            href="#skills"
            class="px-2 py-1 font-medium transition-colors duration-200 transform rounded text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
            >Skills</a
          >
          <a
            href="#open-source"
            class="px-2 py-1 font-medium transition-colors duration-200 transform rounded text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
            >Open Source</a
          >
          <a
            href="#contact"
            class="px-2 py-1 font-medium transition-colors duration-200 transform rounded text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
            >Contact Me</a
          >
        </div>

        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>

          <input
            #search
            type="text"
            class="w-full py-2 pl-10 pr-4 bg-transparent text-white placeholder:text-white rounded-md focus:outline-none"
            placeholder="Search (Cmd + /)"
            on:focus="open = true"
            on:blur="open = false"
            on:input="search($event)"
          />
          <div>
            <ul class="menu bg-neutral w-56 absolute divide-y divide-gray-50 z-1000">
              {{#if (open && $ref.search.value && filteredNames.length === 0)}}
              <p class="text-xl text-gray-200 px-5">Not Found</p>
              {{/if}}
              {{#each filteredNames as item}}
                <li><a href="{{item.html_url}}">{{item.name}}</a></li>
              {{/each}}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!--
  <nav class="navbar">
  <div class="container px-6 py-3 mx-auto md:flex">
    <div class="flex items-center justify-between">
      <div>
        <span class="font-poppins-semibold text-slate-300 text-2xl font-bold">
        &lt;
        <a
          class="text-2xl font-bold font-agustina transition-colors duration-200 transform text-white lg:text-3xl hover hover:text-gray-300"
          href="/"
          >Tobi</a
        >
        /&gt;
        </span>
      </div>
    </div>
    </div>
  </div>
</nav>
-->
`,methods:{search(e){this.filteredNames=this.open?e.target.value?this.api.filter(t=>t.name.toLowerCase().includes(e.target.value.toLowerCase())):[]:[]}},onmounted(){fetch("api/repo.json").then(e=>e.json()).then(e=>{this.api=e}),addEventListener("keyup",e=>{e.key==="/"&&(e.ctrlKey||e.metaKey)&&(this.open=!0,this.$ref.search.focus())})},data:()=>({name:"EmekaTheDev",open:!1,filteredNames:[],api:[],color:""}),animate:{flip:v}}),Y=r.extend({template:`<div>
  <div class="relative mb-28 px-2 lg:px-24 pt-10">
    <h1 class="text-lg md:text-5xl font-poppins_semibold text-center font-bold mb-5 text-main-50">
      Book A Request
    </h1>
    <form
      action="/"
      method="post"
      on:click="
        $event.preventDefault()
        window.location.href = 'mailto:ucheemekatobi@gmail.com'
      "
    >
    <div class="flex items-center justify-center mt-12">
      <button
        type="submit"
        class="px-2 py-2 absolute neon drop-shadow-2xl filter rounded active:bg-main-400 hover:bg-main-800"
        @fadein="2300, 5"
      >
        Submit
      </button>
    </div>
    </form>
  </div>
</div>
`,animate:{fadein:D}});const B={title:"Service"},q=`<h1>Services</h1>
<p>I Make Web Sites and Web Apps</p>
<h4>You Need  A Web site/app</h4>
<p>\u{1F603} <a href="mailto:ucheemekatobi@gmail.com">Send A Maill</a></p>
<h4>I'm always Ready</h4>
`;let T=r.extend({animate:{bubble:M,fadein:l},template:`<div>
  <div class="grid place-items-center text-center text-white">
    <div
      @bubble="2000, 0.4"
      class=" md:w-96 neon shadow-xl image-full mx-4 prose prose-white prose-h1:font-poppins_medium text-center prose-blockquote:bg-main-500 prose-blockquote:px-1 prose-blockquote:py-1"
    >
      <div>
        {{ content }}
      </div>
    </div>
    <div class="mt-10" id="contact">
      <h1 class="text-lg md:text-3xl">Social Media</h1>
      <div class="list-none flex space-x-4 justify-center items-center mt-5">
        {{#each social_media as i,media}} 
            {{$: duration = 2500*(Number(i)+3);}}
        <li @fadein="{{duration}}, 2" class="neon rounded-full filter drop-shadow-2xl">
          <a href="{{ 'https://'+media.link }}" target="_blank" rel="noopener"
            ><span class="fab fa-{{media.name}} text-4xl"
              >{{media.name}}</span
            ></a
          >
        </li>
        {{/each}}
      </div>
    </div>
  </div>
</div>
`,data(){return{social_media:[{name:"facebook",link:"www.facebook.com/therealtobithealpha"},{name:"twitter",link:"www.twitter.com/tobithedev360"},{name:"github",link:"www.github.com/tobithedev"}],content:q,attributes:B}}});var g=new $({el:"#app"}),V=new O({el:"#navbar"}),F=new Y({el:"#request"}),R=new T({el:"#service"}),H=new N({el:"#footer"});g.attach([V,F,R,H]);window.app=g;

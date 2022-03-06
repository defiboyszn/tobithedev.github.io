var w=Object.defineProperty,k=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var c=(e,t,i)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,m=(e,t)=>{for(var i in t||(t={}))D.call(t,i)&&c(e,i,t[i]);if(d)for(var i of d(t))_.call(t,i)&&c(e,i,t[i]);return e},p=(e,t)=>k(e,j(t));import{D as o,i as z,f as g,b as M}from"./vendor.991324d9.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}};L();let J=function({setStyle:e,animate:t,duration:i,delay:r}){t([{transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{transform:"translate3d(0, 0, 0)"}],{duration:i,delay:r,easing:"ease"})},l=function({animate:e,duration:t,delay:i}){e([{transform:"translateY(-"+window.innerWidth+"px)",opacity:0},{transform:"translateY(0)",opacity:1},{transform:"translateY(-140px)",opacity:1},{transform:"translateY(0)",opacity:1},{transform:"translateY(-60px)",opacity:1},{transform:"translateY(0)",opacity:1}],{duration:t,delay:i,easing:"ease"})},I=function({animate:e,duration:t,delay:i}){e([{transform:"translateY(-"+window.innerWidth+"px)",opacity:0},{transform:"translateY(0)",opacity:1}],{duration:t,delay:i,easing:"ease"})},N=function({animate:e,duration:t,delay:i}){e([{transform:"translateY(-"+window.innerWidth+"px)",opacity:0},{transform:"translateY(0)",opacity:1}],{duration:t,delay:i,easing:"cubic-bezier(0.83, 0, 0.17, 1)"})},E=function({animate:e,duration:t,delay:i}){e([{transform:"scale(2)",transformOrigin:"0 50%",opacity:0},{transform:"scale(1)",transformOrigin:"0 50%",opacity:1}],{duration:t,delay:i,easing:"cubic-bezier(0.83, 0, 0.17, 1)"})},P=function({animate:e,duration:t,delay:i}){e([{letterSpacing:"-.5em",filter:"blur(12px)",opacity:0},{filter:"blur(0)",opacity:1}],{duration:t,delay:i,easing:"cubic-bezier(0.83, 0, 0.17, 1)"})},S=o.extend({data(){return{name:["Uche","Emeka"," Tobi"],post:{age:16},projects:[{name:"dativejs",link:"dativejs.js.org",description:"DativeJs Is a Mordern Ui Javascript Framework",blank:!0,img:"dativejs-v2.png"},{name:"@dativejs/helpers",link:"dativejs.js.org/helper",description:"DativeJs Helper Plugin",blank:!0,img:"dativejs-v2.png"},{name:"dytejs",link:"dyte.js.org",description:"DyteJs Is DativeJs State Management + Pattern Library",blank:!0,img:"dyte.png"},{name:"pizzlejs",link:"pizzle.js.org",description:"PizzleJs Is An Animation Library For Javascript",blank:!0,img:"https://pizzle.js.org/assets/logo.png"},{name:"ajiojs",link:"tobithedev.github.io/ajiojs",description:"ajiojs is a promised based http client for browser",blank:!0,img:"ajio.png"},{name:"virtual keyboard",link:"tobithedev.github.io/virtual-keyboard",description:"Virtual KeyBoard Made With Dative Js",blank:!0,img:"https://tobithedev.github.io/virtual-keyboard/logo.png"},{name:"MarkDown Editor",link:"tobithedev.github.io/markdown-editor/",description:"MarkDown Editor Made With Dative Js",blank:!0,img:"md.png"}]}},template:`<div>
  <div id="navbar"></div>
  <div
    class="py-16 px-6 text-center z-50 relative top-14 bg-neutral"
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
   <div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="tobi.jpg" alt="tobi"></figure>
  <div class="card-body grid place-items-center">
    <h2 class="card-title">
        Hello World \u{1F603}
    </h2>
    <p>
      My Name is Uche Emeka Tobi. <br>
      I'm {{post.age}} Years Old \u{1F60E} <br>
      I'm an Igbo Guy From Nigeria
    </p>
    <b>About Me</b>
    <p>
      {{post.about_me}}
    </p>
  </div>
</div>
    <!-- <div class="max-w-xl w-full lg:flex mb-16 mt-8 lg:relative lg:left-10">
     <div
        class="h-48 lg:h-auto lg:w-48 bg-cover rounded-t lg:rounded-t-none lg:rounded-tl-full lg:rounded-bl-full text-center overflow-hidden bg-[url('/tobi.jpg')] bg-center"
        title="Tobi"
      ></div>
      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal"
      >
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">
            Hello World \u{1F603}
          </div>
          <p class="text-gray-700 text-base">
            My Name is Uche Emeka Tobi. <br>
            I'm {{post.age}} Years Old \u{1F60E} <br>
            I'm an Igbo Guy From Nigeria
          </p>
          <b>About Me</b>
          <p>
            {{post.about_me}}
          </p>
        </div>
      </div>
    </div> --->
    </div>
    <div class="mt-14 grid place-items-center">
      <h1 class="text-3xl">Projects</h1>
      <div >
      <div class="md:grid md:grid-cols-2 md:gap-4 md:items-center pt-5 mb-5">
        {{#each projects as i,project}}
            {{$: duration = 2500*(Number(i)+3);}}
            <div @fadein="{{duration}}, 10" class="relative card w-96 bg-base-100 shadow-xl image-full mb-5" on:click="
              $event.preventDefault()
              window.location.href = 'https://{{project.link}}'
            ">
              <figure><img class="object-cover" src="{{project.img}}" alt="{{project.name}}"></figure>
              <div class="card-body">
                <div class="grid place-items-center">
                  <h2 class="card-title">{{project.name}}</h2>
                  <p>{{project.description}}</p>
                </div>
                <div class="card-actions absolute bottom-2">
                  <button class="btn btn-primary"><a href="{{ 'https://'+project.link }}" target="_blank">Live Preview</a></button>
                </div>
              </div>
            </div>
            <!-- <div @fadein="{{duration}}, 10" class="max-w-sm rounded bg-main-800 overflow-hidden filter drop-shadow-2xl mb-5">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{project.name}}</div>
                <p class="text-main-400 text-base">{{project.description}}</p>
                {{#if project.blank}}
                  <a class="text-main-200" href="{{ 'https://'+project.link }}" target="_blank">Live Preview</a>
                {{/if}}
              </div>
            </div> -->
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
`,onmounted(){fetch("api/index.json").then(e=>e.json()).then(e=>{this.post=e})},animate:{fadein:l,focus:P,slidein:J,slideinup:I,slideinups:N,swirlin:E}});const $="modulepreload",v={},A="/",u=function(t,i){return!i||i.length===0?t():Promise.all(i.map(r=>{if(r=`${A}${r}`,r in v)return;v[r]=!0;const a=r.endsWith(".css"),n=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":$,a||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),a)return new Promise((x,y)=>{s.addEventListener("load",x),s.addEventListener("error",y)})})).then(()=>t())};var b={"./posts/dative-v2-alpha.md":()=>u(()=>import("./dative-v2-alpha.32f8e620.js"),[]),"./posts/sveltekit.md":()=>u(()=>import("./sveltekit.a52f2ff4.js"),[])};let h=[];for(const e in b){let t=0;b[e]().then(i=>{let r=i.attributes;h.push(p(m({id:t++},r),{body:i.html}))})}o.extend({template:`<div>
  <div class="mt-12">
    <h1 class="text-2xl mt-5 mb-5 font-poppins_semibold font-black">Blogs</h1>
    <div class="lg:grid lg:grid-cols-2 gap-2 place-items-center mt-2">
      {{#each contents as i,content}}
        {{$: duration = 2500*(Number(i)+3);}}
      <div
        @fadein="{{duration}}, 20"
        class="w-full lg:w-2/3 px-3 mx-3 py-5 rounded-xl mb-10 bg-main-100 text-main-700"
      >
        <a href="{{'/blogs/'+content.title.toLowerCase().split(' ').join('-')}}">
          <img class="h-80 w-full object-cover rounded" src="{{content.headerImg}}" alt="">
          <p class="mt-6 text-sm text-blue-400">
            <span class="px-1 py-1 bg-main-600 rounded-sm mr-4 text-main-100">{{content.tag}}</span>
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
`,data(){return{contents:h}},use:[z],animate:{fadein:l}});let W=o.extend({template:`<div>
    <div class="relative z-1000 text-center">
        <h1>\xA9\uFE0F 2022-{{new Date().getFullYear()}} Made With \u{1F5A4} By Tobithedev</h1>
        <h1>Powered By Dative.js</h1>
    </div>
</div>`}),Y=o.extend({template:`<nav class="shadow bg-base-300">
  <div class="container px-6 py-3 mx-auto md:flex">
    <div class="flex items-center justify-between">
      <div>
        <a
          class="text-2xl font-bold transition-colors duration-200 transform text-white lg:text-3xl  hover:text-gray-700"
          href="/"
          >{{name}}</a
        >
      </div>
    </div>
    <div
      class="w-full flex items-center justify-center transition-all duration-100 delay-75"
      #menu
    >
     <div class="absolute top-2 right-3 md:relative md:top-1">
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
          class="w-full py-2 pl-10 pr-4 border rounded-md bg-gray-900 text-white border-gray-600 focus:outline-none"
          placeholder="Search (Cmd + /)"
          on:focus="open = true"
          on:blur="open = false"
          on:input="search($event)"
        />
        <div class="relative">
          <ul class="menu bg-gray-900 w-56 absolute z-1000 divide-y divide-gray-50">
            {{#if (open && $ref.search.value && filteredNames.length === 0)}}
            <p class="text-xl text-white px-5">Not Found</p>
            {{/if}}  
              {{#each filteredNames as item}}
                <li><a class="text-xl text-white px-5" href="https://{{item.link}}">{{item.name}}</a></li>
              {{/each}} 
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>

`,onmounted(){addEventListener("keyup",e=>{e.key==="/"&&(e.ctrlKey||e.metaKey)&&(this.open=!0,this.$ref.search.focus())})},methods:{search(e){this.filteredNames=this.open?e.target.value?this.api.filter(t=>t.name.toLowerCase().includes(e.target.value.toLowerCase())):[]:[]}},data:()=>({name:"EmekaTheDev",open:!1,filteredNames:[],api:[{name:"dativejs",link:"dativejs.js.org",description:"DativeJs Is a Mordern Ui Javascript Framework",blank:!0,img:"dativejs-v2.png"},{name:"@dativejs/helpers",link:"dativejs.js.org/helper",description:"DativeJs Helper Plugin",blank:!0,img:"dativejs-v2.png"},{name:"dytejs",link:"dyte.js.org",description:"DyteJs Is DativeJs State Management + Pattern Library",blank:!0,img:"dativejs-v2.png"},{name:"pizzlejs",link:"pizzle.js.org",description:"PizzleJs Is An Animation Library For Javascript",blank:!0,img:"https://pizzle.js.org/assets/logo.png"},{name:"ajiojs",link:"tobithedev.github.io/ajiojs",description:"ajiojs is a promised based http client for browser",blank:!0},{name:"virtual keyboard",link:"tobithedev.github.io/virtual-keyboard",description:"Virtual KeyBoard Made With Dative Js",blank:!0},{name:"MarkDown Editor",link:"tobithedev.github.io/markdown-editor/",description:"MarkDown Editor Made With Dative Js",blank:!0}]}),animate:{flip:g}}),C=o.extend({template:`<div>
  <div class="relative mb-28">
    <h1 class="text-5xl font-poppins_semibold font-bold mb-5 text-main-50">
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
        class="px-2 py-2 absolute bg-main-600 rounded active:bg-main-400 hover:bg-main-800"
        @fadein="2300, 5"
      >
        Submit
      </button>
    </div>
    </form>
  </div>
</div>
`,animate:{fadein:g}});const F={title:"Service"},O=`<h1>Services</h1>
<p>I Make Web Sites and Web Apps</p>
<h4>You Need  A Web site/app</h4>
<p>\u{1F603} <a href="mailto:ucheemekatobi@gmail.com">Send A Maill</a></p>
<h4>I'm always Ready</h4>
`;let q=o.extend({animate:{bubble:M,fadein:l},template:`<div>
  <div class="grid place-items-center text-center">
    <div
      @bubble="2000, 0.4"
      class="{{!rounded-md px-4 py-3}} card w-96 bg-base-100 shadow-xl mx-4 prose prose-gray prose-h1:font-poppins_medium text-center prose-blockquote:bg-main-500 prose-blockquote:px-1 prose-blockquote:py-1"
    >
      <div class="card-body">
        {{ content }}
      </div>
    </div>
    <div class="mt-10">
      <h1 class="text-3xl">Social Media</h1>
      <div class="list-none flex space-x-4 justify-center items-center mt-5">
        {{#each social_media as i,media}} 
            {{$: duration = 2500*(Number(i)+3);}}
        <li @fadein="{{duration}}, 2">
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
`,data(){return{social_media:[{name:"facebook",link:"www.facebook.com/tobithedev360"},{name:"instagram",link:"www.instagram.com/tobithedev"},{name:"twitter",link:"www.twitter.com/tobithedev360"},{name:"github",link:"www.github.com/tobithedev"}],content:O,attributes:F}}});var f=new S({el:"#app"}),B=new Y({el:"#navbar"}),T=new C({el:"#request"}),R=new q({el:"#service"}),K=new W({el:"#footer"});f.attach([B,T,R,K]);window.app=f;

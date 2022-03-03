var w=Object.defineProperty,k=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var c=(i,e,t)=>e in i?w(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,m=(i,e)=>{for(var t in e||(e={}))_.call(e,t)&&c(i,t,e[t]);if(d)for(var t of d(e))D.call(e,t)&&c(i,t,e[t]);return i},p=(i,e)=>k(i,j(e));import{D as s,i as S,f,b as E}from"./vendor.991324d9.js";const L=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}};L();let Y=function({setStyle:i,animate:e,duration:t,delay:r}){e([{transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{transform:"translate3d(0, 0, 0)"}],{duration:t,delay:r,easing:"ease"})},l=function({animate:i,duration:e,delay:t}){i([{transform:"translateY(-"+window.innerWidth+"px)",opacity:0},{transform:"translateY(0)",opacity:1},{transform:"translateY(-140px)",opacity:1},{transform:"translateY(0)",opacity:1},{transform:"translateY(-60px)",opacity:1},{transform:"translateY(0)",opacity:1}],{duration:e,delay:t,easing:"ease"})},I=function({animate:i,duration:e,delay:t}){i([{transform:"translateY(-"+window.innerWidth+"px)",opacity:0},{transform:"translateY(0)",opacity:1}],{duration:e,delay:t,easing:"ease"})},P=function({animate:i,duration:e,delay:t}){i([{transform:"translateY(-"+window.innerWidth+"px)",opacity:0},{transform:"translateY(0)",opacity:1}],{duration:e,delay:t,easing:"cubic-bezier(0.83, 0, 0.17, 1)"})},z=function({animate:i,duration:e,delay:t}){i([{transform:"scale(2)",transformOrigin:"0 50%",opacity:0},{transform:"scale(1)",transformOrigin:"0 50%",opacity:1}],{duration:e,delay:t,easing:"cubic-bezier(0.83, 0, 0.17, 1)"})},M=function({animate:i,duration:e,delay:t}){i([{letterSpacing:"-.5em",filter:"blur(12px)",opacity:0},{filter:"blur(0)",opacity:1}],{duration:e,delay:t,easing:"cubic-bezier(0.83, 0, 0.17, 1)"})},N=s.extend({data(){return{name:["Uche","Emeka"," Tobi"],post:{age:16},projects:[{name:"dativejs",link:"dativejs.js.org",description:"DativeJs Is a Mordern Ui Javascript Framework",blank:!0},{name:"dytejs",link:"dyte.js.org",description:"DyteJs Is DativeJs State Management + Pattern Library",blank:!0},{name:"pizzlejs",link:"pizzle.js.org",description:"PizzleJs Is An Animation Library For Javascript",blank:!0},{name:"ajiojs",link:"tobithedev.github.io/ajio",description:"ajiojs is a promised based http client for browser",blank:!0},{name:"virtual keyboard",link:"tobithedev.github.io/virtual-keyboard",description:"Virtual KeyBoard Made With Dative Js",blank:!0},{name:"MarkDown Editor",link:"https://tobithedev.github.io/markdown-editor/",description:"MarkDown Editor Made With Dative Js",blank:!0}]}},template:`<div>
  <div id="navbar"></div>
  <div
    class="py-16 px-6 text-center mix-blend-screen bg-fixed bg-no-repeat z-50 relative top-14"
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
            Hello World \u{1F603}
          </div>
          <p class="text-gray-700 text-base">
            My Name is Uche Emeka Tobi. <br>
            I'm {{post.age}} Years Old \u{1F60E} <br>
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
`,onmounted(){fetch("api/index.json").then(i=>i.json()).then(i=>{this.post=i})},animate:{fadein:l,focus:M,slidein:Y,slideinup:I,slideinups:P,swirlin:z}});const W="modulepreload",u={},$="/",v=function(e,t){return!t||t.length===0?e():Promise.all(t.map(r=>{if(r=`${$}${r}`,r in u)return;u[r]=!0;const a=r.endsWith(".css"),n=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":W,a||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),a)return new Promise((x,y)=>{o.addEventListener("load",x),o.addEventListener("error",y)})})).then(()=>e())};var b={"./posts/dative-v2-alpha.md":()=>v(()=>import("./dative-v2-alpha.32f8e620.js"),[]),"./posts/sveltekit.md":()=>v(()=>import("./sveltekit.a52f2ff4.js"),[])};let h=[];for(const i in b){let e=0;b[i]().then(t=>{let r=t.attributes;h.push(p(m({id:e++},r),{body:t.html}))})}s.extend({template:`<div>
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
`,data(){return{contents:h}},use:[S],animate:{fadein:l}});let q=s.extend({template:`<div>
    <div class="border-t px-2 py-2 text-main-100 relative top-4 text-center">
        <h1>\xA9\uFE0F 2022-{{new Date().getFullYear()}} Made With \u{1F5A4} By Tobithedev</h1>
        <h1>Powered By Dative.js</h1>
    </div>
</div>`}),A=s.extend({template:`<div>
    <div class="backdrop-filter backdrop-blur-[12px] bg-opacity-[1] bg-main-800 text-gray-50 border-b border-neutral-700
     w-full fixed z-1000 py-2 px-2">
        <h1 class="font-poppins_semibold" @flip="2000,0.6">{{name}}</h1>
        <div class="absolute right-3 top-2">
            
        </div>
    </div>
</div>
`,data(){return{name:"EmekaTheDev"}},animate:{flip:f}}),O=s.extend({template:`<div>
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
`,animate:{fadein:f}});const J={title:"Service"},F=`<h1>Services</h1>
<p>I Make Web Sites and Web Apps</p>
<h4>You Need  A Web site/app</h4>
<p>\u{1F603} <a href="mailto:ucheemekatobi@gmail.com">Send A Maill</a></p>
<h4>I'm always Ready</h4>
`;let T=s.extend({animate:{bubble:E,fadein:l},template:`<div>
  <div class="grid place-items-center text-center">
    <div
      @bubble="2000, 0.4"
      class="rounded-md px-4 py-3 filter drop-shadow-md bg-slate-50 mx-4 prose prose-gray prose-h1:text-main-800 prose-h1:font-poppins_medium text-center prose-blockquote:bg-main-500 prose-blockquote:px-1 prose-blockquote:py-1"
    >
      {{ content }}
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
`,data(){return{social_media:[{name:"facebook",link:"www.facebook.com/tobithedev360"},{name:"instagram",link:"www.instagram.com/tobithedev"},{name:"twitter",link:"www.twitter.com/tobithedev360"},{name:"github",link:"www.github.com/tobithedev"}],content:F,attributes:J}}});var g=new N({el:"#app"}),B=new A({el:"#navbar"}),R=new O({el:"#request"}),C=new T({el:"#service"}),U=new q({el:"#footer"});g.attach([B,R,C,U]);window.app=g;

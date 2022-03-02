import Dative from "dativejs";
import helper from '@dativejs/helpers'
import {
  fadein
} from "../../animations";
// import template from "./blog.dative.html";


var modules = import.meta.glob("./posts/*.md");
let contents = [];
for (const path in modules) {
  let uuid = 0;
  modules[path]().then((mod) => {
    let others = mod.attributes

    contents.push({
        id: uuid++,
        ...others,
        body: mod.html,
      });
    // console.log(contents);
  });
}

export let Blog = Dative.extend({
  template: `<div>
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
`,
  data() {
    return {
      contents,
    };
  },
  use: [helper],
  animate: {
    fadein,
  },
});
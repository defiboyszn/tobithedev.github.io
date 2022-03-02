import Dative from 'dativejs'
import { bubble } from 'dativejs/animation'
import { fadein } from '../../animations'
// import template from './service.dative.html'
import {html,attributes} from './service.dative.md'

export let Service = Dative.extend({
    animate: {
        bubble,
        fadein
    },
    template: `<div>
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
`,
    data() {
        return {
            social_media: [],
            content: html,
            attributes
        }
    },
    async onmounted() {
        let req = await fetch('api/index.json')
        let res = await req.json()
        this.set({
            social_media: res['social_medias']
        })
    }
})
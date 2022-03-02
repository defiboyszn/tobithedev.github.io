import Dative from 'dativejs'
// import template from './request.dative.html'
import { flip } from 'dativejs/animation'



export let JobRequest = Dative.extend({
    template: `<div>
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
`,
    animate: {
        fadein: flip
    }
})
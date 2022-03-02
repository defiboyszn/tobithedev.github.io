import Dative from "dativejs";
import { flip } from "dativejs/animation";
// import template from "./navbar.dative.html";

export let NavBar = Dative.extend({
  template: `<div>
    <div class="backdrop-filter backdrop-blur-[12px] bg-opacity-[1] bg-main-800 text-gray-50 border-b border-neutral-700
     w-full fixed z-1000 py-2 px-2">
        <h1 class="font-poppins_semibold" @flip="2000,0.6">{{name}}</h1>
        <div class="absolute right-3 top-2">
            
        </div>
    </div>
</div>
`,
  data() {
    return {
      name: "EmekaTheDev",
    };
  },
  animate: {
    flip,
  },
});

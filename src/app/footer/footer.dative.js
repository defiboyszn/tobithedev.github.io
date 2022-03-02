import Dative from "dativejs";
// import template from './footer.dative.html'

export let Footer = Dative.extend({
  template: `<div>
    <div class="bg-main-600 px-2 py-2 text-main-100 relative top-4 text-center">
        <h1>©️ 2022-{{new Date().getFullYear()}} Made With 🖤 By Tobithedev</h1>
        <h1 class="text-main-800">Powered By Dative.js</h1>
    </div>
</div>`,
});
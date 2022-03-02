import "@fortawesome/fontawesome-free/js/all"
import { App } from "./app/app.dative";
import { Blog } from "./app/blog/blog.dative";
import { Footer } from "./app/footer/footer.dative";
import { NavBar } from "./app/navbar/navbar.dative";
import { JobRequest } from "./app/request/request.dative";
import { Service } from "./app/service/service.dative";
import "@fortawesome/fontawesome-free/css/all.css";
import "./index.css";
// import ServiceWorker from "../packages/@dative/dative-pwa";

// Dative.config.slient = true;

var app = new App({
  el: "#app",
});
var navbar = new NavBar({
  el: "#navbar",
});
var job_request = new JobRequest({
  el: "#request",
  // attach: app,
});
var service = new Service({
  el: "#service",
});
var footer = new Footer({
  el: "#footer",
});
// var blog = new Blog({
//   el: "#blog",
// });
app.attach([navbar, job_request, service, footer]);
// app.render()
/**
 * @type {app}
 */
window.app = app;

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('./sw.js')
// }
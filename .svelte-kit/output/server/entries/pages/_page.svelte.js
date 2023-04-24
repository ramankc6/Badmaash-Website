import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Proza+Libre:wght@400;700&display=swap');.imgDiv.svelte-1ksu6ew{display:flex;justify-content:center;align-items:center;height:100%;z-index:100;position:fixed;width:100%;flex-direction:column}img.svelte-1ksu6ew{width:100%;max-width:500px}.mainDiv.svelte-1ksu6ew{height:100vh;width:100vw;display:flex;justify-content:flex-end;flex-direction:column;align-items:flex-end;position:fixed;background-color:#000000;top:0;left:0}.square.svelte-1ksu6ew{width:100%;height:0%;background-color:#2D2727;position:fixed;z-index:0}.pertLoaded.svelte-1ksu6ew{font-size:5rem;color:white;margin-top:1rem;font-family:'Proza Libre', sans-serif}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let index = 0;
  let black = 0;
  $$result.css.add(css);
  return `<div class="mainDiv svelte-1ksu6ew"><div class="square svelte-1ksu6ew" style="${"height: " + escape(black, true) + "%;"}"></div></div>
<div class="imgDiv svelte-1ksu6ew"><a href="/home"><img src="logo.png" alt="Logo" class="svelte-1ksu6ew"></a>
    <p class="pertLoaded svelte-1ksu6ew">${escape(Math.round(index * 100))}%</p></div>`;
});
export {
  Page as default
};

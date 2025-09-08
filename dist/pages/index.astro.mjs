import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D49pCIBO.mjs';
/* empty css                                 */
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B1Hawnde.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Inicio2";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="card max-w-sm"> <div class="card-body"> <h5 class="card-title mb-0">Card title</h5> <div class="text-base-content/50 mb-3">Card subtitle</div> <p class="mb-4">
Some quick example text to build on the card title and make up
				the bulk of the card's content.
</p> <div class="card-actions"> <a href="ponentes/" class="link link-primary link-hover">Card link</a> <a href="#" class="link link-primary link-animated">Another link</a> </div> </div> </div>` })}`;
}, "D:/Proyectos/Congreso/Web/RCH-HELP/src/pages/index.astro", void 0);

const $$file = "D:/Proyectos/Congreso/Web/RCH-HELP/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

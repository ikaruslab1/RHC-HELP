import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_D49pCIBO.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B1Hawnde.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Ponentes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ponentes;
  const allPonentes = await Astro2.glob(/* #__PURE__ */ Object.assign({"./ponentes/001.md": () => import('../chunks/001_diw9mu5A.mjs').then(n => n._),"./ponentes/noactivo - NAAG760719.md": () => import('../chunks/noactivo - NAAG760719_DoY1QYw8.mjs').then(n => n._)}), () => "./ponentes/*.md");
  const pageTitle = "Ponentes2";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<ul> ${allPonentes.map((ponente) => renderTemplate`<li> <a${addAttribute(ponente.url, "href")}>${ponente.frontmatter.nombre}</a> </li>`)} </ul> ` })}`;
}, "D:/Proyectos/Congreso/Web/RCH-HELP/src/pages/ponentes.astro", void 0);

const $$file = "D:/Proyectos/Congreso/Web/RCH-HELP/src/pages/ponentes.astro";
const $$url = "/ponentes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Ponentes,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

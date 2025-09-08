import { c as createComponent, a as createAstro, b as renderTemplate, e as renderSlot, f as renderHead, d as addAttribute } from './astro/server_D49pCIBO.mjs';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", "</title>", "</head> <body> ", ' <script src="https://kit.fontawesome.com/666635bc15.js" crossorigin="anonymous"><\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), pageTitle, renderHead(), renderSlot($$result, $$slots["default"]));
}, "D:/Proyectos/Congreso/Web/RCH-HELP/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };

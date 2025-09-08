import { c as createComponent, r as renderComponent, b as renderTemplate, u as unescapeHTML } from './astro/server_D49pCIBO.mjs';
import { $ as $$PonentesLayout } from './PonentesLayout_CLxP4HZC.mjs';

const html = () => "";

				const frontmatter = {"layout":"../../layouts/PonentesLayout.astro","title":"No activo NAAG760719","pubDate":"2022 - 07 - 01","description":"Este es la primera publicación de mi nuevo blog Astro.","author":"Alumno de Astro","image":null,"url":"https://docs.astro.build/assets/full-logo-light.png","alt":"El logotipo completo de Astro.","tags":["astro","bloguear","aprender en público"]};
				const file = "D:/Proyectos/Congreso/Web/RCH-HELP/src/pages/ponentes/noactivo - NAAG760719.md";
				const url = "/ponentes/noactivo - NAAG760719";
				function rawContent() {
					return "   \r\n                                          \r\n                           \r\n                       \r\n                                                                   \r\n                       \r\n       \r\n                                                        \r\n                                   \r\n                                                  \r\n   \r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$PonentesLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };

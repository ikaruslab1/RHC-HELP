import { c as createComponent, r as renderComponent, b as renderTemplate, u as unescapeHTML } from './astro/server_D49pCIBO.mjs';
import { $ as $$PonentesLayout } from './PonentesLayout_CLxP4HZC.mjs';

const html = () => "";

				const frontmatter = {"layout":"../../layouts/PonentesLayout.astro","title":"BEAR790325","ID":1,"curp":"BEAR790325MJCLLS04","nombre":"Gabriela Nava Amezcua","grado":"Ing.","tags":["Ponente","Asistente a taller"],"tipo":"Ponencia","participacion":"Calidad del agua potable en la FES Acatlán"};
				const file = "D:/Proyectos/Congreso/Web/RCH-HELP/src/pages/ponentes/001.md";
				const url = "/ponentes/001";
				function rawContent() {
					return "   \r\n                                          \r\n                 \r\n       \r\n                        \r\n                             \r\n           \r\n     \r\n             \r\n                        \r\n              \r\n                                                         \r\n   \r\n";
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

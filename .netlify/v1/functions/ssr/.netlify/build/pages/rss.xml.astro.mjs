import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { B as BLOG_NAME } from '../chunks/constants_yUSyhBmQ.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  return rss({
    title: BLOG_NAME,
    description: 'Important knowledge and here we share it',
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('../chunks/post-1_C1iSOc6V.mjs').then(n => n._),"./posts/post-10.md": () => import('../chunks/post-10_ClxCAasN.mjs').then(n => n._),"./posts/post-3.md": () => import('../chunks/post-3_7RZGea6r.mjs').then(n => n._),"./posts/post-4.md": () => import('../chunks/post-4_DdPZd3fp.mjs').then(n => n._),"./posts/post-5.md": () => import('../chunks/post-5_BZwasc43.mjs').then(n => n._),"./posts/post-6.md": () => import('../chunks/post-6_98iXgAu6.mjs').then(n => n._)})),
    customData: `<language>en-us</language>`,
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

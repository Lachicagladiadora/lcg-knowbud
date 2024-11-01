import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_D7lyRi_1.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://lcg-knowbud.netlify.app");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { urlPost, title, author, description, date, coverImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="h-[260px] w-[260px] border-2 rounded-lg p-4 flex flex-col items-center justify-center border-first-dark text-obscure bg-second-light/40  
group/title group/image hover:border-first hover:bg-blank-dark dark:hover:border-blank dark:hover:bg-first/40
dark:border-second-dark dark:text-blank dark:bg-first-dark/50 md:h-[290px] md:w-[290px] lg:h-[380px] lg:w-[380px] xl:w-[422px] xl:h-[422px]
"> <a${addAttribute(urlPost ?? "/blog", "href")} class="w-full h-full flex flex-col gap-3 items-center justify-center"> <header class="w-full flex-1 flex flex-col gap-2 overflow-hidden"> <h2 class="text-xl font-bold text-first-dark dark:text-second-light title group-hover/title:text-obscure-light dark:group-hover/title:text-second-light">${title}</h2> <div${addAttribute(`w-full flex-1 rounded-lg bg-contain grayscale image group-hover/image:grayscale-0 `, "class")}> <img${addAttribute(coverImage ?? "./icons/Image", "src")}${addAttribute(`${title} post image`, "alt")} class="h-full w-full"> </div> </header> <main class="w-full h-16 text-sm"> <p class="text-first-dark/50 mb-2 italic flex items-center justify-between text-xs dark:text-second/60"> <span>${author}</span> <span>${date}</span> </p> <p class="first-line:indent-5 line-clamp-2 leading-tight text-obscure dark:text-blank">${description}</p> </main> </a> </li>`;
}, "/home/el_descendiente_del_mal/dev/me/lcg-knowbud/src/components/BlogPost.astro", void 0);

export { $$BlogPost as $ };

import React from "react";

export const Menu = () => {
  return (
    <div
      className="w-full py-2 px-1 border-0  border-obscure-dark text-obscure-dark bg-second-light z-10
      dark:border-blank-light dark:text-blank-light dark:bg-obscure-light 
        md:rounded-2xl md:border-[2px]
      "
    >
      <h3 className="py-6 text-lg font-bold text-center">Menu</h3>
      <ul className="flex flex-col justify-center">
        <li className="">
          <a
            href="/"
            className="block py-4 px-2 text-center border-t-4 border-b-2 last:border-b-0 border-second 
        hover:bg-first/80 
        dark:border-first dark:hover:bg-blank dark:hover:text-obscure-dark dark:hover:border-second"
          >
            Home
          </a>
        </li>
        <li className="">
          <a
            href="/portfolio"
            className="block py-4 px-2 text-center border-t-2 border-b-2 last:border-b-0 border-second 
        hover:bg-first/80 
        dark:border-first dark:hover:bg-blank dark:hover:text-obscure-dark dark:hover:border-second"
          >
            Portfolio
          </a>
        </li>
        {/* <li className="">
          <a
            href="/tags"
            className="block py-4 px-2 text-center border-t-2 border-b-2 last:border-b-0 border-second 
        hover:bg-first/80 hover:text-blank-light
        dark:border-first dark:hover:bg-blank dark:hover:text-obscure-dark dark:hover:border-second"
          >
            Tags
          </a>
        </li> */}
        <li className="">
          <a
            href="/blog"
            className="block py-4 px-2 text-center border-t-2 border-b-2 last:border-b-0 border-second 
        hover:bg-first/80
        dark:border-first dark:hover:bg-blank dark:hover:text-obscure-dark dark:hover:border-second"
          >
            Blog
          </a>
        </li>
        <li className="">
          <a
            href="/contact"
            className="block py-4 px-2 text-center border-t-2 border-b-2 last:border-b-0 last:rounded-b-xl border-second 
        hover:bg-first/80
        dark:border-first dark:hover:bg-blank dark:hover:text-obscure-dark dark:hover:border-second"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

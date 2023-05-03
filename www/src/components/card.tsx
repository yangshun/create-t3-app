import type { ReactNode } from "react";

export default function Card(props: {
  title: string;
  href: string;
  children: ReactNode;
}) {
  const { title, href } = props;

  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-md border border-t3-purple-200/20 bg-white/5 transition-colors hover:border-t3-purple-300/50">
      <div className="flex items-center space-x-4 bg-white/10 p-2 pl-5 transition-colors hover:bg-white/20">
        <slot name="icon" />
        <p className="text-lg font-medium leading-6 text-t3-purple-200 md:text-xl">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="h-full rounded-md before:absolute before:inset-0 before:content-[''] focus:no-underline hover:no-underline active:no-underline"
          >
            {title}
          </a>
        </p>
      </div>
      <div className="m-6 text-sm text-t3-purple-100 subpixel-antialiased md:text-base">
        {props.children}
      </div>
    </div>
  );
}

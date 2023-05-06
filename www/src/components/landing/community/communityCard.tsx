import type { ReactElement } from "react";

export default function CommunityCard(props: {
  title: string;
  text: string;
  href: string;
  icon: ReactElement;
}) {
  const { title, text, href, icon } = props;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full cursor-pointer rounded-lg border border-t3-purple-200/20 bg-t3-purple-200/10 transition-colors hover:border-t3-purple-300/50 hover:bg-t3-purple-200/20 hover:no-underline sm:h-64"
    >
      <div className="flex h-full flex-col items-center justify-center space-y-3 p-4 sm:p-2 md:p-4">
        <div className="h-14 w-14">{icon}</div>
        <h2 className="text-xl font-black">{title}</h2>
        <p className="text-center">{text}</p>
      </div>
    </a>
  );
}

import type { ReactNode } from "react";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#300171] to-slate-900">
      {/* <JumpToContent /> */}
      <div className="min-w-screen relative min-h-screen before:pointer-events-none before:absolute before:inset-0 before:block before:h-full before:w-full before:bg-[url('/images/background-pattern.svg')] before:bg-cover before:bg-no-repeat before:opacity-5">
        {/* <Navbar isNotFound={isNotFound || false} /> */}
        <aside id="grid-left" className="hidden" title="Site Navigation">
          <div className="fixed left-0 top-0 z-30 h-screen w-screen bg-default">
            <div className="fixed top-24 h-[calc(100%-96px)] w-full pb-16">
              {/* <LeftSidebar
                currentPage={currentPage}
                isNotFound={isNotFound || false}
              /> */}
            </div>
          </div>
        </aside>
        <main id="content">{children}</main>
        {/* <Footer isBlog={false} path="/" /> */}
      </div>
    </div>
  );
}

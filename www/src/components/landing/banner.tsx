import { useRef, useState } from "react";
import { Button } from "../button";

export default function Banner() {
  const commandRef = useRef<HTMLElement>(null);
  const [cooldown, setCooldown] = useState(false);
  function onCommandClick() {
    if (cooldown) return;
    setCooldown(true);
    navigator.clipboard.writeText(commandRef.current?.textContent ?? "");
    setTimeout(() => setCooldown(false), 2500);
  }

  return (
    <div className="py-12 sm:py-8 md:py-12 lg:py-14 xl:py-12 2xl:py-28">
      <div className="mx-auto max-w-[800px] xl:max-w-7xl">
        <div className="lg:px-8">
          <div className="flex flex-col items-center">
            <div className="max-w-md px-4 sm:max-w-2xl sm:px-6 md:max-w-3xl lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-6xl">
              <div className="flex w-full flex-col items-center gap-4">
                <div className="flex flex-col items-start justify-between">
                  <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]">
                    The best way to start a
                    <span className="text-[hsl(200,100%,60%)]">
                      {" "}
                      full-stack,{" "}
                    </span>
                    <span className="text-[hsl(240,100%,70%)]">typesafe </span>
                    <span className="text-[hsl(280,100%,60%)]">
                      Next.js
                    </span>{" "}
                    app
                  </h1>

                  <div className="mt-4 flex w-full items-center justify-center gap-4 xl:mt-8">
                    <Button
                      href="/en/introduction"
                      openInNewTab={false}
                      rounded="full"
                      className="group"
                      specialHover={true}
                    >
                      Documentation
                      <svg
                        className="stroke -mr-1 ml-2 mt-0.5 h-3 stroke-current stroke-2"
                        fill="none"
                        viewBox="0 0 10 10"
                        aria-hidden="true"
                      >
                        <path
                          className="opacity-0 transition group-hover:opacity-100"
                          d="M0 5h7"
                        ></path>
                        <path
                          className="transition group-hover:translate-x-[3px]"
                          d="M1 1l4 4-4 4"
                        ></path>
                      </svg>
                    </Button>
                    <Button
                      href="https://github.com/t3-oss/create-t3-app"
                      openInNewTab={true}
                      variant="secondary"
                      rounded="full"
                    >
                      GitHub
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="ml-2 h-3 fill-white"
                      >
                        <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"></path>
                      </svg>
                    </Button>
                  </div>

                  <div className="flex w-full flex-col items-center">
                    <div className="relative mt-4 flex h-full xl:mt-8">
                      <button
                        className="relative flex cursor-pointer flex-row items-center gap-2 rounded-md border border-t3-purple-200/20 bg-t3-purple-100/10 px-2 py-2 text-sm transition-colors duration-300 hover:border-t3-purple-300/50 hover:bg-t3-purple-100/20 md:px-3 md:py-3 md:text-lg lg:px-5 lg:py-4 lg:text-xl"
                        title="Copy the command to get started"
                        id="command"
                        onClick={() => onCommandClick()}
                      >
                        <code
                          id="command-text"
                          ref={commandRef}
                          className="text-t3-purple-100"
                        >
                          npm create t3-app@latest
                        </code>
                        <svg
                          id="copy-icon"
                          className={
                            cooldown
                              ? "hidden stroke-t3-purple-100"
                              : "stroke-t3-purple-100"
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        <svg
                          id="check-icon"
                          className={
                            !cooldown
                              ? "hidden stroke-t3-purple-100"
                              : "stroke-t3-purple-100"
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

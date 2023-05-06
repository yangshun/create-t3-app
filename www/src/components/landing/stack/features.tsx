/* eslint-disable react/no-unescaped-entities */

import * as React from "react";
import Card from "./card";
import {
  NextAuthIcon,
  NextJSIcon,
  PrismaIcon,
  TailwindIcon,
  tRPCIcon,
  TypescriptIcon,
} from "../../icons";
import PageSection from "../../pageSection";

export default function Features() {
  return (
    <PageSection size={"24"} id="stack">
      <div className="mx-auto max-w-7xl px-4 pb-12 text-t3-purple-100 sm:px-6 lg:px-8">
        <div className="mb-10 md:text-center">
          <h2 className="text-xl font-semibold text-t3-purple-200 md:text-2xl lg:text-2xl">
            The best of the full stack TypeScript ecosystem...
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-t3-purple-50 md:text-5xl lg:text-5xl">
            ...but ONLY the parts you need
          </h3>
          <p className="mt-4 text-base text-t3-purple-200 md:text-lg">
            Take what you want and nothing more!
          </p>
        </div>
        <div>
          <div className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-6 sm:gap-y-14 sm:space-y-0 md:grid-cols-3 md:grid-rows-2 lg:gap-x-8">
            <Card
              title="Next.js"
              href="https://nextjs.org/"
              icon={NextJSIcon()}
            >
              <React.Fragment>
                Next.js offers a lightly opinionated, heavily optimized approach
                to creating applications using React. It&apos;s the industry
                standard and we&apos;re proud to build on top of it :)
              </React.Fragment>
            </Card>
            <Card
              title="Prisma"
              href="https://www.prisma.io/"
              icon={PrismaIcon()}
            >
              <React.Fragment>
                Prisma is the best way to work with databases in TypeScript. It
                provides a simple, type-safe API to query your database, and it
                can be used with most SQL dialects (and Mongo too!).
              </React.Fragment>
            </Card>

            <Card
              title="TypeScript"
              href="https://www.typescriptlang.org/"
              icon={TypescriptIcon()}
            >
              <React.Fragment>
                We firmly believe TypeScript will help you be a better web
                developer. Whether you&apos;re new to JS or a seasoned pro, the
                &quot;strictness&quot; of TypeScript leads to smoother building.
              </React.Fragment>
            </Card>

            <Card
              title="Tailwind CSS"
              href="https://tailwindcss.com/"
              icon={TailwindIcon()}
            >
              <React.Fragment>
                Tailwind CSS is a utility-first CSS framework that helps you
                build beautiful, responsive designs without any extra
                configuration. It&apos;s built with utility-first principles,
                and is completely customizable and extendable.
              </React.Fragment>
            </Card>

            <Card title="tRPC" href="https://trpc.io/" icon={tRPCIcon()}>
              <React.Fragment>
                If your frontend and backend are TypeScript, it's really hard to
                beat the DX of tRPC. Kinda like GraphQL but without the work -
                seriously this lib is magic.
              </React.Fragment>
            </Card>

            <Card
              title="NextAuth.js"
              href="https://next-auth.js.org/"
              icon={NextAuthIcon()}
            >
              <React.Fragment>
                If your frontend and backend are TypeScript, it's really hard to
                beat the DX of tRPC. Kinda like GraphQL but without the work -
                seriously this lib is magic.
              </React.Fragment>
            </Card>
          </div>
        </div>
      </div>
    </PageSection>
  );
}

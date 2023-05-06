import { DiscordIcon, GithubIcon, TwtterIcon } from "~/components/icons";
import PageSection from "~/components/pageSection";
import CommunityCard from "./communityCard";

export default function Community() {
  return (
    <PageSection size={"24"} bottomPadding={false} id="community">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 text-t3-purple-100 sm:px-6 lg:px-8">
        <h3 className="mt-2 w-full text-left text-3xl font-bold tracking-tight text-t3-purple-50 md:text-center md:text-5xl lg:text-5xl">
          Community
        </h3>
        <p className="mb-10 mt-4 w-full max-w-3xl text-left text-base text-t3-purple-200 md:text-center md:text-xl lg:text-xl">
          Join our community to get help, share your projects, and even
          contribute to the project!
        </p>
        <div className="flex flex-col items-start justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          <CommunityCard
            title="Discord"
            text="Join our Discord server to chat with other developers and get help with your projects."
            href="https://t3.gg/discord"
            icon={DiscordIcon()}
          />
          <CommunityCard
            title="GitHub"
            text="Contribute to the project by submitting issues and pull requests on our GitHub repository."
            href="https://github.com/t3-oss/create-t3-app"
            icon={GithubIcon()}
          />
          <CommunityCard
            title="Twitter"
            text="Join us on Twitter for shitposts."
            href="https://twitter.com/t3dotgg"
            icon={TwtterIcon()}
          />
        </div>
      </div>
    </PageSection>
  );
}

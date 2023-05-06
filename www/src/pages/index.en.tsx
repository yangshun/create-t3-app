import About from "~/components/landing/about";
import Banner from "~/components/landing/banner";
import Community from "~/components/landing/community/community";
import Features from "~/components/landing/stack/features";
import LandingLayout from "~/components/layouts/landing";

export default function Home() {
  return (
    <LandingLayout>
      <Banner />
      <About />
      <Features />
      <Community />
    </LandingLayout>
  );
}

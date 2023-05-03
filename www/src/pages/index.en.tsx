import Banner from "~/components/landing/banner";
import About from "~/components/landing/about";
import LandingLayout from "~/components/layouts/landing";
import Features from "~/components/landing/features";

export default function Home() {
  return (
    <LandingLayout>
      <Banner />
      <About />
      <Features />
    </LandingLayout>
  );
}

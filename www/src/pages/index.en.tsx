import About from "~/components/landing/about";
import Banner from "~/components/landing/banner";
import Features from "~/components/landing/features";
import LandingLayout from "~/components/layouts/landing";

export default function Home() {
  return (
    <LandingLayout>
      <Banner />
      <About />
      <Features />
    </LandingLayout>
  );
}

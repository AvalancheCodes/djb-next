// import Script from "next/script";
import Testimonials from "../components/testimonials/Testimonials";
import PortfolioSummary from "../components/portfolio/PortfolioSummary";
import FeaturesBanner from "../components/features/features-banner";
import LogoBanner from "../components/logos/technology-banner";
import { FC } from "react";
import ReviewHero from "@/components/hero/review-hero/ReviewHero";

const Home: FC = () => {
  return (
    <>
      <title>David J. Barel Creative Full Stack Developer</title>
      <meta
        name="description"
        content="David J. Barel is a top rated full stack developer"
      />
      <link rel="icon" href="/favicon.ico" />

      <section className="position-relative bg-dark p-0 ">
        {/*<Illustrated />*/}
        <ReviewHero />
      </section>
      {/* END HEAD */}

      {/*  Services  */}
      <section className="bg-dark position-relative pattern-overlay-5 mx-xl-3 mx-xxxl-9 rounded">
        <FeaturesBanner />
      </section>

      <section className="pt-4">
        <Testimonials />
      </section>
      {/*    Technology   */}
      <section className="pt-0 mb-5">
        <LogoBanner />
      </section>
      <section className="pt-4">
        <PortfolioSummary />
      </section>

      <section className="pt-0 position-relative">{/*<ProjectCta />*/}</section>
    </>
  );
};

export default Home;

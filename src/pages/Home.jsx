import { Layout } from "../layout/Layout";
import { HeroVideo } from "../components/hero/HeroVideo";
import { CategorieSplit } from "../components/categories/CategorieSplit";
import { Testimonials } from "../components/testimonials/Testimonials";
import { LatestNews } from "../components/news/LatestNews";

export const Home = () => {
  return (
    <div className="bg-[#0A0A0A] dark:bg-background-dark font-display text-white selection:bg-primary/30 min-h-screen">
      <Layout>
        {/*Video Hero Section*/}
        <HeroVideo />
        {/*Category Split-Screen Section */}
        <CategorieSplit />
        {/*Bento Testimonials Section*/}
        <Testimonials />
        {/*Latest News/Blog Section*/}
        <LatestNews />
      </Layout>
    </div>
  );
};

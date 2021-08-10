import RecentPosts from "@/components/blog/RecentPosts";
import HeroSection from "@/components/home/HeroSection";
import Layout from "@/components/Layout";
import NewsletterForm from "@/components/NewsletterForm";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import SkillsSlider from "@/components/skills/SkillsSlider";

export default function Home() {
  return (
    <main className="sm:mx-5">
      <Layout>
        <HeroSection />
        <SkillsSlider />
        <RecentPosts />
        <FeaturedProjects />
        <NewsletterForm />
      </Layout>
    </main>
  );
}

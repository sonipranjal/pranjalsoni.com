import RecentPosts from '@/components/blog/RecentPosts';
import HeroSection from '@/components/home/HeroSection';
import Layout from '@/components/Layout';
import NewsletterForm from '@/components/NewsletterForm';
import FeaturedProjects from '@/components/projects/FeaturedProjects';
import SkillsSlider from '@/components/skills/SkillsSlider';

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { projectFilePaths, PROJECTS_PATH } from '../utils/mdxUtils';

export default function Home({ projects }) {
  return (
    <main className="sm:mx-5">
      <Layout>
        <HeroSection />
        <SkillsSlider />
        <RecentPosts />
        <FeaturedProjects projects={projects} />
        <NewsletterForm />
      </Layout>
    </main>
  );
}

export function getStaticProps() {
  const projects = projectFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
    const { content, data } = matter(source);
    console.log(data);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { projects } };
}

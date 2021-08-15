import Layout from '@/components/Layout';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { projectFilePaths, PROJECTS_PATH } from '../../utils/mdxUtils';
import ProjectCard from '@/components/projects/ProjectCard';

export default function ProjectPage({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-white via-red-100 to-white">
        <div className="container">
          <h1 className="py-10 text-5xl font-bold text-center text-gray-900">
            Work
          </h1>
          <div className="h-full">
            {projects.map((project, i) => (
              <ProjectCard key={project.filePath} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const projects = projectFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { projects } };
}

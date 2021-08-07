import Layout from "@/components/Layout";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectPage() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-red-100 to-white">
        <div className="container">
          <h1 className="text-5xl font-bold text-gray-900 py-10 text-center">
            Work
          </h1>
          <div>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}

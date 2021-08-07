import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <div className="bg-gradient-to-b from-red-200 via-red-100 to-white mb-10 p-10 ">
      <div className="">
        <div className="container mx-auto">
          <h1 className="text-5xl font-medium text-gray-800 text-center mb-10">
            projects
          </h1>
          <div className="space-y-3">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}

import ProjectCard from './ProjectCard';

export default function FeaturedProjects() {
  return (
    <div className=" bg-gradient-to-b from-red-200 via-red-100 to-white">
      <div>
        <div className="container mx-auto">
          <h1 className="mb-10 text-5xl font-medium text-center text-gray-800">
            projects
          </h1>
          <div>
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

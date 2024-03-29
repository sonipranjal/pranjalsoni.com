import ProjectCard from './ProjectCard';

export default function FeaturedProjects({ projects }) {
  return (
    <div className="bg-gradient-to-b to-red-200 via-red-100 from-white">
      <div>
        <div className="container mx-auto">
          <h1 className="mb-10 text-5xl font-medium text-center text-gray-800">
            projects
          </h1>
          <div>
            {projects.map((project) => (
              <ProjectCard key={project.filePath} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

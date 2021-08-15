import { FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function ProjectCard({ project }) {
  const {
    data: { title, description, github_url, live_url, tags },
    filePath,
  } = project;

  const router = useRouter();

  const tagsArray = tags.split(', ');

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-full p-4 ">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center w-full bg-transparent border-2 border-gray-500 shadow-xl p-7 sm:p-10 md:px-24 lg:p-10 rounded-2xl">
              <div className="w-full h-full">
                <div className="pb-5">
                  <h1 className="text-2xl font-bold tracking-wide capitalize sm:text-3xl md:text-4xl">
                    {title}
                  </h1>
                </div>
                <div className="h-full mb-3 space-x-2">
                  {tagsArray.map((tag, i) => (
                    <span
                      key={i}
                      className="p-2 text-sm text-white bg-gray-900 rounded-lg sm:text-base lg:rounded-xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="py-0 mt-0">
                  <p className="text-gray-800 sm:text-lg">{description}</p>
                </div>
                <div className="flex flex-row space-x-3">
                  <div className="flex-1 sm:flex-none">
                    <button
                      className="z-10 w-full px-3 py-2 mt-4 text-xl font-medium text-white transition duration-300 ease-in-out bg-red-500 shadow-md lg:px-6 lg:py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 ring-offset-2 focus:bg-red-600 hover:text-red-600 hover:bg-white focus:text-white hover:ring-2 hover:ring-red-600"
                      onClick={() =>
                        router.push(
                          `/projects/${filePath.replace(/\.mdx?$/, '')}`
                        )
                      }
                    >
                      Details
                    </button>
                  </div>
                  <div className="hidden sm:block">
                    <button
                      className="px-3 py-2 mt-4 text-xl font-medium text-white transition duration-300 ease-in-out bg-red-500 shadow-md lg:px-6 lg:py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 ring-offset-2 focus:bg-red-600 hover:ring-2 hover:ring-red-600 hover:text-red-600 hover:bg-white focus:text-white"
                      onClick={() => window.open(live_url, '_blank')}
                    >
                      Live Demo
                    </button>
                  </div>
                  <div>
                    <button
                      className="px-3 py-2 mt-4 text-3xl font-medium text-white transition duration-300 ease-in-out bg-red-500 rounded-full shadow-md lg:px-6 hover:ring-2 hover:ring-red-600 lg:py-3 focus:outline-none focus:ring-2 focus:ring-red-600 ring-offset-2 focus:bg-red-600 hover:text-red-600 hover:bg-white focus:text-white"
                      onClick={() => window.open(github_url, '_blank')}
                    >
                      <FaGithub />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center sm:hidden">
                  <button
                    className="w-full px-3 py-2 mt-4 text-xl font-medium text-white transition duration-300 ease-in-out bg-red-500 shadow-md lg:px-6 lg:py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 ring-offset-2 focus:bg-red-600 hover:ring-2 hover:ring-red-600 hover:text-red-600 hover:bg-white focus:text-white"
                    onClick={() => window.open(live_url, '_blank')}
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

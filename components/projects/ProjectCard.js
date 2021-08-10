import { FaGithub } from "react-icons/fa";

export default function ProjectCard() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-full p-5">
          <div className="lg:col-span-2 lg:w-full">
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center bg-transparent border-2 border-gray-500 shadow-xl p-7 sm:p-10 md:px-24 lg:p-10 rounded-2xl">
                <div className="w-72 sm:w-full lg:w-full lg:h-full">
                  <div className="pb-5">
                    <h1 className="text-xl font-bold tracking-wide sm:text-2xl md:text-3xl lg:text-4xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                    </h1>
                  </div>
                  <div className="h-8 mb-3 space-x-3">
                    <span className="p-2 text-base text-white bg-gray-900 rounded-lg lg:rounded-xl ">
                      React Native
                    </span>
                    <span className="p-2 text-base text-white bg-gray-900 rounded-lg lg:rounded-xl ">
                      Firebase
                    </span>
                  </div>
                  <div className="py-0 mt-0">
                    <p className="text-gray-800 sm:text-lg">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Deleniti, harum quidem delectus rerum mollitia odit
                      dignissimos placeat pariatur vero ipsa. Facilis,
                      laboriosam
                    </p>
                  </div>
                  <div className="flex flex-row space-x-3">
                    <div>
                      <button className="px-3 py-2 mt-4 text-xl font-medium text-white transition duration-300 ease-in-out bg-red-500 lg:px-6 lg:py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 ring-offset-2 focus:bg-red-600">
                        Details
                      </button>
                    </div>
                    <div>
                      <button className="px-3 py-2 mt-4 text-xl font-medium text-white transition duration-300 ease-in-out bg-red-500 lg:px-6 lg:py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 ring-offset-2 focus:bg-red-600">
                        Live Demo
                      </button>
                    </div>
                    <div>
                      <button className="px-3 py-2 mt-4 text-3xl font-medium text-white transition duration-300 ease-in-out bg-red-500 rounded-full lg:px-6 lg:py-3 focus:outline-none focus:ring-2 focus:ring-red-600 ring-offset-2 focus:bg-red-600">
                        <FaGithub />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

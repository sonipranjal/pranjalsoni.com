import Image from "next/image";
import demoImage from "../../public/images/demoImage.png";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="p-5 w-full lg:grid lg:grid-cols-5 lg:items-center lg:justify-center">
          <div className="lg:col-span-2 lg:w-full">
            <div className="flex justify-center items-center">
              <div className="p-7 sm:p-10 md:px-24 lg:p-10 shadow-xl bg-transparent rounded-2xl flex flex-col items-center border-2 border-gray-500">
                <div className="w-72 sm:w-full lg:w-full lg:h-full">
                  <div className="pb-5">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  tracking-wide">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                    </h1>
                  </div>
                  <div className="space-x-3 h-8 mb-3">
                    <span className="bg-gray-900 text-white rounded-lg lg:rounded-xl p-2 text-base  ">
                      React Native
                    </span>
                    <span className="bg-gray-900 text-white rounded-lg lg:rounded-xl p-2 text-base ">
                      Firebase
                    </span>
                  </div>
                  <div className="py-0 mt-0">
                    <p className="sm:text-lg text-gray-800">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Deleniti, harum quidem delectus rerum mollitia odit
                      dignissimos placeat pariatur vero ipsa. Facilis,
                      laboriosam
                    </p>
                  </div>
                  <div className="flex flex-row space-x-3">
                    <div>
                      <button className="bg-red-500 text-white px-3 lg:px-6 py-2 lg:py-3 mt-4 rounded-xl transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 ring-offset-2 text-xl font-medium focus:bg-red-600">
                        Details
                      </button>
                    </div>
                    <div>
                      <button className="bg-red-500 text-white px-3 lg:px-6 py-2 lg:py-3 mt-4 rounded-xl transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 ring-offset-2 text-xl font-medium focus:bg-red-600">
                        Live Demo
                      </button>
                    </div>
                    <div>
                      <button className="bg-red-500 text-white px-3 lg:px-6 py-2 lg:py-3 mt-4 rounded-full transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 ring-offset-2 text-3xl font-medium focus:bg-red-600">
                        <FaGithub />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-3">
            <div className="w-full h-full shadow-xl z-10">
              <div className="">
                <Image
                  className="rounded-3xl"
                  src={demoImage}
                  alt="project"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

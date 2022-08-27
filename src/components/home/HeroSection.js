import Image from 'next/image';
import { AiOutlineArrowDown } from 'react-icons/ai';
import myPhoto from '../../../public/images/profile.jpeg';
import { useRouter } from 'next/router';

export default function HeroSection() {
  const router = useRouter();

  return (
    <div className="flex justify-center p-4 mt-6 md:mt-12">
      <div className="container md:my-3">
        <div className="md:grid md:grid-cols-3">
          <div className="flex items-center justify-center w-full h-full md:hidden">
            <div className="relative bg-black shadow-2xl w-60 h-60 ring ring-red-500 ring-offset-4 rounded-3xl">
              <Image
                className="rounded-3xl"
                placeholder="blur"
                src={myPhoto}
                layout="fill"
                alt="Pranjal"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center col-span-2 mt-10 md:mt-0 md:items-start">
            <div className="w-full">
              <h1 className="w-full text-3xl font-semibold tracking-wide text-center text-gray-900 md:text-4xl lg:text-5xl md:text-left">
                Hi
                <span className="mx-2">
                  <Image
                    alt="hi emoji"
                    src="/images/hii.png"
                    width={50}
                    height={50}
                  />
                </span>
                I am Pranjal, <br />
              </h1>
              <h1 className="w-full my-2 text-sm font-bold text-center text-red-500 sm:text-lg md:text-2xl lg:text-3xl md:text-left">
                Full Stack JavaScript Developer | Founder | Teacher
              </h1>
              <p className="max-w-3xl mt-4 text-lg text-center text-gray-700 md:text-left">
                I am a full stack developer with proficiency in NextJs, React,
                React-Native, Node, and all things JS. I am passionate about
                writing clean, efficient and professional code. I have a good
                understanding of Data Structures, Algorithms and UI Design.
                Always curious about new tech.
              </p>
              <div className="flex justify-center md:justify-start">
                <button
                  className="px-6 py-3 mt-4 text-xl font-medium text-white transition duration-300 ease-in-out transform bg-red-500 rounded-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-600 ring-offset-2 focus:bg-red-600"
                  onClick={() => router.push('/contact')}
                >
                  Contact Me!
                </button>
              </div>
            </div>
          </div>
          <div className="justify-end hidden w-full h-full mx-4 my-auto bg-transparent md:flex">
            <div className="flex justify-center w-full h-full bg-transparent">
              <div className="relative bg-transparent shadow-2xl ring ring-red-500 ring-offset-4 rounded-3xl w-96 h-96">
                <Image
                  className="object-cover rounded-3xl"
                  placeholder="blur"
                  src={myPhoto}
                  layout="fill"
                  alt="Pranjal"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center my-10 text-4xl text-red-500 transition animate-bounce md:hidden">
            <AiOutlineArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}

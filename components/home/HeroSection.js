import Image from 'next/image';
import { AiOutlineArrowDown } from 'react-icons/ai';
import myPhoto from '../../public/images/myphoto.jpg';
import { useRouter } from 'next/router';

export default function HeroSection() {
  const router = useRouter();

  return (
    <div className="flex justify-center mt-6 md:mt-12">
      <div className="container md:my-3">
        <div className="grid md:grid-cols-2">
          <div className="flex justify-center md:hidden">
            <div className="flex justify-center">
              <div className="rounded-full shadow-2xl">
                <Image
                  className="rounded-full"
                  placeholder="blur"
                  src={myPhoto}
                  width={200}
                  height={200}
                  alt="Pranjal"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-10 md:mt-0 md:items-start">
            <div className="w-10/12">
              <h1 className="w-full text-3xl font-semibold tracking-wide text-center text-gray-900 md:text-4xl lg:text-5xl md:text-left">
                Hi
                <span className="pr-2">
                  <Image
                    alt="hi emoji"
                    src="/images/hii.png"
                    width={50}
                    height={50}
                  />
                </span>
                <br /> I am Pranjal, <br />
                <span className="text-red-500">Web Developer</span>
              </h1>
              <p className="mt-4 text-lg text-center text-gray-700 md:text-left">
                I am a full stack developer with proficiency in React, Redux,
                Node, MongoDB, C++, and React Native. I am passionate about
                writing clean, efficient and professional code. I have a good
                understanding of Data Structures, Algorithms and UI Design.
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
          <div className="justify-end hidden my-auto md:flex">
            <div className="flex justify-center">
              <div className="rounded-full shadow-lg">
                <Image
                  className="rounded-full"
                  placeholder="blur"
                  src={myPhoto}
                  width={350}
                  height={350}
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

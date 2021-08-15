import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { FaArrowLeft } from 'react-icons/fa';
export default function NotFound() {
  const router = useRouter();
  return (
    <Layout>
      <div className="relative flex items-center justify-center min-h-screen p-5 mt-5 overflow-hidden bg-red-100 min-w-screen lg:p-20">
        <div className="relative items-center justify-center flex-1 min-w-full min-h-full p-10 text-center text-gray-800 bg-white shadow-xl rounded-3xl lg:p-20 md:flex md:text-center">
          <div className="w-full md:w-1/2">
            <div className="mb-10 font-light text-gray-600 md:mb-20">
              <h1 className="mb-10 text-3xl font-black text-red-500 uppercase lg:text-5xl">
                You seem to be lost!
              </h1>
              <p>The page you&apos;re looking for isn&apos;t available.</p>
              <p>Try searching again or use the Go Back button below.</p>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="flex items-center text-lg font-light text-red-500 transition-all transform outline-none focus:outline-none hover:scale-110 hover:text-red-600"
                onClick={() => router.push('/')}
              >
                <FaArrowLeft className="inline-block mr-2" /> Go Back
              </button>
            </div>
          </div>
        </div>
        <div className="absolute w-64 transform -rotate-45 bg-red-200 rounded-full pointer-events-none md:w-96 h-96 md:h-full bg-opacity-30 -top-64 md:-top-96 right-20 md:right-32"></div>
        <div className="absolute h-full transform -rotate-45 bg-red-200 rounded-full pointer-events-none w-96 bg-opacity-20 -bottom-96 right-64"></div>
      </div>
    </Layout>
  );
}

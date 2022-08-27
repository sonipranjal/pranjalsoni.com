import Link from 'next/link';

export default function BlogCard({ title, published_at, excerpt, slug }) {
  return (
    <div className="flex flex-row justify-center">
      <div className="justify-around w-full h-full p-4 my-5 overflow-hidden text-left transition duration-300 ease-in-out transform bg-white rounded-lg shadow-md h-90 lg:h-96 lg:w-11/12 sm:hover:scale-105 max-h-80 sm:max-h-52 lg:max-h-72">
        <div>
          <h1 className="mx-5 mb-3 text-lg font-bold tracking-wide text-gray-800 cursor-pointer sm:text-xl hover:underline">
            <Link href={`/${slug}`}>
              <a>{title.slice(0, 55)}...</a>
            </Link>
          </h1>
        </div>
        <div className="mx-5 my-3 text-sm text-gray-600 sm:text-base">
          <span>{new Date(published_at).toDateString()}</span>
          <span className="mx-2 md:m-3 lg::mx-5">|</span>
          <span>Next.js, Tailwind CSS</span>
        </div>
        <div className="mx-5">
          <p className="text-sm text-gray-900 sm:text-base">
            {excerpt && excerpt.slice(0, 250)}...
          </p>
        </div>
      </div>
    </div>
  );
}

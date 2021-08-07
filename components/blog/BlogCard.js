export default function BlogCard() {
  return (
    <div className="flex justify-center">
      <div className="w-10/12 h-full text-left bg-white p-4 rounded-lg shadow-md my-5 sm:hover:scale-105 transform transition ease-in-out duration-300">
        <div>
          <h1 className="text-xl md:text--2xl text-gray-800 font-semibold mx-5 mb-3 tracking-wide">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
            aperiam.
          </h1>
        </div>
        <div className="text-gray-600 mx-5 my-3 text-sm sm:text-base">
          <span>12 Feb 2020</span>
          <span className="mx-2 md:m-3 lg::mx-5">|</span>
          <span>Next.js, Tailwind CSS</span>
        </div>
        <div className="mx-5">
          <p className="text-gray-900 text-sm sm:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
            veniam Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Molestiae quis repellat ipsum iusto nisi, ex quo vitae architecto
            quae ea odit
          </p>
        </div>
      </div>
    </div>
  );
}

import BlogCard from "./BlogCard";

export default function RecentPosts() {
  return (
    <div className="w-full bg-gradient-to-b from-white via-red-100 to-red-200 flex justify-center items-center mt-10 h-full p-10">
      <div className="container flex justify-center flex-col">
        <h1 className="text-center text-5xl text-gray-800 font-medium">
          recent posts
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-content-center place-items-center h-full">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
}

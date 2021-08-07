import BlogCard from "@/components/blog/BlogCard";
import Layout from "@/components/Layout";

export default function BlogPage() {
  return (
    <div>
      <Layout>
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-red-100 to-white">
          <div className="container">
            <h1 className="text-5xl font-bold text-gray-900 py-10 text-center">
              My Blogs
            </h1>
            <div>
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

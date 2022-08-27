import BlogCard from 'src/components/blog/BlogCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AnimatePulse from 'src/components/blog/AnimatePulse';
import Layout from 'src/components/Layout';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get(
      `https://pranjalsoni.herokuapp.com/ghost/api/v3/content/posts/?key=${process.env.NEXT_PUBLIC_GHOST_API_URL}`
    );
    setPosts(res.data.posts);
    setLoading(false);
  };

  return (
    <div>
      <Layout>
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-white via-red-100 to-white">
          <div className="container">
            <h1 className="py-10 text-5xl font-bold text-center text-gray-900">
              My Blogs
            </h1>
            <div>
              {loading ? (
                <div className="grid h-full grid-cols-1 mb-5 gap-y-5 gap-x-20 lg:grid-cols-3 place-content-center place-items-center">
                  {[...Array(6)].map((id, idx) => (
                    <AnimatePulse key={idx} />
                  ))}
                </div>
              ) : (
                <div className="grid h-full grid-cols-1 lg:grid-cols-3 place-content-center place-items-center">
                  {posts.map(({ id, title, excerpt, published_at, slug }) => (
                    <BlogCard
                      key={id}
                      title={title}
                      excerpt={excerpt}
                      slug={slug}
                      published_at={published_at}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

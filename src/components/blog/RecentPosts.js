import BlogCard from './BlogCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AnimatePulse from './AnimatePulse';

export default function RecentPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        `https://pranjalsoni.herokuapp.com/ghost/api/v3/content/posts/?key=${process.env.NEXT_PUBLIC_GHOST_API_URL}`
      );
      setPosts(res.data.posts.slice(0, 3));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-white via-red-100 to-red-200">
      <div className="container flex flex-col justify-center">
        <h1 className="text-5xl font-medium text-center text-gray-800">
          recent posts
        </h1>
        {loading ? (
          <div className="flex flex-col items-center justify-center my-5 lg:space-y-0 lg:flex-row">
            {[...Array(3)].map((id, idx) => (
              <AnimatePulse key={idx} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 place-content-center place-items-center">
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
  );
}

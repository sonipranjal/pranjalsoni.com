import RecentPosts from '@/components/blog/RecentPosts';
import Layout from '@/components/Layout';
import NewsletterForm from '@/components/NewsletterForm';
import axios from 'axios';
import HtmlToReactParser from 'html-to-react';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const parser = HtmlToReactParser.Parser;
const htmlToReactParser = new parser();

const SingleBlogPage = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const { query, isReady } = useRouter();
  const { slug } = query;

  useEffect(() => {
    setLoading(true);
    if (!isReady) {
      return;
    }
    const fetchPost = async () => {
      const res = await axios.get(
        `https://pranjalsoni.herokuapp.com/ghost/api/v3/content/posts/slug/${slug}/?key=${process.env.NEXT_PUBLIC_GHOST_API_URL}`
      );
      setPost(res.data.posts[0]);
      setLoading(false);
    };
    fetchPost();
  }, [slug, isReady]);

  return (
    <Layout>
      <div className="flex flex-col items-center h-full">
        {loading ? (
          <div className="flex flex-col w-full h-full p-2 mx-10 mt-10 bg-white select-none sm:p-4 rounded-2xl sm:flex-row">
            <div className="flex flex-col items-center flex-1 sm:p-2">
              <div className="container flex flex-col flex-1 p-4">
                <div className="w-full mb-10 bg-red-200 h-28 animate-pulse rounded-2xl"></div>
                <div className="w-full bg-red-200 h-52 animate-pulse rounded-2xl"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full h-full p-2 mx-10 mt-10 bg-white sm:p-4 rounded-2xl sm:flex-row">
            <div className="flex flex-col items-center flex-1 sm:p-2">
              <div className="container flex flex-col items-center flex-1 p-4 prose lg:prose-xl">
                <h2 className="mb-5 rounded-2xl">{post.title}</h2>
                <div className="pt-4 rounded-2xl">
                  {htmlToReactParser.parse(post.html)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <RecentPosts />
      <NewsletterForm />
    </Layout>
  );
};

export default SingleBlogPage;

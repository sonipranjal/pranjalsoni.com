import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import TweetLayout from './TweetLayout';
import { BiLoaderCircle } from 'react-icons/bi';
import { toast, Toaster } from 'react-hot-toast';

const randomClasses = [
  'lg:-rotate-6',
  'lg:rotate-6  ',
  'lg:rotate-12  ',
  'lg:rotate-3 ',
  'lg:rotate-6  ',
];

const url = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

const LatestTweets = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({});
  const [nextToken, setNextToken] = useState('');
  const [loading, setLoading] = useState(false);
  const pageEndRef = useRef(null);

  const scrollToBottom = () => {
    pageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    (async function () {
      try {
        const fetchedTweets = await axios.get(`${url}/api/tweets`);
        const data = fetchedTweets.data;
        setTweets(data.data);
        setUser(data.includes.users[0]);

        setNextToken(data.meta.next_token);
      } catch (error) {
        console.error('Error fetching tweets');
      }
    })();
  }, []);

  const getNewTweets = async () => {
    setLoading(true);
    if (!nextToken) {
      setLoading(false);
      return toast.success('No more tweets');
    }
    try {
      const newTweets = await axios.get(
        `${url}/api/tweets?pagination_token=${nextToken}`
      );
      setTweets((preTweets) => [...preTweets, ...newTweets.data.data]);
      setNextToken(newTweets.data.meta.next_token);
      scrollToBottom();
    } catch (error) {
      console.error('Error fetching tweets');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Toaster />
      <div className="flex flex-row flex-wrap items-center justify-center w-full bg-gradient-to-br from-[#21D3F3] to-blue-600 my-5">
        {tweets &&
          tweets.map((tweet) => (
            <TweetLayout
              key={tweet.id}
              trasformClasses={
                randomClasses[Math.floor(Math.random() * randomClasses.length)]
              }
              {...tweet}
              {...user}
            />
          ))}
      </div>
      <button
        onClick={getNewTweets}
        className="flex items-center justify-center p-5 text-2xl font-medium transition-all bg-transparent cursor-pointer select-none ring-2 ring-[#21D3F3] rounded-xl w-fit active:scale-90"
      >
        <div
          ref={pageEndRef}
          className="bg-clip-text bg-gradient-to-br from-[#21D3F3] to-blue-600 text-transparent font-mono w-[300px] justify-center flex items-center transition delay-75"
        >
          {!loading ? (
            'Load More Tweets'
          ) : (
            <BiLoaderCircle className="text-3xl text-[#21D3F3] animate-spin" />
          )}
        </div>
      </button>
    </div>
  );
};

export default LatestTweets;

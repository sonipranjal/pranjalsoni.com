import Image from 'next/image';
import { useMemo } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { format } from 'date-fns';

const TweetLayout = ({
  created_at,
  text,
  trasformClasses,
  name,
  username,
  profile_image_url,
}) => {
  const createMarkup = () => {
    return {
      __html: text.replace(new RegExp('\n'), '<br/>'),
    };
  };

  useMemo(createMarkup, [text]);

  return (
    <div
      className={`flex select-none cursor-pointer justify-center min-w-[350px] m-2 max-w-2xl rounded-xl bg-transparent hover:z-10 transform hover:scale-110 transition delay-100 hover:rotate-0 ${trasformClasses}`}
    >
      <div className="relative z-10 w-10/12 p-5 shadow-xl rounded-2xl bg-gradient-to-br from-white to-blue-300">
        <div>
          <FaTwitter className="absolute text-2xl text-blue-500 top-5 right-5" />
        </div>
        <div className="flex flex-row my-2">
          <div className="mr-3">
            {profile_image_url && (
              <Image
                src={profile_image_url}
                className="rounded-full"
                alt="pranjal-twitter-profile-photo"
                width={50}
                height={50}
              />
            )}
          </div>
          <div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs text-gray-600">{username}</p>
          </div>
        </div>
        <div className="my-2">
          <p
            className="text-black"
            dangerouslySetInnerHTML={createMarkup()}
          ></p>
        </div>
        <div>
          <p className="text-xs text-gray-500">
            {format(new Date(created_at), 'p')} ·{' '}
            {format(new Date(created_at), 'PP')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TweetLayout;

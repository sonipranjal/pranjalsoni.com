import axios from 'axios';
import { useState } from 'react';
import Form from './Form';
import toast, { Toaster } from 'react-hot-toast';

export default function NewsletterForm() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [email, setEmail] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');

  const Subscribe = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/subscribe`,
      {
        email,
        first_name,
        last_name,
      }
    );
    return res.data;
  };

  const notify = (e) => {
    e.preventDefault();
    if (!email) return toast.error('email is required');
    if (!new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email))
      return toast.error('email is not valid');
    setIsDisabled(true);
    toast.promise(
      Subscribe(),
      {
        loading: 'Hang in there! Subscribing...',
        success: () =>
          `Thanks ${first_name && first_name}, check your mail to confirm!`,
        error: () => `Something went wrong`,
      },
      {
        style: {
          minWidth: '380px',
        },
      }
    );
    setIsDisabled(false);
  };

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex flex-col items-center p-4 rounded md:flex-row bg-gradient-to-r from-red-500 to-red-700 ">
        <div className="w-full px-10">
          <h2 className="text-2xl leading-8 tracking-widest text-white font-extralight sm:text-3xl sm:leading-9">
            i blog tech!
          </h2>
          <p className="mt-3 text-lg leading-6 text-white">
            It’s one thing to love to code, but it’s an entirely new level when
            you share what you know with others. I love to share my knowledge
            and learnings with others so that they can learn and be more
            effective programmers in their web development endeavors.
          </p>
        </div>
        <div className="w-full p-3">
          <div className="flex flex-col items-center rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <div className="flex-grow w-full">
              <Form
                first_name={first_name}
                last_name={last_name}
                email={email}
                setEmail={setEmail}
                setFirst_name={setFirst_name}
                setLast_name={setLast_name}
                notify={notify}
              />
              <button
                className="z-10 flex items-center justify-center w-full px-5 py-3 my-5 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-500 border border-transparent rounded-md hover:bg-white hover:text-red-700 focus:outline-none disabled:bg-red-900 disabled:text-red-50"
                type="submit"
                onClick={(e) => notify(e)}
                disabled={isDisabled}
              >
                Subscribe
              </button>
            </div>
            <hr />
            <p className="mt-3 text-sm text-white">
              By signing up, you agree to our Terms of Service, and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

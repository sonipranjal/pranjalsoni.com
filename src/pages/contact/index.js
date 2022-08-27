import Layout from 'src/components/Layout';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import axios from 'axios';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const sendMessage = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`,
      {
        email,
        name,
        message,
      }
    );
    return res.data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(true);
    setEmail('');
    setMessage('');
    setName('');
    toast.promise(
      sendMessage(),
      {
        loading: 'Sending your message...',
        success: () =>
          `Thanks you so much ${name && name}, I will get in touch soon!`,
        error: () => `Something went wrong`,
      },
      {
        style: {
          minWidth: '380px',
        },
      }
    );
  };
  return (
    <div>
      <Layout>
        <div className="flex items-center justify-center">
          <div className="container">
            <section className="relative text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col w-full mb-12 text-center">
                  <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
                    Coffee with me.
                  </h1>
                  <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                    I am always excited to work on some awesome projects,
                    message me and let&apos;s discuss over coffee.
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mx-auto lg:w-1/2 md:w-2/3">
                    <div className="flex flex-wrap -m-2">
                      <div className="w-1/2 p-2">
                        <div className="relative">
                          <label
                            htmlFor="name"
                            className="text-sm leading-7 text-gray-600"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required={true}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 p-2">
                        <div className="relative">
                          <label
                            htmlFor="email"
                            className="text-sm leading-7 text-gray-600"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200"
                          />
                        </div>
                      </div>
                      <div className="w-full p-2">
                        <div className="relative">
                          <label
                            htmlFor="message"
                            className="text-sm leading-7 text-gray-600"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required={true}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200"
                          ></textarea>
                        </div>
                      </div>
                      <div className="w-full p-2">
                        <button
                          className="flex px-8 py-2 mx-auto text-lg text-white transition duration-300 ease-in-out transform bg-red-500 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-red-600 text-medium disabled:bg-red-700"
                          type="submit"
                          disabled={isDisabled}
                        >
                          Send!
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
          <Toaster />
        </div>
      </Layout>
    </div>
  );
}

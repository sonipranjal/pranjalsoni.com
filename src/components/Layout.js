import Head from 'next/head';
import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ title, keywords, description, children }) => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Navbar />

      <div>{children}</div>

      <div
        className="fixed z-20 text-4xl duration-200 ease-in-out bg-red-600 rounded-md cursor-pointer scroll-to-top bottom-10 right-10 hover:scale-105 hover:bg-red-700"
        onClick={scrollToTop}
      >
        {visible && <IoIosArrowUp className="p-1 text-white " />}
      </div>

      <Footer />
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  title: 'Pranjal Portfolio',
  description: 'I am self taught software developer and a part time freelancer',
  keywords: 'web developer, programmer, react, mern',
};

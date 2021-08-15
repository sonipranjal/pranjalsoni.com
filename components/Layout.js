import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ title, keywords, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Navbar />

      <div>{children}</div>

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

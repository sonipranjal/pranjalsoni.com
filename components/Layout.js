import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import HeroSection from "./home/HeroSection";

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();
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
  title: "Pranjal Portfolio",
  description: "I am software engineer and a part time freelancer",
  keywords: "web developer, programmer, react, mern",
};

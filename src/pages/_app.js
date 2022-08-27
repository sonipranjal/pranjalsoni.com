import '../styles/globals.css';
import '../../public/nprogress.css';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const TopProgressBar = dynamic(
  () => {
    return import('src/components/TopProgressBar');
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

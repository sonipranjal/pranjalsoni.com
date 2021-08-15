import Layout from '@/components/Layout';

export default function Resume() {
  return (
    <Layout>
      <div className="flex items-center justify-center w-full mx-5 my-10 h-[450px] md:h-screen xl:h-[1000px]">
        <iframe
          src="https://drive.google.com/file/d/1uzzaWn-sVZsyAc_vkkopIrc8ZQMF8bXm/preview"
          className="w-full h-full md:w-10/12"
          allow="autoplay"
        ></iframe>
      </div>
    </Layout>
  );
}

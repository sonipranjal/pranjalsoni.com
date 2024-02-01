import Layout from '@/components/Layout';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
const items = [
  {
    title: 'VidToQuiz',
    description: 'Create Captivating Quizzes from Your Videos.',
    link: 'https://www.vidtoquiz.com/',
    logo: '/portfolio/logos/android-chrome-384x384.png',
    demoImage: '/portfolio/demoImages/dashboard.png',
  },
  {
    title: 'YTube',
    description: 'Transform YouTube Videos into SEO-Friendly Blogs',
    link: 'https://www.ytube.ai/',
    logo: '/portfolio/logos/ytube.svg',
    demoImage: '/portfolio/demoImages/yTube.webp',
  },
  {
    title: 'SeedBook',
    description:
      'Connect, Raise, Invest & Boost your startup all in one place.',
    link: 'https://www.seedbook.io/',
    logo: '/portfolio/logos/seedbook-logo.svg',
    demoImage: '/portfolio/demoImages/seedbook.png',
  },
  {
    title: 'Club Of Coders',
    description:
      'Club Of Coders is a platform that helps anyone learn how to code.',
    link: 'https://www.clubofcoders.com/',
    logo: '/portfolio/logos/clubofcoders.png',
    demoImage: '/portfolio/demoImages/clubofcoders.png',
  },
  {
    title: 'Vidblogs',
    description: 'Transform videos into blogs & threads with ease!',
    link: 'https://www.vidblogs.io/',
    logo: '/portfolio/logos/vidblogs.webp',
    demoImage: '/portfolio/demoImages/vidblogs.webp',
  },
];
const PortfolioPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center w-full mb-12'>
        <div className='relative flex items-end justify-center w-full bg-red-400 h-44'>
          <div className='absolute w-24 h-24 overflow-hidden rounded-full -bottom-12 '>
            <Image
              src={'/images/myphoto.jpg'}
              width={400}
              height={400}
              className='object-cover w-full h-full'
              alt='App logo'
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center mt-16 mb-4 space-y-2 text-lg'>
          <h2 className='text-2xl font-[500]'>Pranjal soni</h2>
          <p className='text-gray-600'>
            Welcome! This is my portfolio of apps.
          </p>
          <p className='text-gray-600'>Contact me at hello@pranjalsoni.com</p>
        </div>
        <a
          target='_blank'
          href='https://twitter.com/pranjalsoni_'
          rel='noreferrer'
        >
          <FaXTwitter className='text-2xl' />
        </a>
        <div className='w-full px-4 py-12 max-w-max xl:px-44'>
          <div className='grid w-full gap-12 md:grid-cols-2 2xl:grid-cols-3 place-items-center'>
            {items.map((item, index) => (
              <a
                href={item.link}
                className='w-full h-full transition-all duration-300 cursor-pointer hover:scale-105'
                key={index}
              >
                <div className='w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white h-[450px] rounded-3xl p-4'>
                  <div className='flex h-[20%] items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='w-16 h-16 overflow-hidden shadow-md rounded-xl'>
                        <Image
                          src={item.logo}
                          width={400}
                          height={400}
                          className='object-center w-full h-full'
                          alt='App logo'
                        />
                      </div>
                      <div>
                        <h2 className='text-lg'>{item.title}</h2>
                        <p className='text-sm text-gray-500'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <a
                      target='_blank'
                      href={item.link}
                      rel='noreferrer'
                      className='flex items-center p-1 px-2 space-x-2 text-blue-500 transition-all duration-300 rounded-full bg-slate-200 hover:scale-105'
                    >
                      Open <LiaExternalLinkAltSolid />
                    </a>
                  </div>
                  <div className='w-full mt-2 h-[80%] border border-slate-200 overflow-hidden rounded-xl '>
                    <Image
                      src={item.demoImage}
                      width={4000}
                      height={4000}
                      className='object-cover w-full h-full'
                      alt='App logo'
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioPage;

// ### Features

// 1. **Generate Blog:**

//    - Convert videos into high-quality text for an engaging learning experience.

// 2. **Generate Twitter Thread:**

//    -Transform PDFs, Docs, and Texts into captivating and dynamic interactive quizzes effortlessly.

// 3. **Generate Only Summary:**
//    - Efficiently create a versatile array of questions, optimizing your workflow and fostering efficiency in quiz creation.

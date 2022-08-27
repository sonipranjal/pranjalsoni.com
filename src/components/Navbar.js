import { Fragment, useEffect, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Resume', href: '/resume', current: false },
  // { name: "Blog", href: "/blog", current: false },
  { name: 'Contact', href: '/contact', current: false },
];

export default function Navbar() {
  const [currentNavigation, setCurrentNavigation] = useState(navigation);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') return;
    setCurrentNavigation((prev) => {
      return prev.map((nav) => {
        if (nav.href === router.pathname) {
          return { ...nav, current: true };
        }
        return { ...nav, current: false };
      });
    });
  }, [router.pathname]);

  console.log(currentNavigation);

  return (
    <Popover>
      {({ open }) => (
        <div className="flex justify-center font-cool">
          <div className="container relative px-5 pt-6 sm:px-0">
            <nav
              className="relative flex items-center justify-between sm:h-10"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full">
                  <Link href="/" passHref>
                    <span className="text-3xl font-semibold text-red-500 cursor-pointer select-none">
                      P
                    </span>
                  </Link>
                  <div className="flex items-center -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-red-500 bg-white rounded-md hover:text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                {currentNavigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      className={`font-medium  hover:text-red-500 ${
                        item.current ? 'text-red-500' : 'text-gray-900'
                      }`}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform md:hidden"
            >
              <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <Link href="/" passHref>
                    <span className="text-4xl font-semibold text-red-500 cursor-pointer">
                      P
                    </span>
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-red-500 bg-white rounded-md hover:text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {currentNavigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={`block px-3 py-2 text-base font-medium  rounded-md hover:text-white hover:bg-red-500 ${
                          item.current ? 'text-red-500' : 'text-gray-900'
                        }`}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
}

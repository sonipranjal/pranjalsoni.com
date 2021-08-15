import { FiMail } from 'react-icons/fi';
import {
  FaGithub,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
} from 'react-icons/fa';
import FooterImage from '../public/images/footerImage.jpeg';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Footer() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 mt-4 md:grid-cols-3 place-items-center">
        <div className="flex flex-col items-center w-full pb-3 text-gray-700 border-b-2 md:pb-0 md:my-0 md:border-0">
          <div>
            No <FaRegCopyright className="inline-block" /> copyright issues.
          </div>

          <p className="text-center">
            Feel free to copy. If you need any help, ping me !
          </p>
        </div>

        <div className="flex flex-col items-center w-full pb-3 my-4 text-gray-700 border-b-2 md:pb-0 md:my-0 md:border-0">
          <div>Pranjal Soni</div>
          <p>
            Made with <FaHeart className="inline-block text-red-600" /> in India
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="pb-2 text-gray-600">You can find me everywhere</p>
          <div className="flex space-x-10 text-4xl text-gray-900">
            <FaGithub
              onClick={() =>
                window.open('https://github.com/sonipranjal', '_blank')
              }
              className="transition duration-200 transform cursor-pointer hover:scale-110 hover:text-red-500"
            />
            <FaInstagram
              onClick={() =>
                window.open('https://instagram.com/pranjalsoni17', '_blank')
              }
              className="transition duration-200 transform cursor-pointer hover:scale-110 hover:text-red-500"
            />
            <FaLinkedin
              onClick={() =>
                window.open('https://linkedin.com/in/pranjalsoni', '_blank')
              }
              className="transition duration-200 transform cursor-pointer hover:scale-110 hover:text-red-500"
            />
            <FiMail
              onClick={() =>
                window.open('mailto:hello@pranjalsoni.com', '_blank')
              }
              className="transition duration-200 transform cursor-pointer hover:scale-110 hover:text-red-500"
            />
          </div>
        </div>
      </div>
      <Image src={FooterImage} alt="footer" />
    </div>
  );
}

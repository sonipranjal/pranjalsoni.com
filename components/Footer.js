import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center my-5">
      <div className="flex my-5 space-x-10 text-4xl text-gray-900">
        <FaGithub
          onClick={() =>
            window.open("https://github.com/sonipranjal", "_blank")
          }
          className="transition duration-200 transform cursor-pointer hover:scale-110 hover:text-red-500"
        />
        <FaInstagram
          onClick={() =>
            window.open("https://instagram.com/pranjalsoni17", "_blank")
          }
          className="transition duration-200 transform cursor-pointer hover:scale-110 hover:text-red-500"
        />
        <FaLinkedin
          onClick={() =>
            window.open("https://linkedin.com/in/pranjalsoni", "_blank")
          }
          className="transition duration-200 transform cursor-pointer hover:scale-110 hover:text-red-500"
        />
      </div>
      <p>This website is open sourced.</p>
    </div>
  );
}

import Link from 'next/link';
import {FaGithub, FaGitlab, FaLinkedin} from 'react-icons/fa';

export const Navbars = () => {
  return (
    <div className="font-main justify-center w-full lg:max-w-3xl mx-auto">
      <div className="sm:w-3/4 lg:w-full p-2 border border-base-text-color mt-5">
        <ul className="flex text-base-text-color justify-between px-5 items-center">
          <Link href="/welcome">
            <li className="text-2xl">Welcome</li>
          </Link>
          <Link href="/welcome">
            <li className="hidden lg:flex">Projects</li>
          </Link>
          <Link href="/welcome">
            <li className="hidden lg:flex">About me</li>
          </Link>
          <Link href="/welcome">
            <li className="hidden lg:flex">Contact me</li>
          </Link>
          <Link href="/welcome">
            <li className="hidden lg:flex">Exp</li>
          </Link>
        </ul>
      </div>
      <ul className="lg:flex flex-col h-1/4 fixed right-3 text-harder-text-color justify-between px-5 top-1/3 items-center">
        <Link href="/welcome">
          <FaGithub className="hidden lg:flex" size="2rem" />
        </Link>
        <Link href="/welcome">
          <FaGitlab className="hidden lg:flex" size="2rem" />
        </Link>
        <Link href="/welcome">
          <FaLinkedin className="hidden lg:flex" size="2rem" />
        </Link>
      </ul>
    </div>
  );
};

import Link from 'next/link';
import {FaGithub, FaGitlab, FaLinkedin} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {useState} from 'react';

export const Navbars = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="font-main justify-center w-full h-fit lg:max-w-3xl mx-auto">
      <div className=" flex flex-col md:flex-row lg:flex-row w-10/12 mx-auto justify-between md:mx-0 lg:mx-0 md:w-full lg:w-full p-2 border border-base-text-color mt-5">
        <div className="flex justify-between px-5">
          <Link href="/welcome">
            <h1 className="text-2xl text-base-text-color">Welcome</h1>
          </Link>
          <button
            className="text-base-text-color md:hidden lg:hidden"
            onClick={() => setMenuOpened(!menuOpened)}>
            <GiHamburgerMenu size="2rem" />
          </button>
        </div>

        <ul
          className={`inline-block md:flex md:w-2/3 lg:w-2/3 ${
            menuOpened ? 'inline-block' : 'hidden'
          } lg:flex text-base-text-color md:justify-between lg:justify-between px-5 items-center`}>
          <Link href="/welcome">
            <li className="md:flex lg:flex">Projects</li>
          </Link>
          <Link href="/welcome">
            <li className="md:flex lg:flex">About me</li>
          </Link>
          <Link href="/welcome">
            <li className="md:flex lg:flex">Contact me</li>
          </Link>
          <Link href="/welcome">
            <li className="md:flex lg:flex">Exp</li>
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

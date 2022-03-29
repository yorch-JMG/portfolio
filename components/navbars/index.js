import Link from 'next/link';
import {FaGithub, FaGitlab, FaLinkedin} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {motion} from 'framer-motion';
import {useState} from 'react';

export const Navbars = ({backgroundYellow}) => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="font-main justify-center w-full h-fit lg:max-w-3xl mx-auto">
      <div
        className={`flex flex-col md:flex-row lg:flex-row w-10/12 mx-auto justify-between md:mx-0 lg:mx-0 md:w-full lg:w-full p-2 border ${
          backgroundYellow ? 'black' : 'border-base-text-color'
        } mt-5`}>
        <div className={`flex justify-between px-5 ${
              backgroundYellow ? 'text-black font-bold' : 'text-base-text-color'}`}>
          <Link href="/welcome">
            <a href="#" className="text-2xl">
              Welcome
            </a>
          </Link>
          <button
            className={`${
              backgroundYellow ? 'black' : 'text-base-text-color'
            } md:hidden lg:hidden`}
            onClick={() => setMenuOpened(!menuOpened)}>
            <GiHamburgerMenu size="2rem" />
          </button>
        </div>

        <ul
          className={`md:flex md:w-2/3 lg:w-2/3 ${
            menuOpened ? 'flex flex-col' : 'hidden'
					} md:flex-row lg:flex-row ${backgroundYellow ? "text-black" : "text-base-text-color"}  md:justify-between lg:justify-between px-5 items-center text-xl`}>
          <Link href="/welcome">
            <motion.a
              href="#"
              whileHover={{scale: 1.05}}
              className="w-full md:flex lg:flex">
              About me
            </motion.a>
          </Link>
          <Link href="/projects">
            <motion.a
              href="#"
              whileHover={{scale: 1.05}}
              className="w-full md:flex lg:flex">
              Projects
            </motion.a>
          </Link>
          <Link href="/contact-me">
            <motion.a
              href="#"
              whileHover={{scale: 1.05}}
              className="w-full md:flex lg:flex">
              Contact me
            </motion.a>
          </Link>
        </ul>
      </div>
      <ul
        className={`lg:flex flex-col h-1/4 fixed right-3 ${
          backgroundYellow ? 'black' : 'text-harder-text-color'
        } justify-between px-5 top-1/3 items-center`}>
        <Link href="/welcome">
          <motion.a href="#" whileHover={{scale: 1.05}}>
            <FaGithub className="hidden lg:flex" size="2rem" />
          </motion.a>
        </Link>
        <Link href="/welcome">
          <motion.a href="#" whileHover={{scale: 1.05}}>
            <FaGitlab className="hidden lg:flex" size="2rem" />
          </motion.a>
        </Link>
        <Link href="/welcome">
          <motion.a href="#" whileHover={{scale: 1.05}}>
            <FaLinkedin className="hidden lg:flex" size="2rem" />
          </motion.a>
        </Link>
      </ul>
    </div>
  );
};

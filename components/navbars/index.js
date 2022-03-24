import {FaGithub, FaGitlab, FaLinkedin} from 'react-icons/fa';

export const Navbars = () => {
  return (
    <div className="font-main justify-center max-w-3xl mx-auto">
      <div className="w-full p-2 border border-base-text-color mt-5">
        <ul className="flex text-base-text-color justify-between px-5 items-center">
          <a href="/welcome">
            <li className="text-2xl">Welcome</li>
          </a>
          <a href="/welcome">
            <li>Projects</li>
          </a>
          <a href="/welcome">
            <li>About me</li>
          </a>
          <a href="/welcome">
            <li>Contact me</li>
          </a>
          <a href="/welcome">
            <li>Exp</li>
          </a>
        </ul>
      </div>
      <ul className="flex flex-col h-1/4 fixed right-0 text-harder-text-color justify-between px-5 top-1/3 items-center pl-2">
        <a href="/welcome">
          <FaGithub size="2rem" />
        </a>
        <a href="/welcome">
          <FaGitlab size="2rem" />
        </a>
        <a href="/welcome">
          <FaLinkedin size="2rem" />
        </a>
      </ul>
    </div>
  );
};

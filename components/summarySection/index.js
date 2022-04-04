import {FaLinux, FaWindows, FaReact} from 'react-icons/fa';
import {
  DiMysql,
  DiNodejs,
  DiPostgresql,
  DiDart,
  DiGo,
  DiJava,
  DiPython,
  DiRust,
  DiHaskell,
  DiPhp,
} from 'react-icons/di';
import { SiTypescript, SiJavascript, SiCsharp, SiTrello, SiJira, SiAmazonaws, SiGit, SiGraphql } from 'react-icons/si'

export const SummarySection = () => {
  return (
    <div className="w-full h-fit px-4 md:px-10 pb-12 lg:pb-0 lg:pt-8">
      <div className="py-7">
        <h1 className="text-base-text-color text-3xl font-bold pb-3">
          Summary
        </h1>
        <p className="text-base-text-color lg:text-xl">
          Hello, I&apos;m a software engineer that likes to learn new things and
          always seek to improve. Web development is the field I have actual
          work experience but I&apos;m always interested to explore other
          fields.
        </p>
      </div>
      <div className="text-harder-text-color py-5 mx-auto">
        <div className="py-2">
          <h4 className="text-base-text-color text-xl font-semibold text-center">
            Technologies
          </h4>
          <div className="flex space-x-3 justify-center pt-5">
            <FaReact size="3rem" />
            <DiNodejs size="3rem" />
            <SiGraphql size="3rem" />
            <DiMysql size="3rem" />
            <DiPostgresql size="3rem" />
          </div>
        </div>
      </div>
      <div className="text-harder-text-color py-5 mx-auto space-y-2">
        <div className="py-2">
          <h4 className="text-base-text-color text-xl font-semibold text-center">
            Programming languages
          </h4>
          <h2 className="text-base-text-color lg:text-xl text-center pt-2">
            (Most experience with the language down to basic knowledge)
          </h2>
          <div className="flex space-x-3 justify-center pt-5">
            <SiJavascript size="3rem" />
            <SiTypescript size="3rem" />
            <DiJava size="3rem" />
            <DiPython size="3rem" />
            <DiGo size="3rem" />
            <DiRust size="3rem" />
            <SiCsharp size="3rem" />
            <DiDart size="3rem" />
            <DiHaskell size="3rem" />
            <DiPhp size="3rem" />
          </div>
        </div>
      </div>
      <div className="text-harder-text-color py-5 mx-auto">
        <h4 className="text-base-text-color text-xl font-semibold text-center">
					Project management tools
        </h4>
        <div className="flex space-x-3 justify-center pt-5">
            <SiGit size="3rem" />
            <SiJira size="3rem" />
            <SiAmazonaws size="3rem" />
            <SiTrello size="3rem" />
        </div>
      </div>
      <div className="text-harder-text-color py-5 mx-auto">
        <h4 className="text-base-text-color text-xl font-semibold text-center">
          Operating systems I&apos;m experienced with
        </h4>
        <div className="flex space-x-3 justify-center pt-5">
          <FaLinux size="3rem" />
          <FaWindows size="3rem" />
        </div>
      </div>
    </div>
  );
};

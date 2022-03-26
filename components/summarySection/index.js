import {FaLinux, FaWindows, FaReact} from 'react-icons/fa';
import {
  DiMysql,
  DiNodejs,
  DiPostgresql,
  DiDart,
  DiGo,
  DiJava,
  DiJavascript,
  DiPython,
  DiRust,
  DiHaskell,
  DiPhp,
  DiAws,
  DiGit,
  DiJira,
  DiTrello,
} from 'react-icons/di';
export const SummarySection = () => {
  return (
    <div className="w-full h-fit px-4 pt-8">
      <div className="py-5">
        <h3 className="text-base-text-color text-3xl font-bold pb-3">
          Summary
        </h3>
        <p className="text-base-text-color text-xl">
          Hello, I'm a software engineer that likes to learn new things and
          always seek to improve. Web development is the field I have actual
          work experience but I'm always interested to explore other fields.
        </p>
      </div>
      <div className="text-harder-text-color pt-5 mx-auto">
        <div className="py-2">
          <h4 className="text-base-text-color text-xl font-semibold text-center">
            Technologies
          </h4>
          <div className="flex space-x-3 justify-center pt-5">
            <FaReact size="3rem" />
            <DiNodejs size="3rem" />
            <DiMysql size="3rem" />
            <DiPostgresql size="3rem" />
            <DiGit size="3rem" />
            <DiAws size="3rem" />
            <DiJira size="3rem" />
            <DiTrello size="3rem" />
          </div>
        </div>
      </div>
      <div className="text-harder-text-color pt-5 mx-auto space-y-2">
        <div className="py-2">
          <h4 className="text-base-text-color text-xl font-semibold text-center">
            Programming languages
          </h4>
          <h2 className="text-base-text-color text-xl text-center pt-2">
            (Most experience with the language down to basic knowledge)
          </h2>
          <div className="flex space-x-3 justify-center pt-5">
            <DiJavascript size="3rem" />
            <DiJava size="3rem" />
            <DiPython size="3rem" />
            <DiRust size="3rem" />
            <DiGo size="3rem" />
            <DiDart size="3rem" />
            <DiHaskell size="3rem" />
            <DiPhp size="3rem" />
          </div>
        </div>
      </div>
      <div className="text-harder-text-color pt-5 mx-auto">
        <h4 className="text-base-text-color text-xl font-semibold text-center">
          Operating systems I'm experienced with
        </h4>
        <div className="flex space-x-3 justify-center pt-5">
          <FaLinux size="3rem" />
          <FaWindows size="3rem" />
        </div>
      </div>
    </div>
  );
};
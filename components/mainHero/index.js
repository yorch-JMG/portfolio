import {useState} from 'react';

export const MainHero = ({ref}) => {
  const [showCursor, setShowCursor] = useState(true);
  setTimeout(() => {
    setShowCursor(!showCursor);
  }, 1000);
  return (
    <div
      ref={ref}
      className="lg:flex w-full justify-center lg:justify-between pt-5 lg:pt-10 px-10 items-center">
      <div className="lg:w-1/2 space-y-2">
        <h1 className="text-3xl lg:text-5xl text-center lg:text-left font-extrabold text-base-text-color">
          Jorge M
        </h1>
        <p className="text-xl lg:text-3xl text-center lg:text-left text-harder-text-color">
          Software Engineer
        </p>
      </div>
      <div className="flex items-center justify-center space-x-1 lg:justify-between w-full lg:w-1/3">
        <h2 className="text-4xl lg:text-5xl text-center lg:text-left font-extrabold text-base-text-color">
          Web Dev
        </h2>
        {showCursor && (
					<div className="bg-base-text-color w-3 h-10 lg:right-0 hidden lg:visible" />
        )}
      </div>
    </div>
  );
};

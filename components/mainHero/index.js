import {useState} from 'react';

export const MainHero = ({ref}) => {
  const [showCursor, setShowCursor] = useState(true);
  setTimeout(() => {
    setShowCursor(!showCursor);
  }, 1000);
  return (
    <div ref={ref} className="flex w-full justify-between pt-10 px-10 items-center">
      <div className="w-1/2 space-y-2">
        <h1 className="text-5xl font-extrabold text-base-text-color">
          Jorge M
        </h1>
        <p className="text-3xl text-harder-text-color">Software Engineer</p>
      </div>
      <div className="flex items-center justify-between w-1/3">
        <h2 className="text-5xl font-extrabold text-base-text-color">
          Web Dev
        </h2>
        {showCursor && <div className="bg-base-text-color w-3 h-10 right-0" />}
      </div>
    </div>
  );
};

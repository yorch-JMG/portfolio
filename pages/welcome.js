import {Navbars} from '../components/navbars';
import {motion} from 'framer-motion';
import {useState} from 'react';

export default function Welcome() {
  const [showCursor, setShowCursor] = useState(true);
  setTimeout(() => {
    setShowCursor(!showCursor);
  }, 1000);
  return (
    <div className="max-w-3xl mx-auto z-20">
      <Navbars />
      <div className="flex w-full justify-between pt-5 px-10 items-center">
        <div className="w-1/2">
          <h1 className="text-3xl font-extrabold text-base-text-color">
            Jorge M
          </h1>
          <p className="text-harder-text-color">Software Engineer</p>
        </div>
        <div className="flex items-center justify-between w-1/3">
          <h2 className="text-5xl font-extrabold text-base-text-color">
            Web Dev
          </h2>
          {showCursor && (
            <div className="bg-base-text-color w-3 h-10 right-0" />
          )}
        </div>
      </div>
    </div>
  );
}

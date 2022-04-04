import {Navbars} from '../components/navbars';
import {motion} from 'framer-motion';
export default function ContactMe() {
  return (
    <div className="relative z-10 h-screen overflow-hidden">
      <Navbars />
      <div className="pt-10 md:pt-20 lg:pt-25 flex h-fit">
        <div className="text-base-text-color flex flex-col w-full items-center px-3 space-y-4">
          <h2 className="text-7xl font-extrabold px-5 font-main pb-5">
            Contact me
          </h2>
          <div className="pt-4 pb-8 md:pb-3 lg:pb-3 md:pt-3 lg:pt-3 flex flex-col w-full md:w-3/5 px-3 md:px-3 lg:px-3 space-y-3 bg-background rounded-md">
            <input
              className="px-3 py-2 border border-base-text-color bg-background text-base-text-color font-main placeholder-base-text-color rounded-sm"
              type="text"
              placeholder="Enter your name"></input>
            <input
              className="px-3 py-2 border border-base-text-color bg-background text-base-text-color font-main placeholder-base-text-color rounded-sm"
              type="email"
              placeholder="Enter your email"></input>
            <textarea
              className="px-3 py-2 border border-base-text-color bg-background text-base-text-color   font-main placeholder-base-text-color rounded-sm"
              type="text"
              rows="5"
              placeholder="Tell me about it"></textarea>
          </div>
          <motion.button
            whileHover={{scale: 1.01}}
            whileTap={{scale: 0.94}}
            className="p-3 w-full md:w-2/5 border-2 border-base-text-color text-base-text-color rounded-md hover:bg-background hover:text-harder-text-color hover:border-harder-text-color">
            Submit
          </motion.button>
        </div>
      </div>
    </div>
  );
}

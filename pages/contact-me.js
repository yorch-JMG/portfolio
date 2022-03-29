import {Navbars} from '../components/navbars';
import {motion} from 'framer-motion';
export default function ContactMe() {
  return (
    <div className="max-w-3xl mx-auto z-20">
      <Navbars />
      <div className="pt-5 flex h-fit">
        <div className="text-base-text-color flex flex-col w-full items-center px-3">
          <h2 className="text-7xl font-extrabold px-5 font-main">Contact me</h2>
          <div className="pt-8 flex flex-col w-full space-y-3">
            <input
              className="px-3 py-2 bg-base-text-color text-background font-main placeholder-background rounded-sm"
              type="text"
              placeholder="Enter your name"></input>
            <input
              className="px-3 py-2 bg-base-text-color text-background font-main placeholder-background rounded-sm"
              type="email"
              placeholder="Enter your email"></input>
            <textarea
              className="px-3 py-2 bg-base-text-color text-background font-main placeholder-background rounded-sm"
              type="text"
              rows="5"
              placeholder="Tell me about it"></textarea>
            <motion.button
              whileHover={{scale: 1.08}}
              whileTap={{scale: 0.94}}
              className="p-3 border border-base-text-color rounded-sm hover:bg-base-text-color hover:text-background hover:border-background">
              Submit
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

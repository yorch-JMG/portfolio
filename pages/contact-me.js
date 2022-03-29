import {Navbars} from '../components/navbars';
import {motion} from 'framer-motion';
export default function ContactMe() {
  return (
    <div className="relative z-10 h-screen overflow-hidden">
      <div className="absolute flex md:hidden lg:hidden w-96 h-96 bg-harder-text-color rounded-full mix-blend-multiply filter blur-lg opacity-95 animate-blob" />
      <div className="absolute -top-7 flex md:hidden lg:hidden w-96 h-96 bg-harder-text-color rounded-full mix-blend-multiply filter blur-lg opacity-95 animate-blob" />
      <div className="absolute right-52 -top-5 flex md:hidden lg:hidden w-96 h-96 bg-harder-text-color rounded-full mix-blend-multiply filter blur-lg opacity-95 animate-blob" />
      <div className="absolute left-52 -top-5 flex md:hidden lg:hidden w-96 h-96 bg-harder-text-color rounded-full mix-blend-multiply filter blur-lg opacity-95 animate-blob" />

      <div className="absolute bottom-1/3 flex md:hidden lg:hidden w-96 h-96 bg-harder-text-color rounded-full mix-blend-multiply filter blur-lg opacity-95 animate-blob" />
      <div className="absolute bottom-1/3 flex md:hidden lg:hidden w-96 h-96 bg-harder-text-color rounded-full mix-blend-multiply filter blur-lg opacity-95 animate-blob" />
      <div className="absolute bottom-1/3 right-52 flex md:hidden lg:hidden w-96 h-96 bg-harder-text-color rounded-full mix-blend-multiply filter blur-lg opacity-95 animate-blob" />
      <div className="absolute bottom-1/3 left-52 flex md:hidden lg:hidden w-96 h-96 bg-harder-text-color rounded-full mix-blend-multiply filter blur-lg opacity-95 animate-blob" />

      <div className="absolute bottom-3 flex md:hidden lg:hidden w-96 h-96 bg-harder-text-color rounded-full mix-blend-multiply filter blur-sm opacity-95 animate-blob" />
      <div className="absolute bottom-3 flex md:hidden lg:hidden w-96 h-96 bg-harder-text-color rounded-full mix-blend-multiply filter blur-sm opacity-95 animate-blob" />
      <div className="absolute bottom-3 right-52 flex md:hidden lg:hidden w-96 h-96 bg-harder-text-color rounded-full mix-blend-multiply filter blur-sm opacity-95 animate-blob" />
      <div className="absolute bottom-3 left-52 flex md:hidden lg:hidden w-96 h-96 bg-harder-text-color rounded-full mix-blend-multiply filter blur-sm opacity-95 animate-blob" />

      <div className="absolute right-3/4 hidden md:flex lg:flex w-screen h-screen bg-harder-text-color rounded-full mix-blend-multiply filter blur-sm opacity-90 animate-blob" />
      <div className="absolute right-72 hidden md:flex lg:flex w-screen h-screen bg-harder-text-color rounded-full mix-blend-multiply filter blur-sm opacity-90 animate-blob" />
      <div className="absolute left-72 hidden md:flex lg:flex w-screen h-screen bg-harder-text-color rounded-full mix-blend-multiply filter blur-sm opacity-90 animate-blob" />
      <div className="absolute left-3/4 hidden md:flex lg:flex w-screen h-screen bg-harder-text-color rounded-full mix-blend-multiply filter blur-sm opacity-90 animate-blob" />
      <div className="max-w-3xl mx-auto z-20 relative">
        <Navbars backgroundYellow={true} />
        <div className="pt-10 md:pt-20 lg:pt-25 flex h-fit">
          <div className="text-black flex flex-col w-full items-center px-3 space-y-4">
            <h2 className="text-7xl font-extrabold px-5 font-main pb-5">
              Contact me
            </h2>
            <div className="pt-4 pb-8 md:pb-3 lg:pb-3 md:pt-3 lg:pt-3 flex flex-col w-full px-3 md:px-3 lg:px-3 space-y-3 bg-background rounded-md">
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
              className="p-3 w-full border-2 border-background text-background rounded-md hover:bg-background hover:text-harder-text-color hover:border-harder-text-color">
              Submit
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

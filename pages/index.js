import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
      router.push('/welcome');
    }, 1900);
  });

  return (
    <div className="h-screen flex">
      <AnimatePresence>
        {showAnimation && (
          <>
            <motion.div
              className="w-32 h-32 bg-base-text-color rounded-sm m-auto"
              initial={{opacity: 1}}
              animate={{rotate: 360}}
              transition={{
                type: 'spring',
                ease: 'linear',
                duration: 1,
                repeat: 2,
              }}
              exit={{opacity: 0}}
            />
            <motion.div
              className="w-32 h-32 bg-base-text-color rounded-sm m-auto"
              initial={{opacity: 1}}
              animate={{rotate: 360}}
              transition={{
                type: 'spring',
                ease: 'linear',
                duration: 1,
                repeat: 2,
              }}
              exit={{opacity: 0}}
            />
            <motion.div
              className="w-32 h-32 bg-base-text-color rounded-sm m-auto"
              initial={{opacity: 1}}
              animate={{rotate: 360}}
              transition={{
                type: 'spring',
                ease: 'linear',
                duration: 1,
                repeat: 2,
              }}
              exit={{opacity: 0}}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

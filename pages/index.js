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
    }, 2000);
  });

  return (
    <div className="h-screen flex">
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            className="w-20 h-20 bg-base-text-softer-rose rounded-sm m-auto"
            animate={{rotate: 360}}
            transition={{
              type: 'spring',
              ease: 'linear',
              bounce: 0.5,
              duration: 2,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

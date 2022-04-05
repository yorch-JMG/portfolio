import '../styles/globals.css';
import {motion} from 'framer-motion';
import Head from 'next/head';

function MyApp({Component, pageProps, router}) {
  return (
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}>
      <Head>
        <title>My portfolio</title>
      </Head>
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;

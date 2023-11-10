import styles from './style.module.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

// Fisher-Yates shuffle algorithm to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const words = [
  'Namaste! 🙏',
  'Hello',
  'Hola',
  'Bonjour',
  'Olá',
  'Ni Hao',
  'Ciao',
  'Salam',
  'Shalom!',
];

export default function Index() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [shuffledWords, setShuffledWords] = useState([]);

  useEffect(() => {
    setShuffledWords(shuffleArray([...words])); // Shuffle the array of words
    setLoading(true); // Reset loading state
    setIndex(0); // Reset index to 0
  }, []);

  useEffect(() => {
    if (index === shuffledWords.length - 1) {
      setLoading(false); // Hide the preloader when all words are displayed
      return;
    }

    const timeoutDuration = index === 0 ? 1000 : 500;
    const timer = setTimeout(() => {
      setIndex(index + 1);
    }, timeoutDuration);
    return () => clearTimeout(timer);
  }, [index, shuffledWords]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const loaderBars = document.querySelectorAll("#loaderbars");
      const tl = gsap.timeline();

      tl.to(loaderBars, {
        height: 0,
        duration: 0.6,
        delay: 5.3,
        ease: "power2.easeIn",
        stagger: 0.1,
      }).to("#loader", {
        y: "-1500",
        opacity: 0,
        ease: "power2.inOut",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.preloader} id='loader'>
      <>
        {loading ? ( // Display words only when loading is true
          <motion.p
            className='preloaderWords'
            key={index}
            variants={{
              initial: {
                opacity: 0,
              },
              enter: {
                opacity: 1,
                transition: { duration: 0.2, delay: 0.2 }, // Control the duration of fade-in
              },
              exit: {
                opacity: 0,
                transition: { duration: 0.2 }, // Control the duration of fade-out
              },
            }}
            initial="initial"
            animate="enter"
          >
            {shuffledWords[index]}
          </motion.p>
        ) : null}
        <div className={styles.mainLoaderBg}>
          <span className={styles.mainLoaderBar} id='loaderbars'></span>
          <span className={styles.mainLoaderBar} id='loaderbars'></span>
          <span className={styles.mainLoaderBar} id='loaderbars'></span>
          <span className={styles.mainLoaderBar} id='loaderbars'></span>
          <span className={styles.mainLoaderBar} id='loaderbars'></span>
        </div>
      </>
    </div>
  );
}

import React from 'react';
import styles from './styles.module.css';
import { XIcon } from 'lucide-react';
import Image from 'next/image';

export default function Modal ({ term, onClose }) {

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-[200] h-screen w-screen flex items-center justify-center bg-[#00000080] backdrop-blur-md bg-opacity-40" onClick={onClose}>
      <div className={`${styles.modalContent} bg-white dark:bg-white2`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContentHead}>
          <div className={styles.modalImage}>
            <Image src={term.icon} alt='glossary image' title='glossary image' height={150} width={150} />
          </div>
          <h3>{term.name}</h3>
        </div>
        <div data-lenis-prevent className={styles.modalContentPara} id='my-modal-scroll'>
          {term.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.modalClose}>
          <button onClick={onClose}>
            <XIcon className='w-10 h-10'/>
          </button>
        </div>
      </div>
    </div>
  );
};
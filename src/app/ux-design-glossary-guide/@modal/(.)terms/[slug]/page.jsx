import { Modal } from "./modal";
import Data from '@/components/uxGlossary/Data.json';
import styles from "@/components/uxGlossary/styles.module.css";
import Image from "next/image";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export default async function PhotoModal({ params }) {
  const slug = (await params).slug;

  const term = Data.terms.find((term) => slugify(term.sName) === slug);

  return (
    <Modal>
      <div className={styles.modalContentHead}>
        <div className={styles.modalImage}>
          <Image src={term.icon} alt='glossary image' title='glossary image' height={150} width={150} />
        </div>
        <h3 className="text-black">{term.name}</h3>
      </div>
      <div data-lenis-prevent className={styles.modalContentPara} id='my-modal-scroll'>
        {term.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Modal>
  )
}

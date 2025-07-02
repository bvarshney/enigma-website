'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { useLenisFunctions } from '@/lib/utils';
import { XIcon } from 'lucide-react';

export function Modal({ children }) {
  const router = useRouter();
  const dialogRef = useRef(null);
  const { startLenis, stopLenis } = useLenisFunctions();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      stopLenis();
    }
  }, []);

  function onDismiss() {
    router.back();
    startLenis();
  }

  return createPortal(
    <div className="modal-backdrop fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[200] backdrop-blur-md duration-300">
      <dialog ref={dialogRef} className="modal w-1/2 m-auto tablet:w-full mobile:w-full h-[85%] overflow-hidden border-none rounded-lg bg-white dark:bg-white2 p-[60px] mobile:p-[40px] relative" onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} className="close-button absolute top-[15px] right-[15px]">
          <XIcon className="w-10 h-10 dark:invert" />
        </button>
      </dialog>
    </div>,
    document.getElementById('modal-root')
  );
}

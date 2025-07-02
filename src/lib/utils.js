import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { useLenis } from "lenis/react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function useLenisFunctions() {
  const lenis = useLenis();

  function startLenis() {
    lenis.start();
  }

  function stopLenis() {
    lenis.stop();
  }

  return { startLenis, stopLenis };
}


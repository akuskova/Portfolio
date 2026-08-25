import { useEffect } from "react";

export function useLockScroll() {
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');

    const apply = () => {
      document.body.style.overflow = mql.matches ? 'hidden' : '';
    };

    apply();                              // set initial state
    mql.addEventListener('change', apply); // update if user resizes

    return () => {
      mql.removeEventListener('change', apply);
      document.body.style.overflow = '';   // always restore on unmount
    };
  }, []);
}
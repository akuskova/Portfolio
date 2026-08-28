import { useEffect } from "react";

export function useLockScroll() {
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');

    const apply = () => {
      document.body.style.overflow = mql.matches ? 'hidden' : '';
    };

    apply();
    mql.addEventListener('change', apply);

    return () => {
      mql.removeEventListener('change', apply);
      document.body.style.overflow = '';
    };
  }, []);
}
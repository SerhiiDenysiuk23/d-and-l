import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useAnchorScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [pathname, hash]);
}
import {useEffect, useState} from 'react';

const useScrollToTop = ({clientY}: {clientY: number}) => {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > clientY) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return {
    onScrollTopTop: scrollToTop,
    showScroll,
  };
};

export default useScrollToTop;

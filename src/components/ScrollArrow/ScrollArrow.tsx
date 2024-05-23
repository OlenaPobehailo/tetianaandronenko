'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import css from './ScrollArrow.module.css';

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    const checkScrollDirection = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (!showScroll && scrollTop > 400) {
        setShowScroll(true);
      } else if (showScroll && scrollTop <= 400) {
        setShowScroll(false);
      }

      setScrollDirection(scrollTop > 100 ? 'up' : 'down');
    };

    window.addEventListener('scroll', checkScrollDirection);

    return () => window.removeEventListener('scroll', checkScrollDirection);
  }, [showScroll]);

  const handleScroll = () => {
    if (scrollDirection === 'up') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className={`${css.scrollArrow} ${scrollDirection === 'up' ? css.upArrow : css.downArrow}`}
      onClick={handleScroll}
    >
      {scrollDirection === 'up' ? <FaArrowUp /> : <FaArrowDown />}
    </div>
  );
};

export default ScrollArrow;

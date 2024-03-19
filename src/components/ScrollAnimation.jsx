import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation= ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  // Function to check if an element is in the viewport
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Function to add animation class when element is in viewport
  const addAnimationWhenVisible = () => {
    if (isElementInViewport(boxRef.current)) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    // Check for animation when the component mounts and when it's scrolled
    addAnimationWhenVisible();
    window.addEventListener('scroll', addAnimationWhenVisible);
    return () => {
      window.removeEventListener('scroll', addAnimationWhenVisible);
    };
  }, []); // Run this effect only once when the component mounts

  return (
    <div ref={boxRef} className={`box ${isVisible ? 'scrollAnimation' : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default ScrollAnimation;

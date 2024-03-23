
import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const customCursor = document.querySelector('.custom-cursor');
      if (customCursor) {
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ width: '20px', height: '20px', position: 'fixed', zIndex: '9999' }}></div>
  );
};

export default CustomCursor;

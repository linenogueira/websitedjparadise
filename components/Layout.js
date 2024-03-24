
// components/Layout.js
import React, { useEffect, useState } from 'react';


const audioFiles = [
  '/audio/My G.mp3',
  '/audio/olivetheboy - GoodSin myfreemp3.vip.mp3',
  '/audio/Blessed.mp3',
  '/audio/Drift Remix (Dirty).mp3'

];

const Layout = ({ children }) => {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  useEffect(() => {
    const audio = document.getElementById('background-music');

    const handleAudioEnd = () => {
      setCurrentAudioIndex((prevIndex) => (prevIndex + 1) % audioFiles.length);
    };

    audio.src = audioFiles[currentAudioIndex];
    audio.addEventListener('ended', handleAudioEnd);

    return () => {
      audio.removeEventListener('ended', handleAudioEnd);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAudioIndex]);

  useEffect(() => {
    const audio = document.getElementById('background-music');
    audio.play();
  }, [currentAudioIndex]);

  return (
    <>
     
      <div className="layout">
        {/* Outros elementos do layout */}
        {children}
      </div>
    </>
  );
};

export default Layout;

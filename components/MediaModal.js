import React from 'react';

const MediaModal = ({ src, onClose }) => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75 z-50">
      <div className="bg-white rounded-lg p-8 max-w-screen-md w-full flex flex-col items-center justify-center" style={{ zIndex: 1001 }}>
        {src.endsWith('.jpg') ? (
          <img alt="Fullscreen" src={src} className="max-h-full max-w-full object-cover" />
        ) : (
          <video controls className="max-h-full max-w-full object-cover">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <button className="mt-4 text-3xl font-bold cursor-pointer" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default MediaModal;



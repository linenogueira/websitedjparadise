import React, { useState, useEffect } from 'react';
import MediaModal from '../components/MediaModal';
import Router from 'next/router';

const Home = () => {
  const mediaPaths = [

    '/images/action/photo10.jpg',
    '/images/action/photo9.jpg',
    '/images/action/photo8.jpg',
    '/images/action/photo7.jpg',
    '/images/action/photo6.jpg',
    '/images/action/photo2.jpg',
    '/images/action/photo5.jpg',
    '/images/action/photo1.jpg',
    '/images/action/photo4.jpg',
    '/images/action/photo3.jpg',
    '/images/videos/number1.mp4',
    '/images/videos/number2.mp4',
    '/images/videos/number3.mp4',
    '/images/videos/number4.mp4',
    '/images/videos/number5.mp4',
    '/images/videos/number6.mp4',
    '/images/videos/number7.mp4',
    '/images/videos/number8.mp4',
  ]
  const [fullscreenSrc, setFullscreenSrc] = useState(null);
 

  

  useEffect(() => {
    const handleRouteChange = () => {
      const audio = document.getElementById('background-music');
      audio.play();
    };

    Router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <>
  
  <div className="background-container">
  <img
    src="/images/background-more/fundo1.png"
    alt="Background Image 1"
    className="background-image"
  />
</div>
      <div className="background-containerfundo"></div>

      <div className="relative">
        <div className="flex flex-col lg:flex-row justify-between w-full p-40 px-30 items-center h-full">
          <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-6  w-full">
            <div className="flex items-center"></div>
          </div>
          <div className="order-first lg:order-last flex-shrink-0 lg:w-[800px] h-[100px] ml-auto">
      
          </div>
        </div>
        <br></br>
      </div>

      <div className="py-200">
      <p className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold ">CATCH ME IN ACTION</p>
        <div className= "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 gap-8 mt-8 ">
          {mediaPaths.map((mediaPath, index) => {
            const isImage = mediaPath.endsWith('.jpg');
            const containerStyle = {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.2)',
              padding: '0.1rem',
            };
            return (
              <div
                key={`media-${index}`}
                style={containerStyle}
                className="hover:bg-neutral-800/20 hover:shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg"
                onClick={() => setFullscreenSrc(mediaPath)}
              >
                {isImage ? (
                  <img alt={`Image ${index + 1}`} src={mediaPath} className="rounded-lg max-w-full max-h-full" />
                ) : (
                  <video controls playsInline className="rounded-lg max-w-full max-h-full">
                   <source src={mediaPath} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            );
          })}
        </div>
      </div>

    
    </>
  );
};

export default Home;

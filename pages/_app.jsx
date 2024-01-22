import '../styles/globals.css'
import Layout from '../components/Layout';
import '../styles/tooltip.css'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/animations/scale-extreme.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/animations/shift-toward.css';
import Router, { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";


const Header = dynamic(() => import('../components/Header'))

const audioFiles = [
  '/audio/Drift Remix (Dirty).mp3',
  '/audio/olivetheboy - GoodSin myfreemp3.vip.mp3',
  '/audio/Blessed.mp3',
  '/audio/My G.mp3'
];

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const isHomePage = router.pathname === '/index.jsx';
  const [load, setLoad] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
      document.documentElement.style = 'pointer-events: all;';
    }, 1000);
  }, []);

  Router.events.on('routeChangeStart', () => {
    setLoad(false);
    document.documentElement.style = 'pointer-events: none;';
  });

  Router.events.on('routeChangeComplete', () => {
    setTimeout(() => {
      setLoad(true);
      document.documentElement.style = 'pointer-events: all;';
    }, 1000);
  });

  Router.events.on('routeChangeError', () => {
    setTimeout(() => {
      setLoad(true);
      document.documentElement.style = 'pointer-events: all;';
    }, 1000);
  });

  const handleAudioChange = (index) => {
    const audio = document.getElementById('background-music');
    audio.currentTime = 0;
    setCurrentAudioIndex(index);
    audio.src = audioFiles[index];
    audio.play();
  };
  return (<>
   <Layout></Layout>
    <Head>
        <title>DJ PARADISE</title>
        <link rel="shortcut icon" href="https://media.discordapp.net/attachments/737348411568685066/954506783777493072/Umut_Bayraktar_Icon.png" type="image/x-icon" ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://pro.fontawesome.com/releases/v5.15.4/css/all.css" rel="stylesheet" />

    </Head>
  
    <main className=" h-full border-neutral-700/50 w-full">
        <div className="min-h-screen max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300">
          <Header />
          <Component {...pageProps} />
        </div>

        {isHomePage && ( // Render the text only on the home page
          <div className="bg-neutral-800/5">
            <div className="max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300">
              <div className="md:flex w-full items-center justify-between">
                <div>
                  <p> Aline Nogueira Development Design</p>
                </div>
                <div className="mt-2 md:mt-0 flex items-center">{/* ... */}</div>
              </div>
            </div>
          </div>
        )}
     


    </main>
    <audio id="background-music" src={audioFiles[currentAudioIndex]} />
      <div className="audio-player">
      
      </div>
    </>
  );
}

export default MyApp;

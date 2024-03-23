
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = ({ currentAudioIndex, handleAudioChange, audioFiles }) => {
  const router = useRouter();

  const socialItems = [
    { icon: 'fab fa-mixcloud', link: 'https://www.mixcloud.com/Djparadise1/' },
    { icon: 'fab fa-instagram', link: 'https://instagram.com/djparadise_1' },
    { icon: 'fab fa-facebook', link: 'https://www.facebook.com/profile.php?id=100014142198861' },
  ];

  const navItems = [
    { icon: 'fal fa-home', active: 'fa fa-home', label: 'Home', href: '/' },
    { icon: 'fal fa-child', active: 'fa fa-child', label: 'About', href: '/about' },
    { icon: 'fal fa-compass', active: 'fa fa-compass', label: 'Partys', href: '/projects' },
    { icon: 'fal fa-phone', active: 'fa fa-phone', label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <div className="w-full border-b-2 border-neutral-800/20 pb-2" style={{ zIndex: 1000, position: 'relative' }}>
        <div className="flex flex-col md:flex-row w-full items-center md:justify-between">
          <p className="font-rockwell text-xl text-gold">                                                 </p>
          <div className="flex items-center space-x-2">
            {socialItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex-items-center justify-center hover:bg-neutral-700/20 rounded-xl transition-all duration-150 p-2 px-3"
              >
                <i className={`${item.icon} text-3xl`} />
              </a>
            ))}
            <div className="flex items-center space-x-2 ml-auto">
              <button
                className="text-white cursor-pointer hover:text-white/100"
                onClick={() => {
                  const audio = document.getElementById('background-music');
                  audio.paused ? audio.play() : audio.pause();
                }}
              >
                <i className="fas fa-play"></i> / <i className="fas fa-pause"></i>
              </button>
              <button
                className="text-white cursor-pointer hover:text-white/100"
                onClick={() => {
                  const audio = document.getElementById('background-music');
                  const nextAudioIndex = (currentAudioIndex + 1) % audioFiles.length;
                  handleAudioChange(nextAudioIndex);
                }}
              >
                <i className="fas fa-forward"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center space-x-4 py-2">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <a
                className={`flex items-center justify-center text-white/50 cursor-pointer hover:text-white/100 rounded-xl transition-all duration-150 ${
                  router.asPath === item.href && 'text-white/100'
                }`}
              >
                <i className={`${router.asPath === item.href ? item.active : item.icon} mr-2`} />
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;

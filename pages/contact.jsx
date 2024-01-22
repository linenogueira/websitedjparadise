import axios from 'axios';

export default function Home() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:Lampard.anas8@gmail.com';
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/4915216257014';
  };

  return (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">Contact Me</p>
        <p className="text-xl text-white/50 font-normal text-center mb-0.5">Other addresses where you can contact me.</p>
        <div className="flex justify-center flex-col items-center">
          <div className="max-w-lg w-full">
            <a target="_blank" rel="noreferrer" href="https://instagram.com/djparadise_1/">
              <div className="flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center mt-3">
                <i className="fab fa-instagram fa-2x" />
                <p className="font-semibold text-xl">@djparadise_1</p>
              </div>
            </a>

            {/* Email Contact */}
            <div
              className="flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center mt-3"
              onClick={handleEmailClick}
              style={{ cursor: 'pointer' }}
            >
              <i className="far fa-envelope fa-2x" />
              <p className="font-semibold text-xl">Lampard.anas8@gmail.com</p>
            </div>

            {/* WhatsApp Contact */}
            <div
              className="flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center mt-3"
              onClick={handleWhatsAppClick}
              style={{ cursor: 'pointer' }}
            >
              <i className="fab fa-whatsapp fa-2x" />
              <p className="font-semibold text-xl">WhatsApp</p>
            </div>
          </div>

          {/* Image below WhatsApp only on mobile */}
          <div className="mt-7 hidden md:block"> 
            <img src="/images/background-more/cartoon2.png" alt="Description of the image" className="rounded-lg" />
          </div>
          <div className="background-containerfundo"></div>
        </div>
      </div>
    </>
  );
}

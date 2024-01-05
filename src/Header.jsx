import React from 'react';
import Logo from '/home/rog/portfolio/portfolio/src/assets/logo.png';

export const openGmail = () => {
  const email = 'arunkabish@gmail.com';
  const gmailComposeURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
  window.open(gmailComposeURL, '_blank');
};

const Header = () => {
  return (
    <div style={{ position: 'fixed', width: '96%' }} className="header-container">
      <nav className='flex flex-row p-4 '>
        <a href="#">
          <img src={Logo} alt="arunkabish" className="p-1 font-bold h-8" />
        </a>
        <button className="ml-auto hover:bg-slate-500 rounded-2xl p-1 font-bold" id='' onClick={openGmail}>Contact</button>
      </nav>
    </div>
  );
};

export default Header;

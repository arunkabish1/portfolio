import React from 'react';
import Logo from './assets/logo.png';

export const openGmail = () => {
  const email = 'arunkabish@gmail.com';
  const gmailComposeURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
  window.open(gmailComposeURL, '_blank');
};

const Header = () => {
  return (
    <div style={{ position: 'fixed', width: '96%' }} className="header-container">
      <nav className='flex flex-row p-4 justify-between items-center'>
        <img
          src={Logo}
          alt="Logo"
          className="h-10"
        />
        <div>
        <button className="ml-4 hover:text-blue-600 rounded-2xl p-1 font-bold" id=''>Home</button> 
          <a className="ml-4 hover:text-blue-600 rounded-2xl p-1 font-bold" href='#projects' id=''>Projects</a>
        <a className="ml-4 hover:text-blue-600 rounded-2xl p-1 font-bold" href='#about'>About</a>
        <button className="ml-4 hover:text-blue-600 rounded-2xl p-1 font-bold" id='' onClick={openGmail}>Contact</button>

        </div>
       
      </nav>
    </div>
  );
};

export default Header;

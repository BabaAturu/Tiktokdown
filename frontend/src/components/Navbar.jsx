import React from 'react';

export default function Navbar() {
  return (
    <nav className="app-nav">
      <div className="nav-left">
        <div className="brand-logo">T</div>
        <div style={{fontWeight:700}}>TIKVedio</div>
      </div>
      <div className="nav-center">
        <a href="#">Download TikTok Stories</a>
        <a href="#">Download TikTok MP3</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/ads.txt" target="_blank" rel="noreferrer">ads.txt</a>
      </div>
      <div>
        <button className="install-btn">Install App</button>
      </div>
    </nav>
  );
}

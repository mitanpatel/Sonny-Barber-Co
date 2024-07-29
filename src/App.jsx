import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const address = "493 Barlow Moor Road, Chorlton-Cum-Hardy, Manchester, M21 8AG";
  const encodedAddress = encodeURIComponent(address);
  const mapsUrl = `https://maps.app.goo.gl/SwR52d37pAdWe6MB7`;


  return (
    <div className="App">
      <div className="button-container">
        <a 
          href="https://booksy.com/en-gb/111126_sonny-barber-company_barber_628476_manchester"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button book-button"
          aria-label="Book Now"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </a>
        <a 
          href="https://www.instagram.com/sonny.barberco/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button instagram-button"
          aria-label="Follow on Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="address">
        <p>493 Barlow Moor Road</p>
        <p>Chorlton-Cum-Hardy</p>
        <p>Manchester, M21 8AG</p>
      </a>
    </div>
  );
}

export default App;
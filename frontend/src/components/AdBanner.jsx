import React, { useEffect, useRef } from 'react';

const AdBanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // Insert ad network options as an inline script
    const optionsScript = document.createElement('script');
    optionsScript.type = 'text/javascript';
    optionsScript.innerHTML = "atOptions = { 'key' : 'd2bcdac65dd4fa387f7f2c4dbdf62ae3', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };";

    // External script that renders the banner
    const remote = document.createElement('script');
    remote.type = 'text/javascript';
    remote.src = 'https://www.highperformanceformat.com/d2bcdac65dd4fa387f7f2c4dbdf62ae3/invoke.js';
    remote.async = true;

    if (adRef.current) {
      adRef.current.appendChild(optionsScript);
      adRef.current.appendChild(remote);
    }

    return () => {
      // Cleanup inserted nodes on unmount
      if (adRef.current) adRef.current.innerHTML = '';
    };
  }, []);

  return <div ref={adRef} style={{ textAlign: 'center', margin: '20px 0' }} />;
};

export default AdBanner;

import React, { useEffect, useRef } from 'react';

const AdBanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // Insert ad network options as an inline script (728x90)
    const optionsScript = document.createElement('script');
    optionsScript.type = 'text/javascript';
    optionsScript.innerHTML = "atOptions = { 'key' : '6ebe9adcbd665ee16b7956548810ba8f', 'format' : 'iframe', 'height' : 90, 'width' : 728, 'params' : {} };";

    // External script that renders the banner
    const remote = document.createElement('script');
    remote.type = 'text/javascript';
    remote.src = 'https://www.highperformanceformat.com/6ebe9adcbd665ee16b7956548810ba8f/invoke.js';
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

  return (
    <div
      ref={adRef}
      style={{
        width: 728,
        height: 90,
        display: 'block',
        margin: '10px auto',
        textAlign: 'center',
      }}
    />
  );
};

export default AdBanner;

import React, { useState } from 'react';
import DownloaderForm from '../components/DownloaderForm.jsx';
import VideoPreview from '../components/VideoPreview.jsx';
import Loader from '../components/Loader.jsx';
import AdBanner from '../components/AdBanner.jsx';
import { fetchVideoDetails } from '../services/api'; 

export default function Home() { // Line 7: The '{' starts here
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = async (url) => {
    setLoading(true);
    try {
      const res = await fetchVideoDetails(url);
      // fetchVideoDetails returns backend response ( { success, data } )
      setData(res.data ?? res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }; // This closes handleSubmit

  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <h2 className="hero-title">TikTok Video Downloader</h2>
          <div className="input-wrapper">
            <DownloaderForm onSubmit={handleSubmit} />
          </div>
        </div>
      </section>

      <AdBanner />
      <div className="container">
        {loading ? <Loader /> : <VideoPreview data={data} />}
      </div>
    </main>
  );
} // <--- MAKE SURE THIS LAST BRACKET EXISTS! (Line 26-30 area)
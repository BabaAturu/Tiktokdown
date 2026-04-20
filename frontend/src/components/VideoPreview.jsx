import React from 'react';
import AdBanner from './AdBanner.jsx';

export default function VideoPreview({ data }) {
  if (!data) return null;

  // unwrap backend wrapper { success, data }
  const display = data && data.success && data.data ? data.data : data;

  const videoUrl =
    display.play || display.videoUrl || display.info?.url || display.url || display.data?.play;

  const handleDownload = async (videoUrl, fileName = 'tiktok_video') => {
    try {
      const response = await fetch(videoUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName}.mp4`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Download failed', err);
      alert('Download failed');
    }
  };

  return (
    <div>
      <p>Source: {display.url || display.play || 'N/A'}</p>
      {videoUrl ? (
        <div className="video-preview">
          <div className="video-preview__wrapper">
            <video
              controls
              referrerPolicy="strict-origin-when-cross-origin"
              className="video-preview__video"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>
            <a href={videoUrl} target="_blank" rel="noreferrer">Open video</a>
          </p>
          <p>
            <button onClick={() => handleDownload(videoUrl, data.title || 'tiktok_video')}>Download Now</button>
          </p>
          <p>
            <button
              className="hsdl-btn"
              onClick={() => window.open(videoUrl, '_blank', 'noopener')}
              title="Open direct link for high-speed download"
            >
              Play / High Speed Download
            </button>
          </p>
          <AdBanner />
        </div>
      ) : (
        <p>No video URL returned.</p>
      )}
    </div>
  );
}

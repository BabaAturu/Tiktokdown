import React, { useState } from 'react';

export default function DownloaderForm({ onSubmit }) {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            if (text) setUrl(text);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Clipboard read failed', err);
            alert('Unable to read clipboard. Please allow clipboard access or paste manually.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url) return;
        setLoading(true);
        try {
            if (onSubmit) await onSubmit(url);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error(err);
            alert('Failed to fetch video');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="download-form" onSubmit={handleSubmit}>
            <input
                    type="text"
                    placeholder="Paste TikTok video URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button type="button" className="paste-btn" onClick={handlePaste} title="Paste from clipboard">Paste</button>
                <button className="download-btn" type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Download'}
                </button>
        </form>
    );
}
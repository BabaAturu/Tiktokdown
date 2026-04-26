# TikWM Proxy (FastAPI)

Small FastAPI proxy that forwards a TikTok URL to https://www.tikwm.com/api/ and returns a no-watermark video link.

Run locally:

```bash
python -m venv .venv
# Windows
.\.venv\Scripts\activate
# macOS / Linux
# source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

Endpoint:

POST /api/download
Content-Type: application/json
Body: { "url": "<tiktok video url>" }

CORS: the server allows all origins (`Access-Control-Allow-Origin: *`).

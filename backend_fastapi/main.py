from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
import httpx
from pydantic import BaseModel

app = FastAPI(title="TikWM Proxy")

# Allow all origins (per user request)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

TikTokRequest = BaseModel


class UrlIn(BaseModel):
    url: str


@app.post("/api/download")
async def download_video(payload: UrlIn, request: Request):
    video_url = payload.url
    if not video_url:
        raise HTTPException(status_code=400, detail="Missing 'url' in request body")

    params = {"url": video_url}
    tikwm_api = "https://www.tikwm.com/api/"

    async with httpx.AsyncClient(timeout=20.0) as client:
        try:
            resp = await client.get(tikwm_api, params=params)
        except httpx.RequestError as exc:
            raise HTTPException(status_code=502, detail=f"Upstream request failed: {exc}")

    if resp.status_code != 200:
        raise HTTPException(status_code=502, detail=f"TikWM returned status {resp.status_code}")

    try:
        data = resp.json()
    except Exception:
        raise HTTPException(status_code=502, detail="Invalid JSON from TikWM")

    # The TikWM response structure contains data with play or no-watermark link.
    # Try common keys and return the first available direct video URL.
    video_link = None
    if isinstance(data, dict):
        # common nested paths
        candidates = [
            (data.get("data") or {}).get("play"),
            (data.get("data") or {}).get("nowm"),
            (data.get("data") or {}).get("play_addr"),
            (data.get("data") or {}).get("video_url"),
        ]
        for c in candidates:
            if c:
                video_link = c
                break

    if not video_link:
        # As a fallback, return whole JSON so client can inspect
        return {"success": False, "raw": data}

    return {"success": True, "video_url": video_link}

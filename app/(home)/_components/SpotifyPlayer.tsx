"use client";

import { useEffect, useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { SkipBack, SkipForward } from "react-feather";

interface Artist {
  name: string;
}

interface Album {
  images: { url: string }[];
}

interface Track {
  id: string;
  name: string;
  artists: Artist[];
  album: Album;
}

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || "";
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET || "";
const PLAYLIST_ID = process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID || "";

if (!CLIENT_ID || !CLIENT_SECRET || !PLAYLIST_ID) {
  throw new Error("Spotify credentials are not set in environment variables.");
}
const SpotifyPlayer = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [accessToken, setAccessToken] = useState<string>("");
  const [collapsed, setCollapsed] = useState<boolean>(false);

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const authParams = new URLSearchParams();
        authParams.append("grant_type", "client_credentials");
        authParams.append("client_id", CLIENT_ID);
        authParams.append("client_secret", CLIENT_SECRET);

        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: authParams,
        });

        const data = await response.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error("Error getting access token:", error);
      }
    };

    fetchAccessToken();
  }, []);

  useEffect(() => {
    const fetchTracks = async () => {
      if (!accessToken) return;
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        const fetchedTracks: Track[] = data.items.map(
          (item: any) => item.track
        );
        setTracks(fetchedTracks);
        setCurrentTrackIndex(0);
      } catch (error) {
        console.error("Spotify error:", error);
      }
    };

    fetchTracks();
  }, [accessToken]);

  const handlePrev = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === tracks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTrack = tracks[currentTrackIndex];

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-xs bg-black/90 text-white rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm">
      <div className="flex justify-between items-center px-4 py-2 border-b border-white/10">
        <h2 className="text-sm font-semibold tracking-wide">Now Playing</h2>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white hover:text-green-400 transition"
        >
          {collapsed ? <IoChevronUp size={18} /> : <IoChevronDown size={18} />}
        </button>
      </div>

      {!collapsed && (
        <div className="p-3 space-y-2">
          {tracks.length === 0 ? (
            <p className="text-xs text-center">Loading...</p>
          ) : (
            <div className="max-h-52 overflow-y-auto space-y-1 pr-1">
              {tracks.map((track, index) => (
                <div
                  key={track.id}
                  onClick={() => setCurrentTrackIndex(index)}
                  className={`flex justify-between items-center px-2 py-1 rounded-md cursor-pointer hover:bg-white/10 transition text-xs ${
                    currentTrack?.id === track.id ? "bg-white/10" : ""
                  }`}
                >
                  <div className="truncate">
                    <p className="font-medium truncate">{track.name}</p>
                    <p className="text-gray-400 truncate">
                      {track.artists[0]?.name}
                    </p>
                  </div>
                  {track.album.images[2] && (
                    <img
                      src={track.album.images[2].url}
                      alt=""
                      className="w-8 h-8 rounded object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {currentTrack && (
        <div className="border-t border-white/10 bg-neutral-900">
          <iframe
            src={`https://open.spotify.com/embed/track/${currentTrack.id}?utm_source=generator`}
            width="100%"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-none"
          ></iframe>
          <div className="flex justify-center gap-3 items-center py-1">
            <button
              onClick={handlePrev}
              className="rounded-md p-1 hover:bg-white/10 transition"
            >
              <SkipBack size={16} className="text-white" />
            </button>
            <button
              onClick={handleNext}
              className="rounded-md p-1 hover:bg-white/10 transition"
            >
              <SkipForward size={16} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotifyPlayer;

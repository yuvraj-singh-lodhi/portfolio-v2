"use client";
import React, { useEffect, useState } from "react";
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

interface SpotifyPlayerProps {
  clientId: string;
  clientSecret: string;
  playlistId: string;
  theme?: 'light' | 'dark';
  centeredPreview?: boolean; // New prop for preview mode
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({
  clientId,
  clientSecret,
  playlistId,
  theme = 'dark',
  centeredPreview = false,
}) => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [accessToken, setAccessToken] = useState<string>("");
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const themeStyles = {
    container: theme === 'dark'
      ? 'bg-neutral-900/95 text-white border-white/10'
      : 'bg-white/95 text-gray-900 border-gray-200',
    header: theme === 'dark'
      ? 'border-white/10'
      : 'border-gray-200',
    button: theme === 'dark'
      ? 'text-white hover:text-green-400'
      : 'text-gray-700 hover:text-green-600',
    loadingText: theme === 'dark'
      ? 'text-gray-400'
      : 'text-gray-500',
    trackItem: theme === 'dark'
      ? 'hover:bg-white/10'
      : 'hover:bg-gray-100',
    trackItemActive: theme === 'dark'
      ? 'bg-white/10'
      : 'bg-gray-100',
    artistText: theme === 'dark'
      ? 'text-gray-400'
      : 'text-gray-600',
    embedContainer: theme === 'dark'
      ? 'bg-neutral-800 border-white/10'
      : 'bg-gray-50 border-gray-200',
    controls: theme === 'dark'
      ? 'border-white/10 bg-neutral-900/80'
      : 'border-gray-200 bg-white/80',
    controlButton: theme === 'dark'
      ? 'bg-white/10 hover:bg-green-500/20 text-white'
      : 'bg-green-500 hover:bg-green-600 text-white',
  };

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const authParams = new URLSearchParams();
        authParams.append("grant_type", "client_credentials");
        authParams.append("client_id", clientId);
        authParams.append("client_secret", clientSecret);

        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: authParams,
        });

        const data = await response.json();
        if (data.access_token) setAccessToken(data.access_token);
        else console.error("Failed to fetch access token", data);
      } catch (error) {
        console.error("Error getting access token:", error);
      }
    };

    if (clientId && clientSecret) fetchAccessToken();
  }, [clientId, clientSecret]);

  useEffect(() => {
    const fetchTracks = async () => {
      if (!accessToken || !playlistId) return;

      try {
        const response = await fetch(
          `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );

        const data = await response.json();
        const fetchedTracks: Track[] = data.items.map((item: { track: Track }) => item.track);
        setTracks(fetchedTracks);
        setCurrentTrackIndex(0);
      } catch (error) {
        console.error("Spotify error:", error);
      }
    };

    fetchTracks();
  }, [accessToken, playlistId]);

  const handlePrev = () => setCurrentTrackIndex(prev => prev === 0 ? tracks.length - 1 : prev - 1);
  const handleNext = () => setCurrentTrackIndex(prev => prev === tracks.length - 1 ? 0 : prev + 1);

  const currentTrack = tracks[currentTrackIndex];

  return (
    <div className={`${centeredPreview ? "relative mx-auto my-5 w-full max-w-md" : "fixed bottom-2 left-2 right-2 sm:right-4 sm:left-auto w-full sm:max-w-sm z-50"} ${themeStyles.container} rounded-2xl shadow-xl backdrop-blur-md overflow-hidden border`}>
      {/* Header */}
      <div className={`flex justify-between items-center px-4 py-3 border-b ${themeStyles.header}`}>
        <h2 className="text-sm font-semibold tracking-wide">Now Playing</h2>
        <button onClick={() => setCollapsed(!collapsed)} className={`p-1 rounded-lg ${themeStyles.button} transition-colors duration-200`}>
          {collapsed ? <IoChevronUp size={18} /> : <IoChevronDown size={18} />}
        </button>
      </div>

      {/* Track List */}
      {!collapsed && (
        <div className="px-3 py-2 space-y-2">
          {tracks.length === 0 ? (
            <p className={`text-xs text-center ${themeStyles.loadingText}`}>Loading...</p>
          ) : (
            <div className="max-h-52 overflow-y-auto pr-1 custom-scrollbar">
              {tracks.map((track, index) => (
                <div key={track.id} onClick={() => setCurrentTrackIndex(index)}
                  className={`flex justify-between items-center gap-3 px-2 py-2 rounded-lg cursor-pointer ${themeStyles.trackItem} transition text-xs ${currentTrack?.id === track.id ? themeStyles.trackItemActive : ""}`}>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{track.name}</p>
                    <p className={`${themeStyles.artistText} truncate`}>{track.artists[0]?.name}</p>
                  </div>
                  {track.album.images[2] && <img src={track.album.images[2].url} alt="cover" className="w-10 h-10 rounded-lg object-cover shrink-0" />}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Embed + Controls */}
      {currentTrack && (
        <div className={`border-t ${themeStyles.header} ${themeStyles.embedContainer}`}>
          <div className={`rounded-xl overflow-hidden shadow-inner border ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
            <iframe
              src={`https://open.spotify.com/embed/track/${currentTrack.id}?utm_source=generator&theme=${theme === 'light' ? '0' : '1'}`}
              width="100%" height="80"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-none"
            ></iframe>
          </div>
          <div className={`flex justify-center items-center gap-4 py-3 border-t ${themeStyles.controls}`}>
            <button onClick={handlePrev} className={`p-2 rounded-lg ${themeStyles.button} transition-colors duration-200`}><SkipBack size={16} /></button>
            <button onClick={handleNext} className={`p-2 rounded-lg ${themeStyles.button} transition-colors duration-200`}><SkipForward size={16} /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotifyPlayer;
export type { SpotifyPlayerProps };

"use client";
import React, { useEffect, useState } from "react";
import { IoChevronDown, IoChevronUp, IoClose } from "react-icons/io5";
import { SkipBack, SkipForward, Music, Play } from "react-feather";

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
  centeredPreview?: boolean;
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
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [isFloatingOpen, setIsFloatingOpen] = useState<boolean>(false);

  // Close floating panel when clicking outside (mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isFloatingOpen && window.innerWidth <= 640) {
        const target = event.target as HTMLElement;
        if (!target.closest('.spotify-player-container')) {
          setIsFloatingOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isFloatingOpen]);

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
    floatingButton: theme === 'dark'
      ? 'bg-neutral-900/95 text-white border-white/20 shadow-2xl'
      : 'bg-white/95 text-gray-900 border-gray-300 shadow-2xl',
    overlay: 'bg-black/20 backdrop-blur-sm',
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

  // Mobile Floating Button Component
  const FloatingButton = () => {
    if (!currentTrack || centeredPreview) return null;
    
    return (
      <>
        {/* Overlay for mobile when expanded */}
        {isFloatingOpen && (
          <div className={`fixed inset-0 z-40 sm:hidden ${themeStyles.overlay} transition-opacity duration-300`} />
        )}
        
        {/* Floating Button */}
        <div className="sm:hidden fixed bottom-4 right-4 z-50">
          {!isFloatingOpen ? (
            // Collapsed floating button
            <button
              onClick={() => setIsFloatingOpen(true)}
              className={`${themeStyles.floatingButton} rounded-full p-3 border backdrop-blur-md transition-all duration-300 active:scale-90 shadow-lg hover:shadow-xl`}
              aria-label="Open music player"
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  {currentTrack.album.images[2] ? (
                    <img 
                      src={currentTrack.album.images[2].url} 
                      alt="Current track"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                      <Music size={16} className="text-white" />
                    </div>
                  )}
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <Play size={8} className="text-white ml-0.5" />
                  </div>
                </div>
              </div>
            </button>
          ) : (
            // Expanded floating panel
            <div className={`spotify-player-container ${themeStyles.container} rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden border w-80 max-w-[calc(100vw-2rem)] transition-all duration-300 transform`}>
              
              {/* Header with close button */}
              <div className={`flex justify-between items-center px-4 py-3 border-b ${themeStyles.header}`}>
                <div className="flex items-center gap-2">
                  <Music size={16} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
                  <h2 className="text-sm font-semibold tracking-wide">Now Playing</h2>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setCollapsed(!collapsed)} 
                    className={`p-1.5 rounded-lg ${themeStyles.button} transition-all duration-200 active:scale-95`}
                    aria-label={collapsed ? "Expand playlist" : "Collapse playlist"}
                  >
                    {collapsed ? <IoChevronUp size={16} /> : <IoChevronDown size={16} />}
                  </button>
                  <button 
                    onClick={() => setIsFloatingOpen(false)} 
                    className={`p-1.5 rounded-lg ${themeStyles.button} transition-all duration-200 active:scale-95`}
                    aria-label="Close music player"
                  >
                    <IoClose size={16} />
                  </button>
                </div>
              </div>

              {/* Track List */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                collapsed ? 'max-h-0 opacity-0' : 'max-h-64 opacity-100'
              }`}>
                <div className="px-3 py-2 space-y-1.5">
                  {tracks.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8">
                      <Music size={24} className={`${themeStyles.loadingText} mb-2`} />
                      <p className={`text-xs text-center ${themeStyles.loadingText}`}>Loading playlist...</p>
                    </div>
                  ) : (
                    <div className="max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                      {tracks.map((track, index) => (
                        <div 
                          key={track.id} 
                          onClick={() => setCurrentTrackIndex(index)}
                          className={`flex justify-between items-center gap-3 px-2 py-2 rounded-lg cursor-pointer ${themeStyles.trackItem} transition-all duration-200 text-xs active:scale-[0.98] ${
                            currentTrack?.id === track.id ? themeStyles.trackItemActive : ""
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate leading-tight mb-0.5">{track.name}</p>
                            <p className={`${themeStyles.artistText} truncate text-xs`}>
                              {track.artists[0]?.name}
                            </p>
                          </div>
                          {track.album.images[2] && (
                            <img 
                              src={track.album.images[2].url} 
                              alt="Album cover"
                              className="w-10 h-10 rounded-lg object-cover shrink-0 shadow-sm" 
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Embed + Controls */}
              {currentTrack && (
                <div className={`border-t ${themeStyles.header} ${themeStyles.embedContainer} transition-all duration-300`}>
                  <div className={`rounded-xl overflow-hidden shadow-inner border mx-3 mt-3 ${
                    theme === 'dark' ? 'border-white/10' : 'border-gray-200'
                  }`}>
                    <iframe
                      src={`https://open.spotify.com/embed/track/${currentTrack.id}?utm_source=generator&theme=${theme === 'light' ? '0' : '1'}`}
                      width="100%" 
                      height="80"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-none"
                      title={`Spotify player for ${currentTrack.name}`}
                    />
                  </div>
                  
                  <div className={`flex justify-center items-center gap-6 py-3 border-t ${themeStyles.controls} mt-3`}>
                    <button 
                      onClick={handlePrev} 
                      className={`p-2.5 rounded-full ${themeStyles.button} transition-all duration-200 active:scale-90`}
                      aria-label="Previous track"
                    >
                      <SkipBack size={18} />
                    </button>
                    <button 
                      onClick={handleNext} 
                      className={`p-2.5 rounded-full ${themeStyles.button} transition-all duration-200 active:scale-90`}
                      aria-label="Next track"
                    >
                      <SkipForward size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </>
    );
  };

  // Desktop/Tablet Version (unchanged behavior for larger screens)
  const DesktopPlayer = () => {
    if (centeredPreview) {
      // Centered preview mode (works on all screen sizes)
      return (
        <div className={`spotify-player-container relative mx-auto my-5 w-full max-w-md ${themeStyles.container} rounded-2xl shadow-xl backdrop-blur-md overflow-hidden border transition-all duration-300 ease-in-out`}>
          <PlayerContent />
        </div>
      );
    }

    // Desktop fixed positioning (hidden on mobile)
    return (
      <div className="hidden sm:block">
        <div className={`spotify-player-container fixed bottom-2 right-4 w-full max-w-sm z-50 ${themeStyles.container} rounded-2xl shadow-xl backdrop-blur-md overflow-hidden border transition-all duration-300 ease-in-out`}>
          <PlayerContent />
        </div>
      </div>
    );
  };

  // Shared player content component
  const PlayerContent = () => (
    <>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'};
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
        }
      `}</style>

      {/* Header */}
      <div className={`flex justify-between items-center px-4 py-3 border-b ${themeStyles.header}`}>
        <div className="flex items-center gap-2">
          <Music size={16} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
          <h2 className="text-sm font-semibold tracking-wide">Now Playing</h2>
        </div>
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className={`p-1 rounded-lg ${themeStyles.button} transition-all duration-200`}
          aria-label={collapsed ? "Expand playlist" : "Collapse playlist"}
        >
          {collapsed ? <IoChevronUp size={18} /> : <IoChevronDown size={18} />}
        </button>
      </div>

      {/* Track List */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        collapsed ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'
      }`}>
        <div className="px-3 py-2 space-y-2">
          {tracks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8">
              <Music size={24} className={`${themeStyles.loadingText} mb-2`} />
              <p className={`text-xs text-center ${themeStyles.loadingText}`}>Loading playlist...</p>
            </div>
          ) : (
            <div className="max-h-52 overflow-y-auto pr-1 custom-scrollbar">
              {tracks.map((track, index) => (
                <div 
                  key={track.id} 
                  onClick={() => setCurrentTrackIndex(index)}
                  className={`flex justify-between items-center gap-3 px-2 py-2 rounded-lg cursor-pointer ${themeStyles.trackItem} transition text-xs ${
                    currentTrack?.id === track.id ? themeStyles.trackItemActive : ""
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{track.name}</p>
                    <p className={`${themeStyles.artistText} truncate`}>{track.artists[0]?.name}</p>
                  </div>
                  {track.album.images[2] && (
                    <img 
                      src={track.album.images[2].url} 
                      alt="Album cover"
                      className="w-10 h-10 rounded-lg object-cover shrink-0" 
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Embed + Controls */}
      {currentTrack && (
        <div className={`border-t ${themeStyles.header} ${themeStyles.embedContainer}`}>
          <div className={`rounded-xl overflow-hidden shadow-inner border ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
            <iframe
              src={`https://open.spotify.com/embed/track/${currentTrack.id}?utm_source=generator&theme=${theme === 'light' ? '0' : '1'}`}
              width="100%" 
              height="80"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-none"
              title={`Spotify player for ${currentTrack.name}`}
            />
          </div>
          <div className={`flex justify-center items-center gap-4 py-3 border-t ${themeStyles.controls}`}>
            <button 
              onClick={handlePrev} 
              className={`p-2 rounded-lg ${themeStyles.button} transition-colors duration-200`}
              aria-label="Previous track"
            >
              <SkipBack size={16} />
            </button>
            <button 
              onClick={handleNext} 
              className={`p-2 rounded-lg ${themeStyles.button} transition-colors duration-200`}
              aria-label="Next track"
            >
              <SkipForward size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      <FloatingButton />
      <DesktopPlayer />
    </>
  );
};

export default SpotifyPlayer;
export type { SpotifyPlayerProps };
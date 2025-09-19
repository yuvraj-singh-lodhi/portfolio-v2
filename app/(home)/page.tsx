import ComponentsPage from "./_components/ComponentsPage";
import Experience from "./_components/Experience";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import SpotifyPlayer from "./_components/SpotifyPlayer";

export default function Home() {
  const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || "";
  const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET || "";
  const PLAYLIST_ID = process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID || "";

  return (
    <div className="bg-black overflow-hidden">
      {/* Navbar + Hero */}
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <HeroSection />
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto">
        <Experience />
        <Skills />
        <Projects />
        <ComponentsPage />
      </div>

      {/* Spotify Player */}
      <SpotifyPlayer
        clientId={CLIENT_ID}
        clientSecret={CLIENT_SECRET}
        playlistId={PLAYLIST_ID}
      />
    </div>
  );
}

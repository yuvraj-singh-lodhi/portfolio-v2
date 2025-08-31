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
    <div className="min-h-screen bg-black space-y-20 overflow-hidden">
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar isFooter={false} />
          <HeroSection />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-5">
        <Skills />
        <Projects />
        <div className="border-t mt-10">
          <Navbar isFooter={true} className="flex-col gap-4" />
        </div>
      </div>
      <SpotifyPlayer
        clientId={CLIENT_ID}
        clientSecret={CLIENT_SECRET}
        playlistId={PLAYLIST_ID}
      />
    </div>
  );
}

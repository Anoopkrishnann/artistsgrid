'use client'; // 👈 VERY IMPORTANT — this line must be the first line

import { useEffect, useState } from "react";

function ArtGalleryPage() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // Fetch logic or axios here (optional if not used in this file)
  }, []);

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Art Gallery</h1>
      {/* You can use <ArtworkGrid /> here */}
    </main>
  );
}

export default ArtGalleryPage;



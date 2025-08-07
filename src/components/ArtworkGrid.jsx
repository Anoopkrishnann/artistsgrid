'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArtworkGrid = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/artworks?populate=*')
      .then((res) => {
        console.log("Fetched artworks:", res.data.data); // Debug
        setArtworks(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching artworks:", err);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {artworks.map((artwork) => {
        const img = artwork?.attributes?.image?.data?.attributes?.url;
        const title = artwork?.attributes?.title || 'Untitled';

        return (
          <div key={artwork.id} className="border p-2 shadow rounded">
            {img ? (
              <img
                src={`http://localhost:1337${img}`}
                alt={title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
            <h2 className="mt-2 font-semibold">{title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default ArtworkGrid;

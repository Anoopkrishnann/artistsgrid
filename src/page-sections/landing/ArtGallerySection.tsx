import React from "react";
import Box from "@component/Box";

const ArtGallerySection = () => {
  return (
    <Box as="section" padding="40px" backgroundColor="white">
      <h2>Our Art Collection</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* Sample images */}
        <img src="C:/Users/srava/Downloads/sun" width="200" alt="Art 1" />
        <img src="C:/Users/srava/Downloads/road" width="200" alt="Art 2" />
        <img src="C:/Users/srava/Downloads/cat" width="200" alt="Art 3" />
      </div>
    </Box>
  );
};

export default ArtGallerySection;


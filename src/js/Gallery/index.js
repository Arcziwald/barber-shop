import React, { useState } from "react";
import { Wrapper, StyledImgGallery, Miniatura } from "./styled";
import { Main } from "../../common/Main";
import imagesData from "./imagesData.json";

if (module.hot) {
  module.hot.accept();
}

export const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const openImage = (imagePath) => {
    setCurrentImage(imagePath);
  };

  const closeImage = () => {
    setCurrentImage(null);
  };

  return (
    <Main>
      <Wrapper>
        <div>
          {imagesData.map((category, index) => (
            <div key={index}>
              <h2>{category.name}</h2>
              {category.images.map((imageInfo, subIndex) => (
                <Miniatura
                  key={subIndex}
                  src={process.env.PUBLIC_URL + imageInfo.thumbnail}
                  alt={imageInfo.description}
                  onClick={() => openImage(process.env.PUBLIC_URL + imageInfo.fullSize)}
                />
              ))}
            </div>
          ))}
        </div>
        {currentImage && (
          <div>
            <StyledImgGallery src={currentImage} alt="Powiększone zdjęcie" />
            <button onClick={closeImage}>Zamknij</button>
          </div>
        )}
      </Wrapper>
    </Main>
  );
};

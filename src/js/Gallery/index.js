import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import { Main } from '../../common/Main';
import { Wrapper } from './styled';

export const Gallery = () => {
  useEffect(() => {
    const items = [
      {
        src: './imagesHair/autumnColors/shot1.jpg',
        w: 500, // szerokość obrazu
        h: 700, // wysokość obrazu
        title: 'Opis obrazu 1',
      },
      {
        src: './imagesHair/hairStyle/shot1.jpg',
        w: 720,
        h: 960,
        title: 'Opis obrazu 2',
      },
      // Dodaj tutaj więcej obiektów dla kolejnych zdjęć
    ];

    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });

    // Dodaj dane źródłowe do lightboxa
    lightbox.items = items;

    lightbox.init();
  }, []);

  return (
    <Main>
        <Wrapper>
      <div className="pswp-gallery pswp-gallerygallery--getting-started" id="gallery">
        {/* Wszystkie dane źródłowe są przekazywane bezpośrednio do lightboxa */}
        {/* Nie jest potrzebna tablica 'items' */}
        <a
          href="./imagesHair/autumnColors/shot1.jpg"
          data-pswp-width={720}
          data-pswp-height={960}
          data-pswp-title="Opis obrazu 1"
        >
          <img src="./imagesHair/autumnColors/shot1.jpg" alt="Opis obrazu 1" />
        </a>
        <a
          href="./imagesHair/hairStyle/shot1.jpg"
          data-pswp-width={720}
          data-pswp-height={960}
          data-pswp-title="Opis obrazu 2"
        >
          <img src="./imagesHair/hairStyle/shot1.jpg" alt="Opis obrazu 2" />
        </a>
      </div>
      </Wrapper>
    </Main>
  );
};

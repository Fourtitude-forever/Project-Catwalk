import React from 'react';
import Slider from './ImageSlider/Slider.jsx';

const images = [
  { img1: 'https://public-media.si-cdn.com/filer/a0/15/a015251a-6a1d-449c-bf13-8c1c129c4cc5/egypt_kitty_mobile.jpg'},
  { img2: 'https://media.nature.com/lw800/magazine-assets/d41586-020-02779-3/d41586-020-02779-3_18481780.jpg'},
  { img3: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg'},
  { img4: 'https://media.vanityfair.com/photos/5e27310def889c00087c7928/2:3/w_887,h_1331,c_limit/taylor-swift-cats.jpg'},
  { img5: 'https://cdn.the-scientist.com/assets/articleNo/66400/hImg/33465/cat-banner-l.png'},
];

function ProductDetail() {
  return (
    <Slider images={images} />
  );
}

export default ProductDetail;
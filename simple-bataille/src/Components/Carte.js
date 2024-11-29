import React from 'react';

function Carte({ cardImage, altText }) {
  return (
    <div className="carte">
      <img src={`${process.env.PUBLIC_URL}/carte/${cardImage}`} alt={altText} />
    </div>
  );
}

export default Carte;



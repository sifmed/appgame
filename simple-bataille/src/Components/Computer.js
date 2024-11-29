import React from 'react';
import Carte from './Carte';

function Computer({ card }) {
  return (
    <div className="computer">
      <h2 style={{ fontSize: '24px' }}>Ordinateur</h2>  {}
      {card && <Carte cardImage={card.image} altText={`Carte ${card.rank}`} />}
    </div>
  );
}

export default Computer;



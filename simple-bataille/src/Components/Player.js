import React, { useState } from 'react';
import Carte from './Carte';

function Player({ cards, onCardSelected }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (card) => {
    setSelectedCard(card);  
    onCardSelected(card);   
  };

  return (
    <div className="player">
      <h2>Joueur</h2>
      <div className="card-selection">
        {}
        {cards.map((card, index) => (
          <div key={index} onClick={() => handleCardSelect(card)}>
            <Carte cardImage={card.image} altText={`Carte ${card.rank}`} />
          </div>
        ))}
      </div>

      {}
      <div className="selected-card">
        {selectedCard && (
          <>
            <h3>Carte Sélectionnée :</h3>
            <Carte cardImage={selectedCard.image} altText={`Carte ${selectedCard.rank}`} />
          </>
        )}
      </div>
    </div>
  );
}

export default Player;





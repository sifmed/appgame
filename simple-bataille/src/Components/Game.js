import React, { useState } from 'react';
import Player from './Player';
import Computer from './Computer';

function Game() {
  const allCards = [
    { image: '2S.jpg', rank: 2, suit: 'Spades' },
    { image: '3C.jpg', rank: 3, suit: 'Clubs' },
    { image: '4H.jpg', rank: 4, suit: 'Hearts' },
    { image: '5D.jpg', rank: 5, suit: 'Diamonds' },
    { image: '6S.jpg', rank: 6, suit: 'Spades' },
    { image: '7H.jpg', rank: 7, suit: 'Hearts' },
    { image: '8C.jpg', rank: 8, suit: 'Clubs' },
    { image: '9D.jpg', rank: 9, suit: 'Diamonds' },
    { image: '10S.jpg', rank: 10, suit: 'Spades' },
    { image: 'JS.jpg', rank: 11, suit: 'Spades' },
    { image: 'QC.jpg', rank: 12, suit: 'Clubs' },
    { image: 'KH.jpg', rank: 13, suit: 'Hearts' },
    { image: 'AH.jpg', rank: 14, suit: 'Hearts' },
  ];

  
  const getRandomCards = () => {
    let shuffled = [...allCards].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  };

  
  const [playerCards, setPlayerCards] = useState(getRandomCards());
  const [computerCards, setComputerCards] = useState(getRandomCards());

  const [playerCard, setPlayerCard] = useState(null);
  const [computerCard, setComputerCard] = useState(null);
  const [result, setResult] = useState('');

  
  const handleCardSelected = (card) => {
    if (!playerCard) { 
      setPlayerCard(card);
      const randomIndex = Math.floor(Math.random() * computerCards.length);
      setComputerCard(computerCards[randomIndex]);
    }
  };

  
  const compareCards = () => {
    if (!playerCard || !computerCard) return;

    
    if (playerCard.rank > computerCard.rank) {
      setResult('Le joueur gagne');
    } else if (playerCard.rank < computerCard.rank) {
      setResult('L\'ordinateur gagne');
    } else {
      setResult('Égalité');
    }

    
    setPlayerCard(null); 
    setComputerCard(null); 
    setPlayerCards(getRandomCards()); 
    setComputerCards(getRandomCards()); 
  };

  return (
    <div>
      <Player cards={playerCards} onCardSelected={handleCardSelected} />
      <Computer card={computerCard} />
      <button onClick={compareCards}>Comparer les cartes</button>
      <p>Résultat: {result}</p>
    </div>
  );
}

export default Game;




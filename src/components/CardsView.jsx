import React from 'react';
import ShopCard from './ShopCard';

export default function CardsView ({cards}) {
  return (
    <div className="CardsView">
      {cards.map((card) => {
        return (
          <ShopCard card={card} key={card.name + card.color}/>
        );
      })}
    </div>
  );
}
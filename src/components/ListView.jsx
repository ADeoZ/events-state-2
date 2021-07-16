import React from 'react';
import ShopItem from './ShopItem';

export default function ListView ({items}) {
  return (
    <div className="ListView">
      {items.map((item) => {
        return (
          <ShopItem item={item} key={item.name + item.color}/>
        );
      })}
    </div>
  );
}
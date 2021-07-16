import React from 'react';

export default function ShopItem({item}) {
  return (
    <div className="ShopItem">
      <div className="ShopItem-img"><img src={item.img} alt={item.name} /></div>
      <div className="ShopItem-name">{item.name}</div>
      <div className="ShopItem-color">{item.color}</div>
        <div className="ShopItem-price">${item.price}</div>
        <div className="ShopItem-button">Add to cart</div>
    </div>
  );
}
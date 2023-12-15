import React from 'react';
import GoodsCard from './GoodsCard';
import './Gallery.css';

const Gallery = () => {
  const goodsData = [
    {
      id: 1,
      name: 'Apple',
      photo: 'apple.jpg',
      price: '10 грн',
    },
    {
      id: 2,
      name: 'Pear',
      photo: 'pear.jpg',
      price: '20 грн',
    },
    {
      id: 3,
      name: 'Peach',
      photo: 'peach.jpg',
      price: '20 грн',
    },
    {
      id: 4,
      name: 'Grape',
      photo: 'grape.jpg',
      price: '40 грн',
    },
    {
      id: 5,
      name: 'Orange',
      photo: 'orange.jpg',
      price: '10 грн',
    },
    {
      id: 6,
      name: 'Kivi',
      photo: 'kivi.jpg',
      price: '50 грн',
    },
  ];

  return (
    <div className="gallery">
      {goodsData.map((item) => (
        <GoodsCard
          key={item.id}
          photo={item.photo}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Gallery;
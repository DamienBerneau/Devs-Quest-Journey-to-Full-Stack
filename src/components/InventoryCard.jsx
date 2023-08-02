import { useState, useEffect } from 'react';
import Item from './Item';

const InventoryCard = ({ charId }) => {
  const [items, setItems] = useState([])
  const [characterItems, setCharacterItems] = useState([])

  useEffect(() => {
    if (charId) {
      fetch(`/api/characters/${charId}/items`)
        .then(res => res.json())
        .then(items => setCharacterItems(items))
    }
  }, [charId])

  useEffect(() => {
    fetch(`/api/items`)
      .then(res => res.json())
      .then(items => setItems(items))
  }, [])

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">Inventaire</div>
        <div className="card-text">
          {characterItems.map((item, index) => <Item item={item} key={index} />)}
        </div>
        <div className="card-title mt-3">Boutique</div>
        <div className="card-text">
          {items.map((item, index) => <Item item={item} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;

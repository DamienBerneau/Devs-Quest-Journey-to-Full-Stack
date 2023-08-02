import { useState, useEffect } from 'react';
import Item from './Item';

const InventoryCard = ({ charId }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`/api/character/${charId}/items`)
      .then(res => res.json())
      .then(items => setItems(items))
  }, [])
  return (
    <div className="card">
      <div className="card-body">
        {items.map(item => <Item item={item} />)}
      </div>
    </div>
  );
};

export default InventoryCard;

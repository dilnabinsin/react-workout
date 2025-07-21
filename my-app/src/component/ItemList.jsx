import { useState } from 'react';

function ItemList() {
  const [items] = useState([
    { id: 1, title: 'Apple' },
    { id: 2, title: 'Banana' },
    { id: 3, title: 'Orange' }
  ]);

  return (
    <ul>
      {items.map(item => (
        <li key={item.id} style={{ color: 'blue', fontWeight: 'bold' }}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
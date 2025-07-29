import React, { useState } from 'react';

const data = [
  { id: 1, name: 'Category 1', items: ['Item 1A', 'Item 1B'] },
  { id: 2, name: 'Category 2', items: ['Item 2A', 'Item 2B'] },
];

const NestedDropdown = () => {
  const [category, setCategory] = useState('');
  const [item, setItem] = useState('');

  const selectedCategory = data.find(cat => cat.id === Number(category));

  return (
    <div style={{ padding: '20px' }}>
      <h3>Nested Dropdown</h3>
      
      {/* Category Dropdown */}
      <select value={category} onChange={(e) => {
        setCategory(e.target.value);
        setItem(''); // Reset item when category changes
      }}>
        <option value="">Select Category</option>
        {data.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>

      {/* Item Dropdown (depends on category) */}
      {selectedCategory && (
        <select value={item} onChange={(e) => setItem(e.target.value)}>
          <option value="">Select Item</option>
          {selectedCategory.items.map(it => (
            <option key={it} value={it}>{it}</option>
          ))}
        </select>
      )}

      {/* Display selected values */}
      {item && (
        <p>
          You selected: <strong>{selectedCategory.name}</strong> → <strong>{item}</strong>
        </p>
      )}
    </div>
  );
};

export default NestedDropdown;

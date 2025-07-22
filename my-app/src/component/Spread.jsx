import React, { Component ,useState} from 'react'



// function Spread() {
//   const [fruits, setFruits] = useState(['Apple', 'Banana']);

//   const addFruit = () => {
//     setFruits([...fruits, 'Orange']); // Add new item using spread
//   };

//   return (
//     <div>
//       <ul>
//         {fruits.map((f, i) => <li key={i}>{f}</li>)}
//       </ul>
//       <button onClick={addFruit}>Add Fruit</button>
//     </div>
//   );
// }

//////////////////////////////////////////////////////////////



//  11. Map Over Array of Objects with Styling
// ```jsx
// import { useState } from 'react';

// function ItemList() {
//   const [items] = useState([
//     { id: 1, title: 'Apple' },
//     { id: 2, title: 'Banana' },
//     { id: 3, title: 'Orange' }
//   ]);

//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.id} style={{ color: 'blue', fontWeight: 'bold' }}>
//           {item.title}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ItemList;


function Spread(){

const [user,setUser]=useState({name:"dilna",age:25})

const updateAge =()=>{
    setUser({...user,age:26})
}
return(


<div>
<p>{user.name} is {user.age} year old </p>
<button onClick={updateAge}>click</button>
</div>

)

}


export default Spread;
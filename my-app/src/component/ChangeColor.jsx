import React, { useRef } from "react";

const ChangeColor = () => {
  const divRef = useRef(null);

  const colorchange = () => {
    const r = Math.floor(Math.random() * 256); // Use Math.floor for full integers
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    divRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div>
    <div
      ref={divRef}
    //  onClick={colorchange}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "#ddd", // default color
        cursor: "pointer",
        border: "2px solid black",
        margin: "20px auto"
      }}
    />
    <button  onClick={colorchange}>Change Color</button>

    </div>
     
  );
};

export default ChangeColor;


// import React, { useRef } from "react";

// function BackgroundChanger() {
//   const divRef = useRef(null);

//   const changeBackground = () => {
//     divRef.current.style.backgroundColor = "lightblue";
//   };

//   return (
//     <div>
      // <div ref={divRef} style={{ width: "200px", height: "100px", background: "#eee" }}>
//         Background Box
//       </div>
//       <button onClick={changeBackground}>Change Background</button>
//     </div>
//   );
// }

// export default BackgroundChanger;

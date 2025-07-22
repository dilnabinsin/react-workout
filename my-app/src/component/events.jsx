function Button() {
  const handleClick = () => alert("Button clicked!");
  return <button onClick={handleClick}>Click Me</button>;
}

function Form() {
  const handleChange = (event) => {
    console.log("Input value:", event.target.value);
  };
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}
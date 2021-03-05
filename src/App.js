import React from "react";
//import "./style.css";

// functional component
// we want that on clicking the name should alter
function App()
{
  let item=1;
  const name=["Pradipta", "Samrat"];
  const handleclick= () => 
  {
    item=(item+1)%2;
    console.log(item);
  }
  return (
    <div>
  <h1>Pradipta is Cool!!</h1>
  <h1>Names:{name[item]}</h1>
  <button onclick={handleclick}> click me </button>
  </div>
  );
  
}
//class component
export class App2 extends React.Component
{
  render()
  {
    return <h1> Wat's up:)</h1>
  }
}
export default App;


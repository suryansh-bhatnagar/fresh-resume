import React ,{useState}from "react";
import './App.css';
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

function App() {
  const [activeColor, setActiveColor] = useState('#239ce2');
  return (
    <div className="App">
     <Header activeColor={activeColor} setActiveColor={setActiveColor}/>
     <Body activeColor={activeColor} setActiveColor={setActiveColor}/>
    </div>
  );
}

export default App;

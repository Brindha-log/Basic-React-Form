import { useState } from "react";
import Input from "./components/Input";
import Submit from "./components/Submit";
import Output from "./components/Output";
import "./App.css"

// function Button(){
//   return(
//     <button>Submit</button>
//   );
// }

export default function App() {
const [input,setInput] = useState('');
const [displayText,setDisplayText] = useState('');
return(
  <div className="App">
    <Input input={input} setInput={setInput} />
    <Submit input={input} setDisplayText={setDisplayText} />
    <Output displayText={displayText} />
  </div>
);
}

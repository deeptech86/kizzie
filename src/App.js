import logo from "./logo.svg";
import "./App.css";
import Menu from "./Components/Menubar";
import Menu2 from "./Components/Menubar2";
import Selector from "./Components/Selector";
import FourDigitAddition from "./Components/FourDigitAddition";
import RandomNumberGame from "./Components/RandomNumberGame";

function App() {
  return (
    <div className="App">
      <Menu />
      {/* <Selector />
      {/* <Menu2 /> 
      <h1>Maths</h1>
      <h1>English</h1>

      <h1>Science</h1>
      <h1>Logic Building</h1> */}

      <RandomNumberGame />
    </div>
  );
}

export default App;

import "./App.css";
import AppKeyBoard from "./AppKeyBoard";

function App() {
  const handleEnter = (input) => {
    console.log(input || "enter pressed, but no input value");
  };

  return (
    <div className="App flex items-center justify-center">
      <AppKeyBoard handleEnter={handleEnter} />
    </div>
  );
}

export default App;

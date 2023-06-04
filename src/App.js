import './App.css';
import About from "./components/About";
import LayerMask from "./components/LayerMask";
import SignPage from "./components/SignPage";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <div className="App">
      <About/>
      <LayerMask/>
      <SignPage/>
      <SignUpForm/>
    </div>
  );
}

export default App;

import { useContext } from "react";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import { CounterContext } from "./Context";

function App() {
  const { mainPlus, mainMinus } = useContext(CounterContext);
  return (
    <div className="p-5">
      <div className="d-flex w-100 h-100 justify-content-center align-content-center m-3 gap-5">
        <Component1 />
        <Component2 />
      </div>
      <div className="d-flex justify-content-center mt-4 gap-5">
        <button className="btn btn-danger px-5" onClick={mainMinus}>
          -
        </button>
        <button className="btn btn-success px-5" onClick={mainPlus}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;

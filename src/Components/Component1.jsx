import { useContext } from "react";
import { CounterContext } from "../Context";

const Component1 = () => {
  const { A, B, plus, minus } = useContext(CounterContext);

  return (
    <div className="d-grid gap-5">
      <div className="d-grid gap-3 bg-warning-subtle px-3 py-3 rounded-4">
        <h1 className=" text-center text-warning">A</h1>
        <h3 className="text-center">Count: {A}</h3>
        <div className="d-flex gap-3 w-100 justify-content-center">
          <button className=" btn btn-danger" onClick={() => minus(`A`)}>
            -
          </button>
          <button className=" btn btn-success" onClick={() => plus(`A`)}>
            +
          </button>
        </div>
      </div>
      <div className="d-grid gap-3 bg-success-subtle px-5 py-3 rounded-4">
        <h1 className=" text-center text-success">B</h1>
        <h3 className="text-center">Count: {B}</h3>
        <div className="d-flex gap-3 w-100 justify-content-center">
          <button className=" btn btn-danger" onClick={() => minus(`B`)}>
            -
          </button>
          <button className=" btn btn-success" onClick={() => plus(`B`)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component1;

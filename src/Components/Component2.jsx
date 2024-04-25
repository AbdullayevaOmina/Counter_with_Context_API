import { useContext } from "react";
import { CounterContext } from "../Context";

const Component2 = () => {
  const { C, D, plus, minus } = useContext(CounterContext);

  return (
    <div className=" d-grid gap-5">
      <div className="d-grid gap-3 bg-info-subtle px-5 py-3 rounded-4">
        <h1 className="text-center text-info">C</h1>
        <h3 className="text-center">Count: {C}</h3>
        <div className="d-flex gap-3 w-100 justify-content-center">
          <button className="btn btn-danger" onClick={() => minus(`C`)}>
            -
          </button>
          <button className="btn btn-success" onClick={() => plus(`C`)}>
            +
          </button>
        </div>
      </div>
      <div className="d-grid gap-3 bg-danger-subtle px-5 py-3 rounded-4">
        <h1 className=" text-center text-danger">D</h1>
        <h3 className="text-center">Count: {D}</h3>
        <div className="d-flex gap-3 w-100 justify-content-center">
          <button className=" btn btn-danger" onClick={() => minus(`D`)}>
            -
          </button>
          <button className=" btn btn-success" onClick={() => plus(`D`)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component2;

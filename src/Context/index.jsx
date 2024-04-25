import { createContext, useState } from "react";

export const CounterContext = createContext([]);

export const CounterProvider = ({ children }) => {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const [C, setC] = useState(0);
  const [D, setD] = useState(0);

  function mainPlus() {
    setA((prevA) => prevA + 1);
    setB((prevB) => prevB + 1);
    setC((prevC) => prevC + 1);
    setD((prevD) => prevD + 1);
  }

  function mainMinus() {
    setA((prevA) => prevA - 1);
    setB((prevB) => prevB - 1);
    setC((prevC) => prevC - 1);
    setD((prevD) => prevD - 1);
  }

  function plus(qiymat) {
    if (qiymat === "A") setA((prevA) => prevA + 1);
    if (qiymat === "B") setB((prevB) => prevB + 1);
    if (qiymat === "C") setC((prevC) => prevC + 1);
    if (qiymat === "D") setD((prevD) => prevD + 1);
  }

  function minus(qiymat) {
    if (qiymat === "A") setA((prevA) => prevA - 1);
    if (qiymat === "B") setB((prevB) => prevB - 1);
    if (qiymat === "C") setC((prevC) => prevC - 1);
    if (qiymat === "D") setD((prevD) => prevD - 1);
  }

  return (
    <CounterContext.Provider
      value={{ A, B, C, D, mainMinus, mainPlus, plus, minus }}
    >
      {children}
    </CounterContext.Provider>
  );
};

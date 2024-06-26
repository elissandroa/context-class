import React from "react";
import "./styles.css";
//import { useContext } from "react";
//import { CounterContext } from "../../context/CounterContext";
import ChangeCounter from "../../components/ChangeCounter";
import { useCounterContext } from "../../hooks/useCounterContext";
import { useTitleColorContext } from "../../hooks/useTileColorContext";

function Home() {
  // const { counter } = useContext(CounterContext);
  const { counter} = useCounterContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter} </p>
      <ChangeCounter />
    </div>
  );
}

export default Home;

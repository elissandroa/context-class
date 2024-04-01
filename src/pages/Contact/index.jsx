import React, { useContext } from "react";
import "./styles.css";
import ChangeCounter from "../../components/ChangeCounter";
import { CounterContext } from "../../context/CounterContext";

function Contact() {
  const { counter } = useContext(CounterContext);
  
  return (
    <div>
      <h1>Contact</h1>
      <p>Valor do contador: {counter} </p>
      <ChangeCounter />
    </div>
  );
}

export default Contact;

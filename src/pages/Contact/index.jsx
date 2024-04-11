import "./styles.css";
import ChangeCounter from "../../components/ChangeCounter";
import { useCounterContext } from "../../hooks/useCounterContext";


function Contact() {

  const { counter } = useCounterContext();
  return (
    <div>
      <h1>Contact</h1>
      <p>Valor do contador: {counter} </p>
      <ChangeCounter />
    </div>
  );
}

export default Contact;

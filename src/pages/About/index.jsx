import ChangeCounter from "../../components/ChangeCounter";
import { useCounterContext } from "../../hooks/useCounterContext";
import "./styles.css";

function About() {
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>About</h1>
      <p>Valor do contador: {counter} </p>
      <ChangeCounter />
    </div>
  );
}

export default About;

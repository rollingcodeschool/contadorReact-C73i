import { useState } from "react";

const Contador = () => {
  const [numero, setNumero] = useState(10);
  // let numero = 10;
  // numero++ -> numero = numero +1
  return (
    <article className="text-center">
      <h2>Contador</h2>
      <h3>{numero}</h3>
      <button className="btn btn-primary" onClick={() => setNumero(numero + 1)}>
        +1
      </button>
    </article>
  );
};

export default Contador;

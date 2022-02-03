import { useState, useCallback } from "react";
import ContadorHijo from "./ContadorHijo";

function Contador() {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");

  //const sumar = () => setContador(contador + 1);
  const sumar = useCallback(() => setContador(contador + 1), [contador]);

  /*const restar = () => {
    if (contador <= 0) return;
    setContador(contador - 1);
  };*/
  const restar = useCallback(() => {
    if (contador <= 0) return;
    setContador(contador - 1);
  }, [contador]);

  const handleInput = (e) => setInput(e.target.value);

  return (
    <div>
      <h2>Contador </h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{contador}</h3>
      <input type="text" onChange={handleInput} value={input}></input>
      <ContadorHijo
        contador={contador}
        sumar={sumar}
        restar={restar}
      ></ContadorHijo>
    </div>
  );
}

export { Contador };

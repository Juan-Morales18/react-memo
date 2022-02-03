import { memo, useMemo } from "react";

const styles = {
  border: "thin solid #000",
  margin: "1rem",
  padding: "1rem",
};

function ContadorHijo({ contador, sumar, restar }) {
  console.log("Hijo contador se renderiza");
  /*
  let superNumero = 0;
  for (let i = 0; i < 10000000000; i++) {
    superNumero++;
  }
*/

  const superNumero = useMemo(() => {
    let numero = 0;
    for (let i = 0; i < 10000000000; i++) {
      numero++;
    }
    return numero;
  }, []);

  return (
    <div style={styles}>
      <h2>Hijo del contador</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
    </div>
  );
}

export default memo(ContadorHijo);

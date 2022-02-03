
import "./App.css";
import { Contador } from "./components/Contador";

function App() {

  return (
    <div className="App">
      <h1>React Memo</h1>
      <hr></hr>
      <h2>Teoria</h2>
      <h3>
        <a
          href="https://es.reactjs.org/docs/react-api.html#reactmemo"
          target="_blank"
          rel="noreferrer"
        >Memo</a>
      </h3>
      <hr></hr>
      <Contador></Contador>
    </div>
  );
}

export default App;

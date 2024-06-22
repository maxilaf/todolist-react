import { useState } from "react";
import "./App.css";
import Tache from "./components/Tache";
import TacheForm from "./components/TacheForm";

function App() {
  // state (état, données)
  const [taches, setTaches] = useState([{ nom: "Pomme" },
    { nom: "Ananas" },
    { nom: "Pastèque" },
  ]);


  //const inputRef = useRef();

  // comportements



  // Affichage

  return (
    <div className="App">
      <h1>To Do List</h1>
      <TacheForm taches={taches} setTaches={setTaches} />
      <ul>
        {taches.map((tache) => {
          <Tache tache={tache} taches={taches} setTaches={setTaches} />
        })}
      </ul>
    </div>
  );
}

export default App;

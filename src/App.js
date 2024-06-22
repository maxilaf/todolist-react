import { useState } from "react";
import "./App.css";

function App() {
  // state (état, données)
  const [taches, setTaches] = useState([{ nom: "Pomme" },
    { nom: "Ananas" },
    { nom: "Pastèque" },
  ]);

  const [nouvelleTache, setNouvelleTache] = useState("");

  //const inputRef = useRef();

  // comportements
  const addTaches = (event) => {
    event.preventDefault();
    if (nouvelleTache !== "") {
      const newTaches = { nom: nouvelleTache};
      setTaches([...taches, newTaches]);
      setNouvelleTache("");
    }
    // const tachesLenght = taches.length + 1;
    // const newTaches = { id: tachesLenght, nom: inputRef.current.value };
    // setTaches([...taches, newTaches]);
    // console.log(taches);
  };

  const deleteLi = (tache) => {
    const copyTaches = [...taches];
    const indexDelete = copyTaches.indexOf(tache)
    copyTaches.splice(indexDelete, 1);
    setTaches(copyTaches);
  };

  const handleChange = (event) => {
    const valueAfterChange = event.target.value;
    setNouvelleTache(valueAfterChange);
  };

  // Affichage

  return (
    <div className="App">
      <h1>To Do List</h1>
      <form action="submit" onSubmit={addTaches}>
        <input
          value={nouvelleTache}
          type="text"
          placeholder="Entrez votre votre tache"
          onChange={handleChange}
        />
        <button>Ajouter la tache</button>
      </form>
      <ul>
        {taches.map((tache) => {
          return (
            <li key={taches.indexOf(tache)}>
              <input type="checkbox" />
              {tache.nom} <button onClick={() => deleteLi(tache)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

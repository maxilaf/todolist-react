import { useState } from "react";
import "./App.css";

import Tache from "./components/Tache";
import TacheForm from "./components/TacheForm";
import TacheFini from "./components/TacheFini";

function App() {
    // state (état, données)
    const [taches, setTaches] = useState([
        { nom: "Pomme", fini: false },
        { nom: "Ananas", fini: false },
        { nom: "Pastèque", fini: false }
    ]);

    const [tachesFini, setTachesFini] = useState([
        { nom: "Poire", fini: true}
    ]);
    //const inputRef = useRef();

    // comportements
    const deleteLi = (tache) => {
        const copyTaches = [...taches];
        const indexDelete = copyTaches.indexOf(tache);
        copyTaches.splice(indexDelete, 1);
        setTaches(copyTaches);
    };

    const handleAdd = (newTache) => {
        setTaches([...taches, newTache]);
    };

    // Affichage

    return (
        <div className="App">
            <h1>To Do List</h1>
            <TacheForm handleAdd={handleAdd} />
            <div className="aFaire taches">
                <h2>TACHE A FAIRE</h2>
                <ul>
                    {taches.map((tache) => {
                        return (
                            <Tache
                                tache={tache}
                                onTacheDelete={deleteLi}
                                key={taches.indexOf(tache)}
                            />
                        );
                    })}
                </ul>
            </div>
            <div className="fait taches">
                <h2>TACHE FINI</h2>
                <ul>
                    {tachesFini.map((tacheFini) => {
                        return (
                            <TacheFini />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;

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
        { nom: "Pastèque", fini: false },
    ]);

    const [tachesFini, setTachesFini] = useState([
        { nom: "Poire", fini: true },
    ]);
    //const inputRef = useRef();

    // comportements
    const deleteTache = (tache) => {
        const copyTaches = [...taches];
        const indexDelete = copyTaches.indexOf(tache);
        copyTaches.splice(indexDelete, 1);
        setTaches(copyTaches);
    };

    const deleteTacheFini = (tache) => {
        const copyTaches = [...tachesFini];
        const indexDelete = copyTaches.indexOf(tache);
        copyTaches.splice(indexDelete, 1);
        setTachesFini(copyTaches);
    };

    const handleAdd = (newTache) => {
        setTaches([...taches, newTache]);
    };

    const onFait = (tache) => {
        const copyTachesFini = [...tachesFini];
        const indexDelete = copyTachesFini.indexOf(tache);
        copyTachesFini.splice(indexDelete, 1);
        const changeTache = { nom: tache.nom, fini: false };
        const copyTaches = [...taches, changeTache];
        setTaches(copyTaches);
        setTachesFini(copyTachesFini);
    };

    const onNonFait = (tache) => {
        const copyTaches = [...taches];
        const indexDelete = copyTaches.indexOf(tache);
        copyTaches.splice(indexDelete, 1);
        const changeTache = { nom: tache.nom, fini: true };
        const copyTachesFini = [...tachesFini, changeTache];
        setTaches(copyTaches);
        setTachesFini(copyTachesFini);
    };

    // Affichage

    return (
        <div className="App">
            <h1>To Do List</h1>
            <TacheForm handleAdd={handleAdd} />
            <div className="aFaire taches">
                <h2>TACHES A FAIRE</h2>
                <ul>
                    {taches.map((tache) => {
                        return (
                            <Tache
                                tache={tache}
                                onTacheDelete={deleteTache}
                                // onFait={() => onNonFait(tache)}
                                key={taches.indexOf(tache)}
                                checkBox={<input type="checkbox" onChange={() => onNonFait(tache)}/>  }
                            />
                        );
                    })}
                </ul>
            </div>
            <div className="fait taches">
                <h2>TACHES FINI</h2>
                <ul>
                    {tachesFini.map((tacheFini) => {
                        return (
                            <Tache
                                tache={tacheFini}
                                onTacheDelete={deleteTacheFini}
                                // onFait={() => onFait(tacheFini)}
                                key={taches.indexOf(tacheFini)}
                                checkBox={<input type="checkbox" onChange={() => onFait(tacheFini)} checked/>}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;

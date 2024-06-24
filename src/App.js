import { useState } from "react";
import "./App.css";

import Tache from "./components/Tache";
import TacheForm from "./components/TacheForm";

function App() {
    // state (état, données)
    const [taches, setTaches] = useState([
        { nom: "Faire à manger", fini: false, status: "bas" },
        { nom: "Dormir", fini: false, status: "bas" },
        { nom: "Devoirs", fini: false, status: "bas" },
    ]);

    const [tachesFini, setTachesFini] = useState([
        { nom: "Laver la voiture", fini: true, status: "bas" },
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
        const changeTache = {
            nom: tache.nom,
            fini: false,
            status: tache.status,
        };
        const copyTaches = [...taches, changeTache];
        setTaches(copyTaches);
        setTachesFini(copyTachesFini);
    };

    const onNonFait = (tache) => {
        const copyTaches = [...taches];
        const indexDelete = copyTaches.indexOf(tache);
        copyTaches.splice(indexDelete, 1);
        const changeTache = {
            nom: tache.nom,
            fini: true,
            status: tache.status,
        };
        const copyTachesFini = [...tachesFini, changeTache];
        setTaches(copyTaches);
        setTachesFini(copyTachesFini);
    };

    const changeStatus = () => {
        console.log("ChangeStatus");
    };

    const nomPresent = (newTache) => {
        const copyTaches = [...taches];
        const copyTachesFini = [...tachesFini];
        if (
            copyTaches.some((tache) => tache.nom === newTache) ||
            copyTachesFini.some((tacheFini) => tacheFini.nom === newTache)
        ) {
            return true;
        } else {
            return false;
        }
    };

    // Affichage

    return (
        <div className="App">
            <h1>To Do List</h1>
            <TacheForm handleAdd={handleAdd} nomPresent={nomPresent} />
            <div className="aFaire taches">
                <h2>TACHES A FAIRE</h2>
                <ul>
                    {taches.map((tache) => {
                        return (
                            <Tache
                                tache={tache}
                                onTacheDelete={deleteTache}
                                // onFait={() => onNonFait(tache)}
                                key={tache.nom}
                                checkBox={{
                                    onChange: () => onNonFait(tache),
                                    checked: false,
                                }}
                                estFait="tacheNonFait"
                                changeStatus={changeStatus}
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
                                key={tacheFini.nom}
                                checkBox={{
                                    onChange: () => onFait(tacheFini),
                                    checked: true,
                                }}
                                estFait="tacheFait"
                                changeStatus={changeStatus}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;

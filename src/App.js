import { useState } from "react";
import "./App.css";

import Tache from "./components/Tache";
import TacheForm from "./components/TacheForm";

function App() {
    // state (état, données)
    const [taches, _setTaches] = useState([
        { nom: "Faire à manger", fini: false, status: "BAS" },
        { nom: "Dormir", fini: false, status: "BAS" },
        { nom: "Devoirs", fini: false, status: "BAS" },
    ]);

    const [tachesFini, _setTachesFini] = useState([
        { nom: "Laver la voiture", fini: true, status: "BAS" },
    ]);

    localStorage.setItem('Staches', JSON.stringify(taches));
    localStorage.setItem('StachesFini', JSON.stringify(tachesFini));

    //const inputRef = useRef();

    // comportements

    const setTaches = (tableauTaches) => {
        const copyTaches = [...tableauTaches];
        const tachesTrie = trierStatus(copyTaches)
        _setTaches(tachesTrie);
        localStorage.removeItem('Staches');
        localStorage.setItem('Staches', JSON.stringify(tachesTrie));
    };

    const setTachesFini = (tableauTaches) => {
        const copyTaches = [...tableauTaches];
        const tachesTrie = trierStatus(copyTaches)
        _setTachesFini(tachesTrie);
        localStorage.removeItem('StachesFini');
        localStorage.setItem('StachesFini', JSON.stringify(tachesTrie));
    };

    const trierStatus = (taches) => {
        const copyTaches = [...taches];
        copyTaches.sort((a, b) => {
            const ordre = ["HAUT", "MOYEN", "BAS"];
            return ordre.indexOf(a.status) - ordre.indexOf(b.status);
        });
        return copyTaches;
    };

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
        const copyTaches = [...taches];
        const nvTab = [...copyTaches, newTache];
        setTaches(nvTab);
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

    const changeStatusLi = (status, tache, estFait) => {
        let copyTaches;
        if (estFait === "tacheNonFait") {
            copyTaches = [...taches];
        } else if (estFait === "tacheFait") {
            copyTaches = [...tachesFini];
        }
        const index = copyTaches.indexOf(tache);
        copyTaches[index].status = status;
        if (estFait === "tacheNonFait") {
            setTaches(copyTaches);
        } else if (estFait === "tacheFait") {
            setTachesFini(copyTaches);
        }
    };

    const changeStatus = (tache, estFait) => {
        switch (tache.status) {
            case "BAS":
                changeStatusLi("MOYEN", tache, estFait);
                break;

            case "MOYEN":
                changeStatusLi("HAUT", tache, estFait);
                break;

            case "HAUT":
                changeStatusLi("BAS", tache, estFait);
                break;

            default:
                alert("ERREUR STATUS (Status.js l.20)");
                break;
        }
    };

    // Affichage

    return (
        <div className="App">
            <h1>To Do List</h1>
            <TacheForm
                handleAdd={handleAdd}
                nomPresent={nomPresent}
            />
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
                                onClickStatus={() =>
                                    changeStatus(tache, "tacheNonFait")
                                }
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
                                onClickStatus={() =>
                                    changeStatus(tacheFini, "tacheFait")
                                }
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;

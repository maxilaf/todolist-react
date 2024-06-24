
import { useState } from "react";
import Status from "./Status";

export default function TacheForm({ handleAdd, nomPresent }) {
    // state
    const [nouvelleTache, setNouvelleTache] = useState("");
    const [status, setStatus] =  useState("BAS");

    // comportements
    const handleChange = (event) => {
        const valueAfterChange = event.target.value;
        setNouvelleTache(valueAfterChange);
    };

    const addTaches = (event) => {
        event.preventDefault();
        if (nomPresent(nouvelleTache)) {
            alert("Attention ! Cette tache est déja présente")
        } else if (nouvelleTache !== "") {
            const newTache = { nom: nouvelleTache, fini: false, status: status };
            handleAdd(newTache);
            //   setTaches([...taches, newTaches]);
        }
        setNouvelleTache("");
        // const tachesLenght = taches.length + 1;
        // const newTaches = { id: tachesLenght, nom: inputRef.current.value };
        // setTaches([...taches, newTaches]);
        // console.log(taches);
    };

    const changeStatusForm = () => {
        switch (status) {
            case "BAS":
                setStatus("MOYEN");
                break;

            case "MOYEN":
                setStatus("HAUT");
                break;

            case "HAUT":
                setStatus("BAS");
                break;

            default:
                alert("ERREUR STATUS (Status.js l.20)");
                break;
        }
    };

    return (
        <form action="submit" onSubmit={addTaches} className="add">
            <div className="inputTache">
                <input
                    value={nouvelleTache}
                    type="text"
                    placeholder="Entrez votre votre tache"
                    onChange={handleChange}
                />
                <Status status={status} onClick={changeStatusForm} />
            </div>
            <button className="addButton">Ajouter la tache</button>
        </form>
    );
}

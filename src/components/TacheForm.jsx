import { useState } from "react";

export default function TacheForm({taches, setTaches}) {

    // state
    const [nouvelleTache, setNouvelleTache] = useState("");

    // comportements
    const handleChange = (event) => {
        const valueAfterChange = event.target.value;
        setNouvelleTache(valueAfterChange);
    };

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

    return (
        <form action="submit" onSubmit={addTaches}>
            <input
            value={nouvelleTache}
            type="text"
            placeholder="Entrez votre votre tache"
            onChange={handleChange}
            />
            <button>Ajouter la tache</button>
        </form>
    );
}
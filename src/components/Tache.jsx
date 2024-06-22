
export default function Tache({ tache, taches, setTaches }) {
    // state

    // comportements
    const deleteLi = (tache) => {
        const copyTaches = [...taches];
        const indexDelete = copyTaches.indexOf(tache)
        copyTaches.splice(indexDelete, 1);
        setTaches(copyTaches);
    };

    // affichage
    return (
        <li key={taches.indexOf(tache)}>
            <input type="checkbox" />
            {tache.nom} <button onClick={() => deleteLi(tache)}>X</button>
        </li>
    );
}
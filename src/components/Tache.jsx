import "./../styles/Tache.css";

export default function Tache({ tache, onTacheDelete, checkBox }) {
    // state

    // comportements

    // affichage
    return (
        <li>
            {checkBox}
            {tache.nom}
            <button onClick={() => onTacheDelete(tache)}>X</button>
        </li>
    );
}

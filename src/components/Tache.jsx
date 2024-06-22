import "./../styles/Tache.css";

export default function Tache({ tache, onTacheDelete }) {
    // state

    // comportements

    // affichage
    return (
        <li>
            <input type="checkbox" />
            {tache.nom} <button onClick={() => onTacheDelete(tache)}>X</button>
        </li>
    );
}

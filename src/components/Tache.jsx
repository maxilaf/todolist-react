import "./../styles/Tache.css";

export default function Tache({ tache, onTacheDelete, onFait }) {
    // state

    // comportements

    // affichage
    return (
        <li>
            <input type="checkbox" onClick={onFait}/>
            {tache.nom} <button onClick={() => onTacheDelete(tache)}>X</button>
        </li>
    );
}

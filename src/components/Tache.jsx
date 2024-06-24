
export default function Tache({ tache, onTacheDelete, checkBox, estFait }) {
    // state

    // comportements

    // affichage
    return (
        <li className={estFait}>
            <input
                type="checkbox"
                onChange={checkBox.onChange}
                checked={checkBox.checked}
            />
            <label>{tache.nom}</label>
            {/* {tache.nom} */}
            <button onClick={() => onTacheDelete(tache)}>X</button>
        </li>
    );
}

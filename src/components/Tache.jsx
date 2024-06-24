
export default function Tache({ tache, onTacheDelete, checkBox, estFait, changeStatus}) {
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
            <button className="changeStatus" onClick={changeStatus}>{tache.status}</button>
            <button className="deleteTache" onClick={() => onTacheDelete(tache)}>X</button>
        </li>
    );
}

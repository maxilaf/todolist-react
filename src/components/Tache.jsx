import Status from "./Status";

export default function Tache({ tache, onTacheDelete, checkBox, estFait, onClickStatus}) {
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
            <div className="containerStatusButton">
                <Status status={tache.status} onClick={onClickStatus} />
            </div>
            <button className="deleteTache" onClick={() => onTacheDelete(tache)}>X</button>
        </li>
    );
}

export default function Status({ status, onClick }) {
    // States

    // Comportements
    

    // affichage

    return (
        <button className={"changeStatus " + status} onClick={onClick} >
            {status}
        </button>
    );
}


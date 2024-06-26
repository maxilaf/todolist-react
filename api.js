import axios from "axios";

const [chiffre, setChiffre] = useState(null);
    const [nom, setNom] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const handleRefresh = () => {
        fetchData(); // Réexécute la fonction fetchData pour récupérer les données les plus récentes
    };

    // Fonction pour récupérer les données
    const fetchData = () => {
        // Appel à la route /api/data
        fetch("http://127.0.0.1:5000/api/chiffre")
            .then((response) => response.json())
            .then((data) => setChiffre(data))
            .catch((error) => {
                alert(
                    "Erreur lors de la récupération des données:",
                    error
                );
            });

        axios.get('http://127.0.0.1:5000/api/nom')
            .then(response => {
                setNom(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
        
        
    };

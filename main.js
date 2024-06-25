/// 1. Stocker des données
// Stocker une chaîne de caractères
localStorage.setItem('nom', 'Jean Dupont');

// Stocker un objet (vous devez le convertir en chaîne JSON)
let utilisateur = {
    nom: 'Jean',
    prenom: 'Dupont',
    age: 30
};
localStorage.setItem('utilisateur', JSON.stringify(utilisateur));


/// 2. Récupérer des données
// Récupérer une chaîne de caractères
let nom = localStorage.getItem('nom');
console.log(nom); // Output: Jean Dupont

// Récupérer un objet (vous devez le convertir de chaîne JSON en objet)
let utilisateurRecupere = JSON.parse(localStorage.getItem('utilisateur'));
console.log(utilisateurRecupere); // Output: { nom: 'Jean', prenom: 'Dupont', age: 30 }


/// 3. Supprimer des données
localStorage.removeItem('nom');

// Vérifier si l'élément a été supprimé
console.log(localStorage.getItem('nom')); // Output: null


/// 4. Vider le local storage
// Vider le local storage
localStorage.clear();

// Vérifier si le local storage est vide
console.log(localStorage.length); // Output: 0


/// 5. Autres fonctionnalités
// Pour obtenir la clé d'un élément stocké par son index, vous pouvez utiliser la méthode key.
localStorage.setItem('cle1', 'valeur1');
localStorage.setItem('cle2', 'valeur2');

console.log(localStorage.key(0)); // Output: 'cle1' (ou 'cle2' selon l'ordre de stockage)


// Vous pouvez également vérifier le nombre d'éléments stockés en utilisant la propriété length.
console.log(localStorage.length); // Output: 2 (dans notre cas)

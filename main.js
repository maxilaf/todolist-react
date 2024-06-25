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
//let utilisateurRecupere = JSON.parse(localStorage.getItem('utilisateur'));
//utilisateurRecupere.nom = "Hey"
//console.log(utilisateurRecupere); // Output: { nom: 'Jean', prenom: 'Dupont', age: 30 }

console.log(localStorage);
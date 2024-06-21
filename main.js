
const valeur = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

console.log(valeur);

valeur.splice(1, 1);

console.log(valeur);

const prenom = ["Jean", "Pierre", "Max", "Luca", "Henri", "Charles"];
const index = prenom.indexOf("Max");

if (index !== -1) {
  prenom.splice(index, 1);
}

console.log(prenom);
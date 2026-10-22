//calul du nombre de semaine pour avoir GTA 6
let prixGTA6 = 50000;
let epargne = 4000;
let epargneactuelle = 0
let semaine = 0
while (epargneactuelle<prixGTA6) {
epargneactuelle+=epargne;semaine++;
console.log(`semaine: ${semaine}`);
}
console.log(`le nombre de semaine est ${semaine}`); 
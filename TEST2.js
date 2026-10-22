const nom = "junior" // TYPES STRING
const tailletext = "156"// TYPES STRING
let dents = 34
const neztext = "3"
const agetext = "20"
const taille = Number(tailletext);
const age = Number (agetext);
let nez = Number (neztext);
const visage= nez+dents
const ailleurs = age+taille
const tout = visage + ailleurs
console.log(`la taille est ${taille} cm.`);
console.log (`l'age est de ${age} ans.`);
console.log (`le nombre sur le visage est ${visage}.`);
console.log (`ailleurs le nombre est de ${ailleurs}`);
console.log(`le tout est ${tout}`);
if (visage<taille) {
    console.log ("vilain et cours");
}
if (tout>200) {
console.log("gere bien");
}

if (nez>1) {
console.log("super humain")
} else { 
console.log ("humain");
}

if (age<12){
    console.log("MINEUR");
} else if (age<18) {
    console.log("ado")
} else {
 console.log("majeur");
}
// donnnez une classe social en fonction de l'age 
switch (age) {
    case (19):
    console.log(`tu es dans un bas milieu social`)
    break;
    case (21):
    console.log (`dans la meilleur classe`)
    break;
    case( 20):
    console.log(`ta classe social n'est pas si mal`)
    break;
    case (22):
    console.log(`t'es dans la derniere classe d'age`)
    break;
}
// DONNEZ DE L'argent par mois en fonctions de l'age de l'individu chaque individu recois 3 fois max de l'argent
let i=0
for(i=2;i<4;i++){
    console.log(`l'orde de reception d'argent de poche est ${i} FCFA`);
}
//DONNEZ LE NOMBRE DE CHANCES PAR RAPPORT A NEZ
while(nez<=9){
    console.log(`ton nombre de chances est de ${nez}`);nez++
}
console.log(` c'etait ton rapport Bg.`)
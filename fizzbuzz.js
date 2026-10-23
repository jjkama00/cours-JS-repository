// Parcourir les nombres de 1 à 30
// Si, le nombre est divisible par 3 et par 5
// Sinon si divisible par 3 
//sinon si divisible par 5
// sinon afficher le resultat
for (let i=1;i<=30;i++){
if(i%3===0 && i%5===0){
     console.log (`FizzBuzz`)  
}else if (i%3===0){
    console.log(`Fizz`)
} else if (i%5===0){
        console.log (`Buzz`)
} else{
       console.log (i);
  }
}
 // MEME chose mais avec cas
 
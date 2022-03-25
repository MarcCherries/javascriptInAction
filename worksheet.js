"use strict"

function gettingToKnowYou(){

let dayOfWeek = 'Friday';
console.log(dayOfWeek);

let tGIF = (`I cant wait for ${dayOfWeek}!`);
alert(tGIF);

let animalInput = prompt('What is your favorite animal?' );
console.log (animalInput);

let colorInput = prompt('What is your favorite color? ');
console.log (colorInput);

alert(`I've never seen a ${colorInput} ${animalInput}!`);

}

let userOne = gettingToKnowYou();


function whatToEat (){
let timeOfDay = 2000
let favoriteMeal = ''
if (timeOfDay < 1200){
    favoriteMeal = ('Sunnyside-up eggs and sausage links');
}
else if (timeOfDay > 1200 && timeOfDay < 1700){
    favoriteMeal = ('Tuna Sandwich');
}
else if (timeOfDay > 1700){
    favoriteMeal = ('Phad See Eiw');
}
alert(favoriteMeal);
}

let firstMeal = whatToEat()


function bandPicker(){
    let randomNumber = Math.floor(Math.random()*10);
    if (randomNumber < 3 && randomNumber >= 0 ){
        alert("Beatles");
    }
    else if (randomNumber < 6 && randomNumber > 2 ){
        alert("Stones");
    }
    if (randomNumber < 9 && randomNumber > 5 ){
        alert("Floyd");
    }
    if (randomNumber === 9 || randomNumber === 10 ){
        alert("Hendrix");
    }

    alert(randomNumber)
}
    let tryOne = bandPicker() 


for (let i = 0; i < 7; i++){
    alert('Javascript is cool!');
}


for (let i=0; i < 11; i++){
    alert(i);
}

for (let i = 0; i < 5; i++){
    console.log('hello');
    console.log('goodbye');
}

function printMovieName (favoriteMovie){
let movieToPrint;
movieToPrint = alert(favoriteMovie);
}
let myMovie = printMovieName("Goodfellas");


function favoriteBand (){
    let bandInput;
    bandInput = prompt ("What is your favorite band? ");
    return bandInput;

}

let first_band = favoriteBand();
alert(first_band);


function concertDisplay (musicalAct){
   let myStreet;
   myStreet = prompt('Please enter the street you live on. ')
   alert(`It would be great if ${musicalAct} played a show on ${myStreet}!`)
}

let concertOne = concertDisplay(first_band)


let desktopItems = ['Phone', 'Laptop', 'Russian Blue Cat']
console.log(desktopItems[1])

desktopItems.push('Infinity Gauntlet')
console.log(desktopItems)

for (let i = 0; i < desktopItems.length; i++){;
    console.log(desktopItems[i])
}






function guessingGame (){
    let guess = 0;
    let magicNumber = Math.floor(Math.random()*100)
    while (guess != magicNumber){
        let guess = prompt('Please guess a number. ');
        if (guess == magicNumber){
            alert(`Congratulations! ${guess} is the correct number! `);
            break;
        }
        else if ((magicNumber - guess) < 11 && (magicNumber - guess) > -11){
            alert('Getting warmer!');
        }
        else if (guess < magicNumber){
            alert('Too low!');
        }
        else if (guess > magicNumber){
            alert('Too high!');
        }
    
    
    }
}

let gameOne = guessingGame();
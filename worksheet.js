"use strict"


let dayOfWeek = 'Friday';
console.log(dayOfWeek);

let tGIF = (`I cant wait for ${dayOfWeek}!`);
alert(tGIF);

let animalInput = prompt('What is your favorite animal?' );
console.log (animalInput);

let colorInput = prompt('What is your favorite color? ');
console.log (colorInput);

alert(`I've never seen a ${colorInput} ${animalInput}!`);

//breakfast sunnyside up eggs and sausage
//lunch tuna sandwich
//dinner phad see eiw

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
console.log(favoriteMeal);
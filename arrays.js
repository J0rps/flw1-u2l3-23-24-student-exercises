let fruit = document.querySelector(".fruit");
let flower = document.querySelector(".flower");
let color = document.querySelector(".color");
let age = document.querySelector(".age");


// CODE ALONG
// 1. Update the variable fruitList so that it is an array with at least 4 fruits.
let fruitList = ["Grape", "Apple", "Watermelon", "Orange"];
console.log(fruitList);

// 2. Update the variable flowerList so that it is an array with at least 4 flowers.
let flowerList = ["Daisy", "Rose", "Sunflower", "Tulip"];
console.log(flowerList);

// 3. Update the variable colorList so that it is an array with at least 4 different colors.
let colorList = ["Purple", "Red", "Green", "Yellow"];
console.log(colorList);

// 4. Update the variable ageList so that it is an array with a list of ages (numbers) of classmates and volunteers.
let ageList = [17,16, 18, 21];
console.log(ageList);


// CODE SOLO
// 5. Update the variable favFruit to retrieve the array element of your favorite fruit in the fruitList array. 
// 6. Update the innerHTML to the favFruit variable.
let favFruit = fruitList[0];
fruit.innerHTML = 'My favorite fruit is ' + favFruit ;


// 7. Update the variable favFlower to retrieve the array element of your favorite flower in the flowerList array. 
// 8. Update the innerHTML to the favFlower variable.
let favFlower = flowerList[1];
flower.innerHTML = 'My favorite flower is ' + favFlower;

// 9. Update the variable favColor to retrieve your favorite color from the colorList array. 
// 10.Update the innerHTML to the favColor variable.
let favColor = colorList[0];
color.innerHTML = 'My favorite color is ' + favColor;


// 11. Update the variable oldestAge to retrieve the array element of the oldest person in the ageList array. 
// 12. Update the innerHTML to the oldestAge variable.
let oldestAge = ageList[0];
age.innerHTML = 'I am ' + oldestAge + ' Years old';



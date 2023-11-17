"use strict";
function performDanceMove(moveName, moveReps, hasFlair) {
    console.log(`I do the ${moveName} ${moveReps} times !`);
    if (hasFlair) {
        console.log('I do it with flair!');
    }
}
let danceMoves = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true],
];
for (var i = 0; i < danceMoves.length; i++) {
    performDanceMove(...danceMoves[i]);
}
function getFilledArray(value, n) {
    return Array(n).fill(value);
}
let stringArray;
let numberArray;
let personArray;
let coordinateArray;
// Write your code below:
stringArray = getFilledArray("hi", 6);
numberArray = getFilledArray(9, 6);
personArray = getFilledArray({ name: 'J. Dean', age: 24 }, 6);
coordinateArray = getFilledArray([3, 4], 6);
const siameseCat = {
    name: 'Proxie',
    run: () => 'pitter pat'
};
const bettaFish = {
    name: 'Neptune',
    swim: () => 'bubble blub'
};
function move(pet) {
    if ("run" in pet) {
        return pet.run();
    }
    if ("swim" in pet) {
        return pet.swim();
    }
}
console.log(move(siameseCat));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multione_1 = require("./multione");
multione_1.jump.hop();
console.log(multione_1.run.sprint(25));
function eat(person) {
    console.log(person.firstName);
}
let Jacob = {
    firstName: "Jacob",
    lastName: "Mitchell"
};
eat(Jacob);
let bounce = new multione_1.jump();
bounce.hop();

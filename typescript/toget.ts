import { jump,run,Man } from "./multione";

jump.hop();
console.log(run.sprint(25));

function eat(person:Man):void{
    console.log(person.firstName);
}

let Jacob:Man = {
    firstName: "Jacob",
    lastName: "Mitchell"
}

eat(Jacob);

let bounce = new jump();

bounce.hop();

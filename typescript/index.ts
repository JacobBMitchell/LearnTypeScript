let aged: boolean;
aged = true;
let realAge = 0;

if (aged) {
    realAge = 4;
}

let dogAge = realAge * 7;

console.log(dogAge + " years");

function bark(count: number): void {//control input and output
    for (let i = 0; i < count; i++) {
        console.log("bark");
    }
}

bark(2);

//require a type
function proclaim(status?: string) { // status = "ready.." default a value
    console.log(`I'm ${status || 'not ready...'}`);
}

proclaim();
proclaim('ready?');
proclaim('ready!');

const arrowGreeting = (name?: string): string => {
    if (name) {
        return `Hello, ${name}`;
    }
    return "No name?";
}
console.log(arrowGreeting("Jacob"));

let doublenumber: number[][] = [[3,4],[5,6]]

const distance = (pairs:number[][]):number => {
    let [x1, x2, y1, y2] = [pairs[0][0], pairs[1][0], pairs[0][1], pairs[1][1]]; 
    let dist = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    return dist;
}
console.log(distance(doublenumber));

function addPower(p:number, ...numsToAdd:number[]):number{
    let answer = 0; 
    for(let i = 0; i < numsToAdd.length; i++){
      answer += numsToAdd[i] ** p;
    }
    return answer;
  }
  
  console.log(addPower(3, 4, 5, 6));

let Carol = {
    name: "Carol Knight",
    age : 21,
    period: false
}

function hiGirl(girl: { name: any; age: any; period?: boolean; }) {
    console.log(`Hi ${girl.name}, who is ${girl.age}`);
}

hiGirl(Carol);

let birthdayBabies: { name: string; age: number; giftWish: string; success: boolean;}[] = [
    {name: 'Liam', age: 0, giftWish: 'karate skills', success: false}, 
    {name: 'Olivia', age: 0, giftWish: 'a bright future', success:true}, 
    {name: 'Ava', age: 0, giftWish: '$0.25', success:true}
  ]; 

type Coord = [number, number, string, number, number, string]; //tuple

let codecademyCoordinates:Coord = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates:Coord = [25, 0 , 'N' , 71, 0, 'W'];

type OperatorFunction = (arg0:number, arg1:number) => number; //limits the type of function to go into a function

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback:OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name,'!');
  let value25 = operationCallback(2,5);
  console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
  console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25,7), '.');
  console.log('Now fill out this worksheet.');
}

type Family<T> = {
    parents: [T, T], mate: T, children: T[]
  };

let coordfam: Family<Coord> = {
    parents : [codecademyCoordinates, bermudaTCoordinates],
    mate : codecademyCoordinates,
    children : [codecademyCoordinates]
};

console.log(coordfam.mate);

import carebare from "../Carol.json"; /*   "resolveJsonModule": true      in tsconfig*/

console.log(`This name has been imported, my gfs name is ${carebare.firstname}!`);

function printNumsAndStrings(statement:string | number) { // union can only be one of the 2
    console.log(`ℹ️ LOG:: ${statement}`);
  }
  
  printNumsAndStrings('hello!');

  function formatListings(listings:(string | number)[]) { //how to limit they types in an array or tuple
    return listings.map((listing) => {
      if (typeof listing === 'string') {
        return listing.toUpperCase();
      }
  
      if (typeof listing === 'number') {
        return `$${listing.toLocaleString()}`;
      }
    });
  }
  
  const result = formatListings([
    '123 Main St',
    226800,
    '580 Broadway Apt 4a',
    337900,
  ]);
  
  console.log(result);

  type Status = 'idle' | 'downloading' | 'complete'; //creating a union type for function

function downloadStatus(status:Status){
  if (status === 'idle'){
    console.log('Download')
  }
  if (status === 'downloading'){
    console.log('Downloading...')
  }
  if (status === 'complete'){
    console.log('Your download is complete!')
  }
}

downloadStatus("idle");
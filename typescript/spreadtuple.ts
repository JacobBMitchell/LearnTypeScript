function performDanceMove(moveName:string, moveReps:number, hasFlair:boolean):void{
    console.log(`I do the ${moveName} ${moveReps} times !`);
    if(hasFlair){
      console.log('I do it with flair!');
    }
  }
  
  let danceMoves:[string,number,boolean][] = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true],
  ];
  
  for (var i = 0; i<danceMoves.length; i++){
    performDanceMove(...danceMoves[i]);
  }



  function getFilledArray<T>(value: T, n: number): T[] { //generic in a function that can take multiple types
    return Array(n).fill(value);
  }
  
  let stringArray: string[];
  let numberArray: number[];
  let personArray: {name: string, age: number}[];
  let coordinateArray: [number, number][];
  
  // Write your code below:
  
  stringArray = getFilledArray<string>("hi",6);
  numberArray = getFilledArray<number>(9,6);
  personArray = getFilledArray<{name: string, age: number}>({name: 'J. Dean', age: 24},6);
  coordinateArray = getFilledArray<[number,number]>([3,4],6);


  type Cat = { //functions in types
    name: string;
    run: () => string;
  }
  
  type Fish = {
    name: string;
    swim: () => string;
  }
  
  const siameseCat = { 
    name: 'Proxie', 
    run: () => 'pitter pat'
  }
  
  const bettaFish = { 
    name: 'Neptune', 
    swim: () => 'bubble blub'
  }
  
  function move(pet: Cat | Fish) {// use in to limit functionality based on function or form
    if ("run" in pet){
      return pet.run();
    }
    if ("swim" in pet){
      return pet.swim();
    }
  
  }
  
  console.log(move(siameseCat))
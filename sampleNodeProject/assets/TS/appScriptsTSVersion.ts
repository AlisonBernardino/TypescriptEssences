/*
// Objects, enums && interfaces
const animal = {
  type: 'Cat',
  age: 4,
  color: 'White',
  sizeScale: 'Medium',
};

const humanA: {
  name: string;
  age: number;
  occupation: string;
  isAdult: boolean;
} = {
  name: 'Jason',
  age: 32,
  occupation: 'Coder',
  isAdult: true,
};

const humanB: {
  name: string;
  age: number;
  occupation: string;
  isAdult: boolean;
} = {
  name: 'Lilian',
  age: 31,
  occupation: 'Nurse',
  isAdult: true,
};

// Object using enums + interfaces

enum validOccupations {
  Nurse,
  Doctor,
  Administrator,
  Coder,
  Cop,
  Teacher,
  Engineer,
}

interface humanInterface {
  name: string;
  age: number;
  occupation: validOccupations;
  isAdult: boolean;
}

interface formationEnhancedInterface extends humanInterface {
  formationLevel: string[];
}

const humanC: humanInterface = {
  name: 'Bryan',
  age: 22,
  occupation: validOccupations.Coder,
  isAdult: false,
};

const humanD: formationEnhancedInterface = {
    name: 'Alice',
    age: 21,
    occupation: validOccupations.Administrator,
    isAdult: false,
    formationLevel: [`Administration technician`,`Administration graduation`],
}

// Going deeper with the "lists"
function showFormationItems(itemsList: string[]){
    for(const listElement of itemsList){
        console.log(`- `, listElement);
    }
}

console.log(showFormationItems(humanD.formationLevel));

// Using the 'any' type variable
// (Typescript "dark side")

let sampleVariable: any;
sampleVariable: true;
sampleVariable: 'A';
sampleVariable: 13;

let stringSample01: string = 'String';
// "any" type variables are compatible
// inside everywhere (In theory)
// This can cause a lot of problems.

stringSample01 = sampleVariable;

let stringSample02: string = 'Sample';
stringSample02 = sampleVariable;

// Another sample (Using functions)
function reuniteStrings(text01: string, text02: string) {
  console.log(text01 + text02);
}

reuniteStrings(stringSample01, stringSample02);


// Custom variables types definition
type inputType = string | number;
function sumItems(inputX: inputType, inputY: inputType) {
  if (typeof inputX === 'string' || typeof inputY === 'string') {
    let valueXToString = inputX.toString();
    let valueYToString = inputY.toString();
    let finalValueIntoString = valueXToString + valueYToString;
    return finalValueIntoString;
  } else {
    let finalValueIntoNumber = inputX + inputY;
    return finalValueIntoNumber;
  }
}

console.log(2, 4);
console.log(`À`, `B`);
console.log(`Welcome, `, `Mr. Bond!`);
console.log(16, 4);

*/

// Defining the function return type
function subtractNumbers(valueA: number, valueB: number): number {
  let subtractionResult = valueA - valueB;
  return subtractionResult;
}

console.log(subtractNumbers(1, 5));

// Right moment to use functions "void" return
function showBooleanElements(element01: boolean, element02: boolean): void {
  console.log(element01, element02);
}

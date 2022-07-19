let selectedButton = document.getElementById('divisionButton');
let fieldAInput = document.getElementById('field01Input');
let fieldBInput = document.getElementById('field02Input');

function splitValuesTreatingStrings(numberA, numberB) {
    if (typeof numberA === 'number' && typeof numberB === 'number' && numberB != undefined) {
        let divisionResult = numberA / numberB;
        return `Division result = ${divisionResult}`;
    } else {
        let elementA = Number(numberA);
        let elementB = Number(numberB);
        divisionResult = elementA / elementB;
        console.log(`Checking the denominator value. Null denominators will cause a division error.`);
        return `Division result = ${divisionResult}`;
    }
}

selectedButton.addEventListener('click', () => {
    console.log(splitValuesTreatingStrings(fieldAInput.value, fieldBInput.value));
});
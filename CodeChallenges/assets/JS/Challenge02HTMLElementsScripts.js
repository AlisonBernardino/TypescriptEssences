// Typescript practical challenges

// Challenge 02
let updateButton = document.getElementById('updateBalance');
let clearButton = document.getElementById('clearBalance');
let valuesSum = document.getElementById('balanceField');

valuesSum.innerHTML = 0;

function addToBalance(sumValue) {
    valuesSum.innerHTML += sumValue;
}

function clearBalance() {
    valuesSum.innerHTML = '';
}

updateButton.addEventListener('click', () => {
    addToBalance(valuesSum.value);
});

clearButton.addEventListener('click', () => {
    clearBalance();
});
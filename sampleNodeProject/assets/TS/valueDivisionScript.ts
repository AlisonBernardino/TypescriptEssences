let grabbedButton = document.getElementById(
  'divisionButton'
) as HTMLInputElement;
let value01Input = document.getElementById('field01Input') as HTMLInputElement;
let value02Input = document.getElementById('field02Input') as HTMLInputElement;

function splitTotalValue(
  itemA: number,
  itemB: number,
  isPrintingAllowed: boolean,
  outputSentence: string
) {
  let splittedValue = itemA / itemB;
  return splittedValue;
}

let outputSentence = `Mathematic operation result: `;
if (
  grabbedButton &&
  value01Input &&
  value02Input &&
  value02Input != undefined
) {
  grabbedButton.addEventListener('click', () => {
    splitTotalValue(
      Number(value01Input.value),
      Number(value02Input.value),
      true,
      outputSentence
    );
  });
}

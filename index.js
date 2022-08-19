//------------ Functions ------------//

//Generating 4 digit random numbers
function generatePin(n = 4) {
  let result =
    Math.floor(Math.random() * 9 * Math.pow(10, n - 1)) + Math.pow(10, n - 1);
  return result;
}

//Get Element Value
function getElementValue(elementId) {
  const element = document.getElementById(elementId);
  const floatConverted = parseFloat(element.innerText);

  return floatConverted || floatConverted === 0
    ? floatConverted
    : element.innerText;
}

//Get Input Field Value
function getInputValue(inputFieldId) {
  const field = document.getElementById(inputFieldId);
  const floatConverted = parseFloat(field.value);

  //Clearing Input field
  //after getting value from it
  field.value = "";

  //Checking Validity
  if (!floatConverted || floatConverted < 0) {
    alert("Requires Amount in Number > 0");
    return 0;
  }
  return floatConverted;
}

//Set Input Field value
function setInputFieldValue(fieldId, updatedValue) {
  const field = document.getElementById(fieldId);
  field.value = updatedValue;
}

//------------ Target Elements -----------//
const generateButton = document.querySelector(".generate-btn");

generateButton.addEventListener("click", function () {
  setInputFieldValue("generated-pin-field", generatePin());
});

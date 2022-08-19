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

//Set Element value
function setElementValue(elementId, updatedValue) {
  const element = document.getElementById(elementId);
  element.innerText = updatedValue;
}

//Get Input Field Value
function getInputValue(inputFieldId) {
  const field = document.getElementById(inputFieldId);

  /*
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
  */

  return field.value;
}

//Set Input Field value
function setInputFieldValue(fieldId, updatedValue) {
  const field = document.getElementById(fieldId);
  field.value = updatedValue;
}

//CLEAR Button's functionality
function CLEAR() {
  setInputFieldValue("input-pin-field", "");
}

//BACKSPACE Button's functionality
function BACKSPACE() {
  const currentlyDisplaying = getInputValue("input-pin-field");
  let splited = currentlyDisplaying.split("");
  splited.pop();
  setInputFieldValue("input-pin-field", splited.join(""));
}

//SUBMIT Button's functionality
function MATCH() {
  const generatedPin = getInputValue("generated-pin-field");
  const inputPin = getInputValue("input-pin-field");

  if (generatedPin.length < 1) {
    alert("NO PIN HAS BEEN GENERATED");
    return;
  }

  const triesLeft = document.querySelector(".action-left");
  let remaining = parseInt(triesLeft.innerText[0]);

  if (remaining === 0) {
    alert("NO MORE TRIES LEFT");
    return;
  }

  if (generatedPin === inputPin) {
    document.getElementById("failure-msg").style.display = "none";
    document.getElementById("success-msg").style.display = "block";
  } else {
    document.getElementById("failure-msg").style.display = "block";
    document.getElementById("success-msg").style.display = "none";
    triesLeft.style.display = "block";
    setElementValue("tries-left", remaining - 1);
  }
}

//------------ Target Elements -----------//
const generateButton = document.querySelector(".generate-btn");
const numericalPad = document.querySelector(".calc-body");

//------------- Event Listener -----------//
generateButton.addEventListener("click", function () {
  setInputFieldValue("generated-pin-field", generatePin());
});

numericalPad.addEventListener("click", function (e) {
  const classList = e.target.classList;

  const condition1 = classList.contains("button");
  const condition2 = classList.contains("submit-btn");

  if (condition2) {
    MATCH();
    return;
  }

  if (!condition1 || condition2) {
    return;
  }

  const buttonValue = e.target.innerText;

  if (buttonValue === "C") {
    CLEAR();
    return;
  }

  if (buttonValue === "<") {
    BACKSPACE();
    return;
  }

  const currentlyDisplaying = getInputValue("input-pin-field");
  setInputFieldValue("input-pin-field", currentlyDisplaying + buttonValue);
});

function textCheck(inputText) {
  console.log("::: Running textCheck :::", inputText);

  if (inputText.length < 20) {
    window.alert(
      "Please enter a valid text with sufficient length for analysis!"
    );
    return false;
  } else {
    return true;
  }
}

export { textCheck };

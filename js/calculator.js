function addToEquation(value) {
  document.getElementById('equation').value += value;
}

function clearEquation() {
  document.getElementById('equation').value = '';
  document.getElementById('solution').value = '';
}

function calc() {
  var equation = document.getElementById('equation').value;
  var solution = eval(equation);
  document.getElementById('solution').value = solution;
}

function copysolution() {
  var solution = document.getElementById('solution').value;
  navigator.clipboard.writeText(solution);
}

function roundsolution() {
  var solution = document.getElementById('solution').innerHTML;
  var roundTo = document.getElementById('roundTo').value;
  var roundedsolution = parseFloat(solution).toFixed(roundTo);
  document.getElementById('solution').innerHTML = roundedsolution;
}

var equationInput = document.getElementById('equation');
equationInput.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    calc();
  }
});

var input = document.querySelector('input'); //To select the input tag
var button = document.querySelector('button'); //To select the button tag
var number; // Initializing number of primes
var count = 0;
var prime = 2;
var primeNumberArray = []; //An array for storing the primes

// Registering the inputed value
document.querySelector('input').onblur = function(event){
    // console.log(input.value);
    number = input.value; // Retrieving input value
    primeNumbers(); // Calling the primeNumbers function in order to get our array
    // input.value = '';
};

// To obtain array of Prime Numbers
function primeNumbers() {
	var notPrime = false;
	while (count < number){
		for (let i = 2; i < prime; i++) {
			if (prime % i == 0) {
				notPrime = true;
				break;}
			else{notPrime = 0;}
		}
		if (notPrime == false) {
			primeNumberArray.push(prime);
			count++;}
	prime++;
	}
	console.log(primeNumberArray);
	return primeNumberArray;
}

button.addEventListener('click', () => {
	// Creating table
	var table = document.querySelector('table');
	var thead = document.querySelector('thead');
	var tbody = document.querySelector('tbody');
	var theadRow = document.createElement('tr');

	for (let i = -1; i < primeNumberArray.length; i++) {
		var theadRowCells = document.createElement('th');

		if (i == -1){
			theadRowCells.textContent = '';
			theadRow.appendChild(theadRowCells);
		}

		else{
			theadRowCells.textContent = primeNumberArray[i];
			theadRow.appendChild(theadRowCells);
		}
	}
	thead.appendChild(theadRow);

	for (let cell = 0; cell < primeNumberArray.length; cell++) {
		var tBodyRow = document.createElement('tr');


		for (let i = -1; i < primeNumberArray.length; i++) {
			var tBodyRowCells = document.createElement('td');

			if (i == -1){
				tBodyRowCells.textContent = primeNumberArray[cell];
				tBodyRow.appendChild(tBodyRowCells);
			}

			else{
				tBodyRowCells.textContent = primeNumberArray[i] * primeNumberArray[cell];
				tBodyRow.appendChild(tBodyRowCells);
			}
		}
		tbody.appendChild(tBodyRow);
	}
});
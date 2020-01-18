var input = document.querySelector('input'); //To select the input tag
var button = document.querySelector('button'); //To select the button tag
var number; // Initializing number of primes
var count = 0; // Keeps count of the number of primes. 
				// When it is equal to number, the while loop terminates
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

// To listen for the click event on button
button.addEventListener('click', () => {
	// Creating table
	var table = document.querySelector('table');
	var thead = document.querySelector('thead');
	var tbody = document.querySelector('tbody');
	var theadRow = document.createElement('tr'); // Creating the table head row

	for (let i = -1; i < primeNumberArray.length; i++) { //To display all the primes within the table head columns
		var theadRowCells = document.createElement('th'); //Creating table head cells

		if (i == -1){ // This is necessary because the first coulmn is blank
			theadRowCells.textContent = ''; 
			theadRow.appendChild(theadRowCells); // Attach each cell to the parent tag(table head row)
		}

		else{
			theadRowCells.textContent = primeNumberArray[i]; //To fetch the individual member of the primeNumber Array
			theadRow.appendChild(theadRowCells);
		}
	}
	thead.appendChild(theadRow); // Attach table head row to the parent tag (table head)

	for (let cell = 0; cell < primeNumberArray.length; cell++) { // Filling in the table data
		var tBodyRow = document.createElement('tr');


		for (let i = -1; i < primeNumberArray.length; i++) {
			var tBodyRowCells = document.createElement('td'); // creating the table data cells

			if (i == -1){
				tBodyRowCells.textContent = primeNumberArray[cell]; // First column of each data contains 
																	// the respective element of the array
				tBodyRow.appendChild(tBodyRowCells); // Attach table body row to the parent tag (table body)
			}

			else{
				tBodyRowCells.textContent = primeNumberArray[i] * primeNumberArray[cell]; // To multiply the primes
				tBodyRow.appendChild(tBodyRowCells);
			}
		}
		tbody.appendChild(tBodyRow); // Attach each table body row to the parent tag (table body)
	}
});
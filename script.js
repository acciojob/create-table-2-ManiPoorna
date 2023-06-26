function createTable() {
    //Write your code here
	let rows = prompt("input number of rows");
	let columns = prompt("input number of columns");
	// document.body.innerHTML = rows;
	
	const table = document.getElementById('myTable');
	for (let i = 0; i <rows ; i++) {
		const row = document.createElement("tr");
		for (let j = 0; j <columns ; j++) {
			let column = document.createElement("td");
			column.innerText = `Row-${i} Column-${j}`
			row.appendChild(column);
		}
		table.appendChild(row);
	}
  document.body.appendChild(table);
}

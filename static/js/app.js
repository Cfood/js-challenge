// from data.js
var tableData = data;

function insertData(dataset) {


    var tableBody = d3.select("tbody");

    tableBody.html('');

    for (let i = 0; i < dataset.length; i++) {

        var tableRow = tableBody.append("tr")
        
        tableRow.append("td").text(dataset[i].datetime);
        tableRow.append("td").text(dataset[i].city);
        tableRow.append("td").text(dataset[i].state);
        tableRow.append("td").text(dataset[i].country);
        tableRow.append("td").text(dataset[i].shape);
        tableRow.append("td").text(dataset[i].durationMinutes);
        tableRow.append("td").text(dataset[i].comments);

        }


    }


insertData(tableData);

console.log('wassup')

var button = d3.select("button");

button.on("click", runEnter);

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select('.form-control');

    var typedInput = inputElement.property('value');

    console.log('sightings on ' + typedInput )

    var filteredData = tableData.filter(sighting => sighting.datetime === typedInput);


    insertData(filteredData);
}
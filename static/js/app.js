// from data.js
var tableData = data;
// from data.js


function insertData() {


    var tableBody = d3.select("tbody");

    tableBody.html('');

    for (let i = 0; i < tableData.length; i++) {

        var tableRow = tableBody.append("tr")
        
        tableRow.append("td").text(tableData[i].datetime);
        tableRow.append("td").text(tableData[i].city);
        tableRow.append("td").text(tableData[i].state);
        tableRow.append("td").text(tableData[i].country);
        tableRow.append("td").text(tableData[i].shape);
        tableRow.append("td").text(tableData[i].durationMinutes);
        tableRow.append("td").text(tableData[i].comments);

        }


    }


    


// }


insertData();


// create table

// for element in data
//     new table row
//     for element in element
//         create col
//         insert data element

var fs = require('fs');
var csv = require('fast-csv');

var argv = require('minimist')(process.argv.slice(2));

var stream = fs.createReadStream(argv._[0]);
var outputFile = fs.createWriteStream("ynab.csv");

csv
    .fromStream(stream)
    .transform(function(data) {
        //the first row
        if (data[0] === "Date") {
            //the top row needs to be this: https://www.youneedabudget.com/support/article/csv-file-importing
            return ['Date', 'Payee', 'Category', 'Memo', 'Outflow', 'Inflow'];
        }

        //convert from string to float
        var amount = parseFloat(data[7]);

        return [
            data[0],
            data[3],
            '',
            data[4],
            amount < 0 ? Math.abs(amount) : '',
            amount < 0 ? '' : Math.abs(amount)
        ];
    })
    .pipe(csv.createWriteStream({
        headers: true
    }))
    .pipe(outputFile);

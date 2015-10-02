# Paypal to YNAB
This is a very simple script that converts Paypal style CSV exports to what YNAB expects.

See more detail on YNAB CSV importing here: [https://www.youneedabudget.com/support/article/csv-file-importing](https://www.youneedabudget.com/support/article/csv-file-importing)

## Usage
First you need to download the *Balance affecting Payments* CSV from your Paypal account. Log into your Paypal account and visit [this url](https://www.paypal.com/cgi-bin/webscr?cmd=_history-download). Please note this URL is likely to change at some point so it's only here as a convenience.

Clone this repo and npm install to get dependencies.

```
git clone git@github.com:mansona/paypal-to-ynab.git
cd paypal-to-ynab
npm install
```

Then all you need to do is run the index.js script with your downloaded CSV file:

```
node index.js ~/Downloads/PaypalCSVExport.csv
```

Which will produce a `ynab.csv` file in the current directory

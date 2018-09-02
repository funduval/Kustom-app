var Tabletop = require('tabletop');
var request = require('request');

var auth =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViOGFjZDc1YzY0NTRjMDAxNDgzMTcyNCIsInVzZXIiOiI1YjhhY2Q3NTUzYTUzZWE1NmUxMmMwYjEiLCJvcmciOiI1Yjg3MWY2YTE3ZjkwNzg2NTEyYTFkMzEiLCJvcmdOYW1lIjoienp6LWZ1bmRhIiwidXNlclR5cGUiOiJtYWNoaW5lIiwicm9sZXMiOlsib3JnLmFkbWluIiwib3JnLnVzZXIiXSwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjViOGFjZDc1NTNhNTNlYTU2ZTEyYzBiMSJ9.jIXo8ha3MyLsBGJmh3dMYRIkQhPxznWNjVuUEQD50wM';

var KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViOGFjZDc1YzY0NTRjMDAxNDgzMTcyNCIsInVzZXIiOiI1YjhhY2Q3NTUzYTUzZWE1NmUxMmMwYjEiLCJvcmciOiI1Yjg3MWY2YTE3ZjkwNzg2NTEyYTFkMzEiLCJvcmdOYW1lIjoienp6LWZ1bmRhIiwidXNlclR5cGUiOiJtYWNoaW5lIiwicm9sZXMiOlsib3JnLmFkbWluIiwib3JnLnVzZXIiXSwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjViOGFjZDc1NTNhNTNlYTU2ZTEyYzBiMSJ9.jIXo8ha3MyLsBGJmh3dMYRIkQhPxznWNjVuUEQD50wM';

var publicSpreadsheetUrl =
  'https://docs.google.com/spreadsheets/d/152Rn6U6JmYJps_-FZWhl_89b7pD4Z4xYS-zuIZgN6wg/pubhtml';

function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showData,
    simpleSheet: true
  });
}

function showData(data, tabletop) {
  if (data.length) {
    var customers = JSON.parse(JSON.stringify(data));
    console.log(customers);
  } else {
    console.log('No data found.');
  }
}

function postCustomers(customers, KEY) {
  var options = {
    method: 'POST',
    url: 'https://api.kustomerapp.com/v1/customers',
    headers: {
      'content-type': 'application/json',
      authorization: KEY
    },
    body: customers
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

init();

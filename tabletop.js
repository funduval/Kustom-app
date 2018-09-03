var Tabletop = require('tabletop');
var request = require('request');

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
  data.forEach(function(customer, i) {
    var emailsArray = [];
    var phonesArray = [];

    var auth =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViOGFjZDc1YzY0NTRjMDAxNDgzMTcyNCIsInVzZXIiOiI1YjhhY2Q3NTUzYTUzZWE1NmUxMmMwYjEiLCJvcmciOiI1Yjg3MWY2YTE3ZjkwNzg2NTEyYTFkMzEiLCJvcmdOYW1lIjoienp6LWZ1bmRhIiwidXNlclR5cGUiOiJtYWNoaW5lIiwicm9sZXMiOlsib3JnLmFkbWluIiwib3JnLnVzZXIiXSwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjViOGFjZDc1NTNhNTNlYTU2ZTEyYzBiMSJ9.jIXo8ha3MyLsBGJmh3dMYRIkQhPxznWNjVuUEQD50wM';

    emailsArray.push({ email: customer.email });
    phonesArray.push({ phone: customer.homePhone, type: 'home' });
    phonesArray.push({ phone: customer.workPhone, type: 'work' });

    var customerObject = {
      type: customer.customerType,
      attributes: {
        name: customer.firstName + ' ' + customer.lastName,
        displayName: customer.firstName + ' ' + customer.lastName,
        emails: emailsArray,
        phones: phonesArray,
        firstName: customer.firstName,
        lastName: customer.lastName
      }
    };
    console.log(customerObject);
    // postCustomers(customerObject, auth);
  });
}

function postCustomers(customerObject, auth) {
  console.log(customerObject);

  var options = {
    method: 'POST',
    url: 'https://api.kustomerapp.com/v1/customers',
    headers: {
      'content-type': 'application/json',
      authorization: auth
    },
    body: customerObject
  };

  /*request(options, function(error, response, returnedBody) {
    if (error) throw new Error(error);
    console.log(returnedBody);
  });*/
}

init();

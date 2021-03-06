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
	const customers = data;

	customers.forEach(function(customer, i) {
		//*****************SOME DESTRUCTURING BELOW*****************//

		function makeArrayOfEmails() {
			return {
				data: {
					type: customer.customerType,
					attributes: {
						name: customer.firstName + ' ' + customer.lastName,
						displayName: customer.firstName + ' ' + customer.lastName,
						emails: [{ email: customer.email }],
						phones: [
							{ phone: customer.workPhone, type: 'work' },
							{ phone: customer.homePhone, type: 'home' }
						],
						firstName: customer.firstName,
						lastName: customer.lastName,
						birthday: customer.birthday
					}
				}
			};
		}

		function makeArrayOfPhones() {
			return {
				data: {
					type: customer.customerType,
					attributes: {
						name: customer.firstName + ' ' + customer.lastName,
						displayName: customer.firstName + ' ' + customer.lastName,
						emails: [{ email: customer.email }],
						phones: [
							{ phone: customer.workPhone, type: 'work' },
							{ phone: customer.homePhone, type: 'home' }
						],
						firstName: customer.firstName,
						lastName: customer.lastName,
						birthday: customer.birthday
					}
				}
			};
		}
		const { data: { attributes: { emails: [item1] } } } = makeArrayOfPhones();

		const { data: { attributes: { phones: [itemA, itemB] } } } = makeArrayOfPhones();

		function extractNested() {
			return {
				data: {
					type: customer.customerType,
					attributes: {
						name: customer.firstName + ' ' + customer.lastName,
						displayName: customer.firstName + ' ' + customer.lastName,
						emails: [{ email: customer.email }],
						phones: [
							{ phone: customer.workPhone, type: 'work' },
							{ phone: customer.homePhone, type: 'home' }
						],
						firstName: customer.firstName,
						lastName: customer.lastName,
						birthday: customer.birthday
					}
				}
			};
		}
		const { data } = extractNested();
		//****************done Destructuring***************************//

		const postBody = data;

		console.log(postBody);

		//postCustomers(postBody);

		function postCustomers(postBody) {
			var body = postBody;
			var auth =
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViOGFjZDc1YzY0NTRjMDAxNDgzMTcyNCIsInVzZXIiOiI1YjhhY2Q3NTUzYTUzZWE1NmUxMmMwYjEiLCJvcmciOiI1Yjg3MWY2YTE3ZjkwNzg2NTEyYTFkMzEiLCJvcmdOYW1lIjoienp6LWZ1bmRhIiwidXNlclR5cGUiOiJtYWNoaW5lIiwicm9sZXMiOlsib3JnLmFkbWluIiwib3JnLnVzZXIiXSwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjViOGFjZDc1NTNhNTNlYTU2ZTEyYzBiMSJ9.jIXo8ha3MyLsBGJmh3dMYRIkQhPxznWNjVuUEQD50wM';

			var options = {
				method: 'POST',
				url: 'https://api.kustomerapp.com/v1/customers',
				headers: {
					'content-type': 'application/json',
					authorization: auth
				},
				body: body
			};
			console.log(options.body);
			/*request(options, function(error, response, returnedBody) {
				if (error) throw new Error(error);
				console.log(returnedBody);
			});*/
		}
	});
}

init();

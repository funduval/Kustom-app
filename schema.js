var kustomer = {
  type: customer.customerType,

  attributes: {
    name: customer.firstName + ' ' + customer.lastName,
    displayName: customer.firstName + ' ' + customer.lastName,

    emails: [
      {
        email: customer.emails[0].emails,
        verified: false,
        type: ''
      }
    ],

    phones: [
      {
        phone: customer.homePhone,
        verified: false,
        type: 'home'
      },
      {
        phone: customer.workPhone,
        verified: false,
        type: 'work'
      }
    ],

    firstName: customer.firstName,
    lastName: customer.lastName
  }
};

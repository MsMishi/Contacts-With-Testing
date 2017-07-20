const allContacts = require("./addContacts.json")
const printContacts = function() {
  const contacts = allContacts.map(function(contact) {
    return [
      contact.first_name + " " + contact.last_name,
      contact.email
    ]
  }).sort(function(a, b) {
    return a[0] < b[0]
      ? 1
      : a[1] > b[1]
        ? 1
        : 0
  })
  const nameColumnLength = contacts.map(function(contact) {
    return contact[0]
  }).reduce(findMaxLength, 0)

  const emailColumnLength = contacts.map(function(contact) {
    return contact[1]
  }).reduce(findMaxLength, 0)

  //Formatting table
  console.log("All Contacts")

  const bar = ("|" +
    "-".repeat(nameColumnLength + 2) +
    "-".repeat(emailColumnLength + 2) +
    "|")

  console.log("|  Full Name " +
    " ".repeat(nameColumnLength - 9) +
    "| Email Address " +
    " ".repeat(emailColumnLength - 13) +
    "|")

  console.log(bar)

  contacts.forEach(function(contact) {
    const name = contact[0]
    const email = contact[1]
    console.log("|" + name +
      " ".repeat(nameColumnLength - name.length + 1) +
      "|" + email +
      " ".repeat(emailColumnLength - email.length + 1) +
      "|")
  })
  console.log(bar)
}

const findMaxLength = function(length, string) {
  return string.length > length
    ? string.length
    : length
}
printContacts()

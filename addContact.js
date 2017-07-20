/*const fs = require('fs')
fs.readFileSync('./addContacts.json', (err, json) => {
  if (err) throw err
  const contacts = JSON.parse(data)
  console.log('contacts', contacts)
})
*/
const allContacts = require("./addContacts.json")
console.log("allContacts")

const addContact = function(firstName, lastName, email) {
  const contact = {}
  contact.first_name = firstName,
    contact.last_name = lastName,
    contact.email = email

  allContacts.push(contact)
}

  /*
addContacts([
  ["Kim", "Kardashian", "hateme@gmail.com"],
  ["Kanye", "Kardashian", "wehatehim@gmail.com"],
  ["Beyonce", "Kardashian", "iloveher@gmail.com"]
])
*/

const addContacts = function(contacts) {
  contacts.forEach( function(contact) {
    addContacts(contact[0], contact[1], contact[2])
  })
}

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

addContact("North", "West", "baby@gmail.com")
addContacts([
  [
    "Kim", "Kardashian", "hateme@gmail.com"
  ],
  [
    "Kanye", "Kardashian", "wehatehim@gmail.com"
  ],
    ["Beyonce", "Knowles", "iloveher@gmail.com"]
])
printContacts()

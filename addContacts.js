
const addContacts = function(contacts) {
  contacts.forEach( function(contact) {
    addContacts(contact[0], contact[1], contact[2])
  })
}

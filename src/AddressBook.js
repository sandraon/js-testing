function AddressBook() { // loome funktsiooni
    this.contacts = []; // loome kontaktide jaoks massiivi
}

AddressBook.prototype.addContact = function(contact) { // loome funktsiooni addContact, mis võtab parameetrina kontakti ja lisab selle kontaktide massiivi
    this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index) { // loome funktsiooni getContact, mis võtab parameetrina indeksi ja tagastab kontaktide massiivist vastavalt indeksile kontakti
    return this.contacts[index];
}
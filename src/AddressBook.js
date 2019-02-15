function AddressBook() { // loome funktsiooni
    this.contacts = []; // loome kontaktide jaoks massiivi
    this.initialComplete = false; // määrame asünkroonseks testimiseks initialComplete parameetri väärtuseks false
}

AddressBook.prototype.getInitialContacts = function(cb) { // loome asünkroonse funktsiooni esialgsete kontaktide saamiseks, anname parameetriks cb ehk callback funktsiooni
    var self = this; 

    setTimeout(function() { // funktsiooni asünkroonseks muutmiseks kasutame setTimeout funktsiooni
        self.initialComplete = true; // kui funktsiooni käivitamine on lõpetatud, määrame initialComplete parameetri väärtuseks true
        if (cb) { // kui on callback funktsioon, siis tagastame selle
            return cb();
        }
    }, 3); // kui callback funktsiooni pole, kutsume funktsiooni esile 3 ms pärast
}

AddressBook.prototype.addContact = function(contact) { // loome funktsiooni addContact, mis võtab parameetrina kontakti ja lisab selle kontaktide massiivi
    this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index) { // loome funktsiooni getContact, mis võtab parameetrina indeksi ja tagastab kontaktide massiivist vastavalt indeksile kontakti
    return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index) { // loome funktsiooni deleteContact, mis võtab parameetrina indeksi ja kasutades splice meetodit, eemaldab massiivist elemendi
    this.contacts.splice(index, 1);
}
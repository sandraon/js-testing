describe('Address Book', function() { // hakkame testima aadressiraamatu funktsionaalsusi
    it('should be able to add a contact', function() { // testime aadressiraamatus kontakti lisamise funktsionaalsust
        var addressBook = new AddressBook(); // loome AddressBook klassi põhjal objekti addressBook
            thisContact = new Contact(); // loome Contact klassi põhjal objekti thisContact

        addressBook.addContact(thisContact); // kutsume uue kontakti loomiseks välja addressBook objektil meetodi addContact ja anname sisendiks objekti thisContact

        expect(addressBook.getContact(0)).toBe(thisContact); // testimiseks eeldame, et kui võtame aadressraamatust getContact meetodiga esimese kontakti, siis on see sama objekt thisContact
    }); 
});
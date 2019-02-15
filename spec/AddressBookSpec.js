describe('Address Book', function() { // hakkame testima aadressiraamatu funktsionaalsusi
    var addressBook, // koodis korduste vältimiseks defineerime muutujad siin, kust need on kättesaadavad kõikidele aadressraaamtu it meetoditele
        thisContact;

    beforeEach(function() { // funktsioon, mida käivitatakse enne igat järgmist testi, seega koodis korduste vältimiseks loome klassidest objektid selle funktsiooni käigus
        addressBook = new AddressBook(); 
        thisContact = new Contact();
    });

    it('should be able to add a contact', function() { // testime aadressiraamatus kontakti lisamise funktsionaalsust
        addressBook.addContact(thisContact); // kutsume uue kontakti loomiseks välja addressBook objektil meetodi addContact ja anname sisendiks objekti thisContact

        expect(addressBook.getContact(0)).toBe(thisContact); // testimiseks eeldame, et kui võtame aadressraamatust getContact meetodiga esimese kontakti, siis on see sama objekt thisContact
    }); 

    it('should be able to delete a contact', function() { // testime kontakti kustutamise funktsionaalsust
        addressBook.addContact(thisContact); // lisame aadressiraamatusse kontakti
        addressBook.deleteContact(0); // kutsume aadressiraamatus välja meetodi kontakti kustutamiseks ning anname parameetriks 0 ehk kustutame 1. kontakti

        expect(addressBook.getContact(0)).not.toBeDefined(); // testimiseks eeldame, et kui võtame aadressraamatust getContact meetodiga esimese kontakti, siis seda ei eksisteeri
    });
});

describe('Async Address Book', function() { // testime asünkroonselt
    it('should grab initial contacts', function() { // testime esialgsete kontaktide saamist
        var addressBook = new AddressBook();

        addressBook.getInitialContacts(); // kutsume aadressiraamatus välja asünkroonse funktsiooni esialgsete kontaktide saamiseks
        expect(addressBook.initialComplete).toBe(true); // eeldame, et initialComplete on true
    });
});
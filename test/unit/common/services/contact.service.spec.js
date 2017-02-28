describe('ContactService', function () {
    'use strict';

    var contactService;
    var expectedContacts;
    var contacts;
    // var expect = chai.expect;

    beforeEach(module('app'));

    beforeEach(inject(function (_ContactService_) {
        contactService = _ContactService_;
        contacts = [
            {name: 'Adam'},
            {name: 'Bartek'},
            {name: 'Wojtek'}
        ];
        init(contacts);
    }));

    function init(contactsList) {
        contactsList.forEach(function (contact) {
            contactService.save(contact);
        });
    }

    describe('save', function () {
        describe('when contact id doesn\'t exist', function () {
            beforeEach(function () {
                expectedContacts = [
                    {id: 1, name: 'Adam'},
                    {id: 2, name: 'Bartek'},
                    {id: 3, name: 'Wojtek'},
                    {id: 4, name: 'Michał'}
                ];
                contactService.save({name: 'Michał'});
            });
            it('should add new contact', function () {
                expect(contactService.list()).to.eql(expectedContacts);
            });
        });
        describe('when contact id exists in contacts', function () {
            beforeEach(function () {
                expectedContacts = [
                    {id: 1, name: 'Adam'},
                    {id: 2, name: 'Piotr'},
                    {id: 3, name: 'Wojtek'}

                ];
                contactService.save({ id: 2, name: 'Piotr'});
            });

            it('should update indicated contact', function () {
                expect(contactService.list()).to.eql(expectedContacts);
            });
        });
    });

    describe('get', function () {
        it('should return contact with the given id', function () {
            expect(contactService.get(2)).to.deep.equal({id: 2, name: 'Bartek'});
        });
    });
    describe('delete', function () {
        it('should remove contact with id equal 1', function () {
            contactService.delete(1);
            expect(contactService.list()).to.eql([
                {id: 2, name: 'Bartek'},
                {id: 3, name: 'Wojtek'}
            ]);
        });
        it('should remove contact with id equal 3', function () {
            contactService.delete(3);
            expect(contactService.list()).to.eql([
                { id: 1, name: 'Adam'},
                { id: 2, name: 'Bartek'}
            ]);
        });
    });
    describe('list', function () {
        beforeEach(function(){
           expectedContacts = [
               { id: 1, name: 'Adam'},
               { id: 2, name: 'Bartek'},
               { id: 3, name: 'Wojtek'}
           ]
        });
        it('should return contacts list', function () {
            expect(contactService.list()).to.eql(expectedContacts);
        });

    });
});

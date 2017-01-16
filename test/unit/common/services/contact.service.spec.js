describe('ContactService', function ()
{
    'use strict';

    var contactService;
    var expectedContacts;
    var contacts;

    beforeEach(module('app'));

    beforeEach(inject(function (_ContactService_)
    {
        contacts = [
            {name: 'John'},
            {name: 'Simon'},
            {name: 'Frances'}
        ];
        contactService = _ContactService_;
        init(contacts);
    }));

    function init(contactList)
    {
        contactList.forEach(function (contact)
        {
            contactService.save(contact);
        });
    }

    describe('save', function ()
    {
        describe('when contact id doesn\'t exist', function ()
        {
            beforeEach(function ()
            {
                expectedContacts = [
                    {id: 1, name: 'John'},
                    {id: 2, name: 'Simon'},
                    {id: 3, name: 'Frances'},
                    {id: 4, name: 'Marian'}
                ];
                contactService.save({name: 'Marian'});
            });
            it('should add new contact', function ()
            {
                expect(contactService.list()).toEqual(expectedContacts);
            });
        });
        describe('when contact id exists in contacts', function ()
        {
            beforeEach(function ()
            {
                expectedContacts = [
                    {id: 1, name: 'John'},
                    {id: 2, name: 'Marty'},
                    {id: 3, name: 'Frances'}
                ];
                contactService.save({id: 2, name: 'Marty'});

            });

            it('should update indicated contact', function ()
            {
                expect(contactService.list()).toEqual(expectedContacts);
            });
        });
    });

    describe('get', function ()
    {
        it('should return contact with the given id', function ()
        {
            expect(contactService.get(3)).toEqual({id: 3, name: 'Frances'});
            expect(contactService.get(2)).toEqual({id: 2, name: 'Simon'});
        });
    });
    describe('delete', function ()
    {
        it('should remove contact with id equal 1', function ()
        {
            contactService.delete(1);
            expect(contactService.list()).toEqual([{id: 2, name: 'Simon'}, {id: 3, name: 'Frances'}]);
        });
        it('should remove contact with id equal 3', function ()
        {
            contactService.delete(3);
            expect(contactService.list()).toEqual([{id: 1, name: 'John'}, {id: 2, name: 'Simon'}]);
        });
    });
    describe('list', function ()
    {
        beforeEach(function ()
        {
            expectedContacts = [
                {id: 1, name: 'John'},
                {id: 2, name: 'Simon'},
                {id: 3, name: 'Frances'}
            ];
        });

        it('should return contacts list', function ()
        {
            expect(contactService.list()).toEqual(expectedContacts);
        });

    });
});

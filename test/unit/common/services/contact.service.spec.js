describe('ContactService', function ()
{
    'use strict';

    var contactService;
    var expectedContacts;
    var contacts;

    beforeEach(module('app'));

    beforeEach(inject(function (_ContactService_)
    {
        // contactService = _ContactService_;
    }));

    describe('save', function ()
    {
        describe('when contact id doesn\'t exist', function ()
        {
            beforeEach(function ()
            {

            });
            it('should add new contact', function ()
            {

            });
        });
        describe('when contact id exists in contacts', function ()
        {
            beforeEach(function ()
            {

            });

            it('should update indicated contact', function ()
            {

            });
        });
    });

    describe('get', function ()
    {
        it('should return contact with the given id', function ()
        {

        });
    });
    describe('delete', function ()
    {
        it('should remove contact with id equal 1', function ()
        {

        });
        it('should remove contact with id equal 3', function ()
        {

        });
    });
    describe('list', function ()
    {
        it('should return contacts list', function ()
        {

        });

    });
});

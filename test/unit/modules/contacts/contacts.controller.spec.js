fdescribe('ContactCtrl', function ()
{
    'use strict';

    var contactsCtrl;
    var ContactServiceMock;
    var contacts;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, _ContactService_)
    {
        // contacts = [{
        //     name: 'John',
        //     email: 'john@john.pl',
        //     phone: '123456789'
        // }, {
        //     name: 'Jack',
        //     email: 'jack@jack.pl',
        //     phone: '987654321'
        // }];


        // ContactServiceMock = _ContactService_;
        // spyOn(ContactServiceMock, 'list');
        // spyOn(ContactServiceMock, 'get').and.returnValue(contacts[1]);

        // contactsCtrl = $controller('ContactController', {ContactService: ContactServiceMock});

    }));

    describe('initialization', function ()
    {
        it('should set newContact', function ()
        {

        });
        it('should call ContactService.list', function ()
        {

        });
        it('should call ContactService.list only once', function ()
        {

        });
    });

    describe('saveContact', function ()
    {

        it('should call ContactService.save', function ()
        {

        });
        it('should call ContactService.save with new contact data', function ()
        {

        });
        it('should clear newContact object', function ()
        {

        });
    });

    describe('deleteContact', function ()
    {

        it('should call ContactService.delete', function ()
        {

        });

        it('should call ContactService.delete with contact id', function ()
        {
        });

    });
    describe('editContact', function ()
    {
        it('should call ContactService.get', function ()
        {

        });
        it('should call ContactService.get with contact id', function ()
        {

        });
        it('should set newContact to edited contact data', function ()
        {

        });
    });
});

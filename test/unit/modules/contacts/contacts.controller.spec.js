describe('ContactCtrl', function () {
    'use strict';

    var contactsCtrl;
    var ContactServiceMock;
    var contacts;
    var newContact;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, _ContactService_) {
        contacts = [{
            name: 'John',
            email: 'john@john.pl',
            phone: '123456789'
        }, {
            name: 'Jack',
            email: 'jack@jack.pl',
            phone: '987654321'
        }];

        newContact = {
            name: 'John',
            email: 'john@john.pl',
            phone: '123456789'
        }

        ContactServiceMock = _ContactService_;
        sinon.spy(ContactServiceMock, 'list');
        sinon.spy(ContactServiceMock, 'save');
        sinon.spy(ContactServiceMock, 'delete');
        sinon.stub(ContactServiceMock, 'get').returns(contacts[1]);

        contactsCtrl = $controller('ContactController', {ContactService: ContactServiceMock});

    }));

    describe('initialization', function () {
        it('should set newContact', function () {
            expect(contactsCtrl.newContact).to.eql(contacts[0]);
        });
        it('should call ContactService.list', function () {
            expect(ContactServiceMock.list).to.have.been.called;
        });
        it('should call ContactService.list only once', function () {
            expect(ContactServiceMock.list).callOnce;
        });
    });

    describe('saveContact', function () {
        beforeEach(function () {
            contactsCtrl.saveContact();
        });

        it('should call ContactService.save', function () {
            expect(ContactServiceMock.save).to.have.been.called;
        });
        it('should call ContactService.save with new contact data', function () {
            expect(ContactServiceMock.save).calledWith({
                name: 'John',
                email: 'john@john.pl',
                phone: '123456789'
            });
        });
        it('should clear newContact object', function () {
            expect(contactsCtrl.newContact).to.eql({});
        });
    });

    describe('deleteContact', function () {
        beforeEach(function () {
            contactsCtrl.deleteContact(1);
        });
        it('should call ContactService.delete', function () {
            expect(ContactServiceMock.delete).called;
        });

        it('should call ContactService.delete with contact id', function () {
            expect(ContactServiceMock.delete).calledWith(1);
        });

    });
    describe('editContact', function () {
        beforeEach(function () {
            contactsCtrl.editContact(2);
        });
        it('should call ContactService.get', function () {
            expect(ContactServiceMock.get).called;
        });
        it('should call ContactService.get with contact id', function () {
            expect(ContactServiceMock.get).calledWith(2);
        });
        it('should set newContact to edited contact data', function () {
            expect(contactsCtrl.newContact).to.eql(contacts[1]);
        });
    });
});

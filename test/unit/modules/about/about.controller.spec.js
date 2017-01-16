describe('AboutCtrl', function ()
{
    'use strict';
    var MessagesFactoryMock;
    var aboutCtrl;
    var message;

    beforeEach(module('app'));
    beforeEach(inject(function ($controller, _Messages_)
    {
        MessagesFactoryMock = _Messages_;
        message = 'Hello World';
        spyOn(MessagesFactoryMock, 'setMessage').and.callThrough();
        spyOn(MessagesFactoryMock, 'getMessage').and.callThrough();
        aboutCtrl = $controller('AboutCtrl', {Messages: MessagesFactoryMock});
    }));


    describe('initialization', function ()
    {
        it('should set title', function ()
        {
            expect(aboutCtrl.title).toBe('About Page')
        });
        it('should set body', function ()
        {
            expect(aboutCtrl.body).toBe('This is the about page body');
        });
    });

    describe('updateMessage', function ()
    {
        beforeEach(function ()
        {
            aboutCtrl.updateMessage(message);
        });

        it('should call Messages.setMessage', function ()
        {
            expect(MessagesFactoryMock.setMessage).toHaveBeenCalled();
        });
        it('should call Messaege.setMessage with argument', function ()
        {
            expect(MessagesFactoryMock.setMessage).toHaveBeenCalledWith(message);
        });
        it('should call Message.getMessage', function ()
        {
            expect(MessagesFactoryMock.getMessage).toHaveBeenCalled();
        });
        it('should update newMessage', function ()
        {
            expect(MessagesFactoryMock.setMessage).toHaveBeenCalledWith(message);
            expect(aboutCtrl.newMessage).toBe(message);
        });


    });
});

describe('MessagesFactory', function ()
{
    'use strict';
    var message;
    var messageFactory;
    beforeEach(module('app'));
    beforeEach(inject(function (_Messages_)
    {
        message = 'Hello Message';
        messageFactory = _Messages_;
    }));

    describe('init', function ()
    {
        it('should get default message', function ()
        {
            expect(messageFactory.getMessage()).toBe(message);
        });
    });
    describe('when update', function ()
    {
        beforeEach(function ()
        {
            message = 'Other message';
            messageFactory.setMessage(message);
        });
        it('should return message', function ()
        {
            expect(messageFactory.getMessage()).toBe(message);
        });
    });
});

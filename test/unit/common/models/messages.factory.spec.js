describe('Messages', function ()
{
    'use strict';
    var message;
    var messages;
    beforeEach(module('app'));
    beforeEach(inject(function (_Messages_)
    {
        message = 'Helllol!';
        messages = _Messages_;
    }));

    describe('getMessage', function ()
    {
        it('should return \'Hello Message\'', function ()
        {
            expect(messages.getMessage()).to.eql('Hello Message')
        });

    });

    describe('setMessage', function ()
    {
        beforeEach(function ()
        {
            messages.setMessage(message)
        });
        it('should return \'Helllol!\'', function ()
        {
            expect(messages.getMessage()).to.eql(message);
        });
    });

});

describe('AboutCtrl', function ()
{
    'use strict';
    var message;
    var aboutCtrl;
    var MessagesMock;
    beforeEach(module('app'));
    beforeEach(inject(function ($controller, _Messages_)
    {
        message = 'Witaj w pliku about.html';
        MessagesMock = _Messages_;
        aboutCtrl = $controller('AboutCtrl', {Messages: MessagesMock});
        sinon.stub(MessagesMock, 'setMessage', MessagesMock.setMessage);
        sinon.stub(MessagesMock, 'getMessage', MessagesMock.getMessage);
    }));
    describe('initialization', function ()
    {
        it("should return 'About Page'", function ()
        {
            expect(aboutCtrl.title).to.eql('About Page');
        });
        it("should return 'This is the about page body'", function ()
        {
            expect(aboutCtrl.body).to.eql('This is the about page body');
        });
        it('should set about newMessage', function ()
        {
            expect(aboutCtrl.newMessage).to.eql('');
        });
    });


    describe('updateMessage', function ()
    {
        beforeEach(function ()
        {
            aboutCtrl.updateMessage(message);
        });
        it('should call Messages.updateMessage', function ()
        {
            expect(MessagesMock.setMessage).to.have.been.called;
        });
        it('should call Messages.setMessage with Hello Message', function ()
        {
            expect(MessagesMock.setMessage).to.have.been.calledWith(message);
        });
        it('should set NewMessage', function ()
        {
            expect(aboutCtrl.newMessage).to.eql(message);
        });
    });

});

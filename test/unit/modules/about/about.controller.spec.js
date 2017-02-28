describe('AboutController', function(){

    'use strict';

    var AboutCtrl;
    var MessageMock;
    var message;

    beforeEach(module('app'));
    beforeEach(inject(function($controller, _Messages_){
        MessageMock = _Messages_;
        sinon.spy(MessageMock, 'setMessage');
        sinon.spy(MessageMock, 'getMessage');
        AboutCtrl = $controller('AboutCtrl', { Messages: MessageMock});
    }));

    describe('init',function(){
        it('should set title', function(){
            expect(AboutCtrl.title).to.eql('About Page');
        });
        it('should set body', function(){
           expect(AboutCtrl.body).to.eql('This is the about page body');
        });

        it('shoul set newMessage', function(){
           expect(AboutCtrl.newMessage).to.eql('');
        });
    });

    describe('updateMessage',function(){
        beforeEach(function(){
            message = 'Hello World';
            AboutCtrl.updateMessage(message);
        });

        it('should call setMessage', function(){
           expect(MessageMock.setMessage).called;
        });
        it('should call setMessage with message', function(){
           expect(MessageMock.setMessage).calledWith(message);
        });
        it('should call getMessage', function(){
           expect(MessageMock.getMessage).called;
        });
        it('should set newMessage', function(){
           expect(AboutCtrl.newMessage).to.eql(message);
        });
    });
});
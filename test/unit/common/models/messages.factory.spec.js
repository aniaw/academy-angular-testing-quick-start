describe('Messages', function () {
    'use strict';

    var MessageMock;
    var message;

    beforeEach(module('app'));
    beforeEach(inject(function (_Messages_){
        MessageMock = _Messages_;
        message = 'Hello Message';

    }));

    describe('init',function () {
        it('should get default message', function () {
            expect(MessageMock.getMessage()).to.eql(message);
        });
    });

    describe('set Message', function(){
        beforeEach(function(){
            message = 'New Message';
            MessageMock.setMessage(message);
        });
        it('should set new Message', function () {
            expect(MessageMock.getMessage()).to.eql(message);
        });
    });

    describe('get Message', function () {

        it('should return message', function () {
            expect(MessageMock.getMessage()).to.eql(message);
        });
    });
});
describe('AuthorCtrl', function ()
{
    'use strict';

    var authorCtrl;
    var AuthorDAOMock;
    var authors = [];

    beforeEach(module('app'));

    beforeEach(inject(function ($controller,_AuthorDAO_)
    {
        authors = [
            {id: 1, name: 'Ana', book: 'ABCD'},
            {id: 2, name: 'Marty', book: 'GitHub Forever Young'}
        ];

        AuthorDAOMock = _AuthorDAO_;
        spyOn(AuthorDAOMock, 'get').and.callFake(function (id)
        {
            if (1 === id) {
                return successfulPromise(authors[1]);
            }
            return unsuccessfulPromise();
        });
        //
        // AuthorDAOMock = jasmine.createSpyObj('AuthorDAO', ['get']);
        // AuthorDAOMock.get.and.callFake(function (id)
        // {
        //     if (1 === id) {
        //         return successfulPromise(authors[1]);
        //     }
        //     return unsuccessfulPromise();
        // });

        authorCtrl = $controller('AuthorCtrl', {AuthorDAO: AuthorDAOMock});
    }));

    describe('getAuthor', function ()
    {
        describe('when successful', function ()
        {
            beforeEach(function ()
            {
                authorCtrl.getAuthor(1);
            });
            it('should call \'AuthorDAO.get\'', function ()
            {
                expect(AuthorDAOMock.get).toHaveBeenCalled();
            });
            it('should set author to \'Marty\'', function ()
            {
                expect(authorCtrl.author.name).toEqual(authors[1].name);
            });
        });

        describe('when unsuccessful', function ()
        {
            beforeEach(function ()
            {
                authorCtrl.getAuthor(2);
            });
            it('should call \'AuthorDAO.get\'', function ()
            {
                expect(AuthorDAOMock.get).toHaveBeenCalled();
            });
            it('should set message to \'Something went wrong! Author is not available\'', function ()
            {
                expect(authorCtrl.message).toEqual('Something went wrong! Author is not available');
            });
        });
    });
});

(function ()
{
    'use strict';

    angular.module('app').controller('AuthorCtrl', function (AuthorDAO)
    {

        var ctrl = this;

        ctrl.getAuthor = function (id)
        {
            AuthorDAO.get(id).then(function (data)
            {
                ctrl.author = data;
            }).catch(function ()
            {
                ctrl.message = 'Something went wrong! Author is not available';
            });
        };
        ctrl.getAuthors = function ()
        {
            AuthorDAO.query().then(function (data)
            {
                ctrl.authors = data;
            }).catch(function ()
            {
                ctrl.message = 'Authors list is not available';
            });
        };
        ctrl.saveAuthor = function (author)
        {
            AuthorDAO.save(author).then(function ()
            {
                ctrl.message = 'Ok. Saved';
            }).catch(function ()
            {
                ctrl.message = 'Oh now :( Something not working again';
            });
        };
        ctrl.removeAuthor = function (id)
        {
            AuthorDAO.delete(id).then(function ()
            {
                ctrl.message = 'The author was removed';
            });
        };

    });

})();

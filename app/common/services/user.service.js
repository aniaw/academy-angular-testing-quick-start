(function ()
{
    'use strict';

    angular.module('app').service('UserService', function ($http)
    {
        var service = this;

        service.getUsers= function ()
        {
            return $http.get('data/users.json');
        };
    });
})();

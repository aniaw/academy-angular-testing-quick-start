(function ()
{
    'use strict';

    angular.module('app').controller('GravatarsCtrl', function (UserService)
    {
        var ctrl = this;
        UserService.getUsers().then(function (result)
        {
            ctrl.users = result.data;
        });
    });

})();

(function ()
{
    'use strict';

    angular.module('app').controller('AccessoriesCtrl', function (UserService)
    {
        var ctrl = this;
        ctrl.message = 'Nothing to say';
        UserService.getUsers().then(function (result)
        {
            ctrl.users = result.data;
        });

        ctrl.showInside = function (size, name, color)
        {
            ctrl.message = 'My name is : ' + name + '. I am ' + size + ' and ' + color;
        };
    });

})();

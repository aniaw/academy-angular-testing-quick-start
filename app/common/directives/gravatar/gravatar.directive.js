(function ()
{
    'use strict';

    angular.module('app').controller('gravController', function ()
    {
        var ctrl = this;

        if (ctrl.size === 'lg') {
            ctrl.sizePx = '40';
        } else {
            ctrl.sizePx = '20';
        }
    });

    angular.module('app').directive('gravatar', function ()
    {
        return {
            restrict: 'E',
            templateUrl: 'common/directives/gravatar/gravatar.tpl.html',
            controller: 'gravController',
            controllerAs: 'gravCtrl',
            bindToController: {
                user: '=',
                size: '@'
            }
        };
    });
})();

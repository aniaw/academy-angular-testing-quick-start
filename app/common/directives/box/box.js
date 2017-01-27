(function ()
{
    'use strict';
    var app = angular.module('app');

    app.directive('box', function ()
    {
        return {
            restrict: 'E',
            bindToController: {
                color: '=',
                size: '@',
                open: '&'
            },

            templateUrl: 'common/directives/box/box.tpl.html',
            controller: function ()
            {
                var ctrl = this;
                ctrl.name = 'Box';
                ctrl.colors = ['red', 'green', 'blue'];
                ctrl.color = ctrl.colors[0];
            },
            controllerAs: 'boxCtrl'
        };
    });
})();

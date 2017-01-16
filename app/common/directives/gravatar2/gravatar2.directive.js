(function ()
{
    'use strict';

    //***2***
    // function GravatarController()
    // {
    //         var ctrl = this;
    //
    //         if (ctrl.size === 'lg') {
    //             ctrl.sizePx = '40';
    //         } else {
    //             ctrl.sizePx = '20';
    //         }
    // }

    angular.module('app').directive('gravatar2', function ()
    {
        return {
            restrict: 'E',
            replace: true,
            template: '<img class="gravatar" ng-src="http://www.gravatar.com/avatar/{{ grav2Ctrl.user.gravatar }}?s={{ grav2Ctrl.sizePx }}&d=identicon"/>\n',
            controller: function ()
            {
                var ctrl = this;

                if (ctrl.size === 'lg') {
                    ctrl.sizePx = '40';
                } else {
                    ctrl.sizePx = '20';
                }
            },
            //***2***
            // controller: GravatarController,
            controllerAs: 'grav2Ctrl',
            bindToController: {
                user: '=',
                size: '@'
            }
        };
    });
})();

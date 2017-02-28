(function ()
{
    'use strict';
    angular.module('app', ['ngRoute'])
            .config(function ($routeProvider, $locationProvider)
            {
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });

                $routeProvider.when('/about', {
                    templateUrl: 'modules/about/about.tpl.html',
                    controller: 'AboutCtrl as about',
                    controllerAs: 'about'
                });

                $routeProvider.when('/contacts', {
                    templateUrl: 'modules/contacts/contacts.tpl.html',
                    controller: 'ContactController',
                    controllerAs: 'contactCtrl'
                });

                $routeProvider.otherwise({redirectTo: '/contacts'});
            });
})();

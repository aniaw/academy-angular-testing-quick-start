(function ()
{
    'use strict';
    angular.module('app', ['ngResource', 'ngRoute'])
            .config(function ($routeProvider, $locationProvider, $compileProvider)
            {
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });

                $compileProvider.preAssignBindingsEnabled(true);

                $routeProvider.when('/about', {
                    templateUrl: 'modules/about/about.tpl.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'about'
                });
                $routeProvider.when('/contacts', {
                    templateUrl: 'modules/contacts/contacts.tpl.html',
                    controller: 'ContactCtrl',
                    controllerAs: 'contactCtrl'
                });
                $routeProvider.when('/gravatars', {
                    templateUrl: 'modules/gravatars/gravatars.tpl.html',
                    controller: 'GravatarsCtrl',
                    controllerAs: 'gravatarsCtrl'
                });
                $routeProvider.when('/author', {
                    templateUrl: 'modules/author/author.tpl.html',
                    controller: 'AuthorCtrl',
                    controllerAs: 'authorCtrl'
                });

                $routeProvider.otherwise({redirectTo: '/contacts'});

            });
})();

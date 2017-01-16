(function ()
{
    'use strict';

    function AuthorDAO($resource)
    {
        var api = $resource('/api/author/:a', null, {
            query: {
                isArray: false
            }
        });

        return {
            query: function () {
                return api.query().$promise;
            },
            get: function (id) {
                return api.get({a: id}).$promise;
            },
            save: function (object) {
                return api.save(object).$promise;
            },
            delete: function (id) {
                return api.delete({a: id}).$promise;
            }
        };
    }

    angular.module('app').factory('AuthorDAO', ['$resource', AuthorDAO]);
})();

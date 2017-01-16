(function ()
{
    'use strict';

    var module = angular.module('app').config(function ($provide)
    {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
    });
    module.run(function ($httpBackend)
    {
        var sequence = 1;
        var authors = {};
        [
            {id: sequence++, name: 'John Smith', book: 'ABC'},
            {id: sequence++, name: 'Jack Johnson', book: 'GitHub Forever'}
        ].every(function (value)
        {
            authors[value.id] = value;
            return true;
        });

        $httpBackend.whenGET(/\/api\/author\/(\d+)/).respond(function (method, url)
        {
            var match = /\/api\/author\/(\d+)/.exec(url);
            if (match) {
                var id = parseInt(match[1], 10);
                return [200, authors[id]];
            }
            return [404];
        });
        $httpBackend.whenGET('/api/author').respond(function ()
        {
            return [200, authors];
        });

        $httpBackend.whenPOST(/\/api\/author/).respond(function (method, url, aurhorData)
        {
            aurhorData = JSON.parse(aurhorData);

            if (authors[aurhorData.id]) {
                authors[aurhorData.id].name = aurhorData.name;
                authors[aurhorData.id].book = aurhorData.book;
            } else {
                aurhorData.id = sequence++;
                authors[aurhorData.id] = aurhorData;
            }

            return [200, aurhorData];
        });

        $httpBackend.whenDELETE(/\/api\/author\/(\d+)/).respond(function (method, url)
        {
            var match = /\/api\/author\/(\d+)/.exec(url);
            if (match) {
                var id = parseInt(match[1], 10);
                delete authors[id];
                return [200];
            }
            return [404];
        });
        $httpBackend.whenGET(/.*\.html/).passThrough();
        $httpBackend.whenGET(/.*\.json/).passThrough();
    });
})();

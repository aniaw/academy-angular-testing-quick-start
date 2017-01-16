describe('app.js', function ()
{
    'use strict';

    var route;
    var locationProvider;
    var compileProvider;

    beforeEach(function ()
    {
        module(function (_$locationProvider_, _$compileProvider_)
        {
            locationProvider = _$locationProvider_;
            compileProvider = _$compileProvider_;
            spyOn(locationProvider, 'html5Mode');
            spyOn(compileProvider, 'preAssignBindingsEnabled');
        });

        module('app');
        inject(function ($route)
        {
            route = $route;
        });
    });

    describe('/about', function ()
    {
        it('should has \'AboutCtrl\' controller ', function ()
        {
            expect(route.routes['/about'].controller).toBe('AboutCtrl');
        });
        it('should has \'about.tpl.html\' template ', function ()
        {
            expect(route.routes['/about'].templateUrl).toBe('modules/about/about.tpl.html');
        });
        it('should has \'about\' as controller shortcut', function ()
        {
            expect(route.routes['/about'].controllerAs).toBe('about');
        });
    });

    describe('otherwise', function ()
    {
        it('should redirect to', function ()
        {
            expect(route.routes[null].redirectTo).toEqual('/contacts');
        });
    });

    describe('locationProvider', function ()
    {
        it('should call html5Mode with \'enabled: true, requireBase: false\'', function ()
        {
            expect(locationProvider.html5Mode).toHaveBeenCalledWith({enabled: true, requireBase: false});

        });
    });
    describe('compileProvider', function ()
    {
        it('should call preAssignBindingsEnabled with \'true\'', function ()
        {
            expect(compileProvider.preAssignBindingsEnabled).toHaveBeenCalledWith(true);
        });
    });
});

describe('gravatar.directive.js', function ()
{
    'use strict';

    var controller;

    beforeEach(module('app'));

    describe('controller', function ()
    {
        describe('when size is set to value different than \'lg\'', function ()
        {
            beforeEach(inject(function ($controller)
            {
                controller = $controller('gravController');

            }));
            it('should set \'sizePx\' to 20px', function ()
            {
                expect(controller.sizePx).toBe('20');
            });
        });

        describe('when size is set to\'lg\'', function ()
        {
            beforeEach(inject(function ($controller)
            {
                controller = $controller('gravController', {}, {
                    size: 'lg'
                });

            }));
            it('should set \'sizePx\' to 40px', function ()
            {
                expect(controller.sizePx).toBe('40');
            });
        });
    });
});



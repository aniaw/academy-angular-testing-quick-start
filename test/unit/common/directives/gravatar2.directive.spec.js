describe('gravatar2.directive.js', function ()
{
    'use strict';

    var grav2Directive;
    var controller;

    beforeEach(module('app'));

    beforeEach(inject(function (gravatar2Directive)
    {
        grav2Directive = gravatar2Directive[0];
    }));

    describe('controller', function ()
    {
        describe('when size is set to value different than \'lg\'', function ()
        {
            beforeEach(inject(function ($controller)
            {
                controller = $controller(grav2Directive.controller);

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
                controller = $controller(grav2Directive.controller, {}, {
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

var app = angular.module("MyApp", []);

app.filter("capitalize",function(){
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
describe('MyApp', function() {
    beforeEach(module('MyApp'));

    describe('capitalize', function() {
        it('capp',
            inject(function(capitalizeFilter) {
                expect(capitalizeFilter('jack')).toBe('Jack');
            }));
    });
});
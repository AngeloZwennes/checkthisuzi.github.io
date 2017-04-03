describe('Capitalize filter', function() {
    beforeEach(module('angular-store'));

    describe('capitalize', function() {
        it('should capitalize a sentence',
            inject(function(capitalizeFilter) {
                expect(capitalizeFilter('test')).toBe('Test');
            }));
        it('should remove the second capitalized letter',
            inject(function(capitalizeFilter) {
                expect(capitalizeFilter('TEst')).toBe('Test');
            }));
    });
});
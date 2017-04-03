describe('slice description', function() {
    beforeEach(module('angular-store'));

    describe('slicedescription', function() {
        it('should slice a description when it is too long for the homepage',
            inject(function(slicedescriptionFilter) {
                expect(slicedescriptionFilter('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec felis nec ligula fermentum ultrices nullam.')
                ).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec felis nec ligula fermentum ult...');
            })
        );
        it('should not slice the description when it fits the homepage',
            inject(function(slicedescriptionFilter){
                expect(slicedescriptionFilter('Lorem ipsum dolor sit amet'))
                    .toBe('Lorem ipsum dolor sit amet');
            })
        );
        it('should add a description when it doesnt exist',
            inject(function(slicedescriptionFilter){
                expect(slicedescriptionFilter(''))
                    .toBe('No description');
            }))
    });
});

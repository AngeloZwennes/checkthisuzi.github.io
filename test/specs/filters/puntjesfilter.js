describe("Filter: puntjesfilter", function () {

    var filter;

    beforeEach(function(){
       module("testApp.filters");

        inject(function($filter){
           filter = $filter('puntjesFilter');
        });
    });


    it("should add dots while stringlength is shorter than 20", function () {
        var input = "Hellow World"; //13 chars
        var output = "Hellow World!.......";

        expect(filter(input)).toBe(output);
    });
    it("should return the string when stringlength is bigger than 30", function () {
        var input = "Goedemiddag World!!!!!!!"; //teveel chars
        var output = "Goedemiddag World!!!!!!!";

        expect(filter(input)).toBe(output);
    });
    it("should return 20 dots when the string is undefined", function () {
        var input = undefined; //teveel chars
        var output = "....................";

        expect(filter(input)).toBe(output);
    });
});
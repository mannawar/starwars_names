const expect = require('chai').expect;
const starwars = require('./index');

describe('starwars__names_by_mannawar', function() {
    describe('all', function() {
        it('should be an array of strings', function() {
            expect(starwars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                })
            }
        })
        it(`should contain 'Zarien Mannawar'`, function() {
            expect(starwars.all).to.include('Zarien Mannawar')
        })
    })
    describe('random', function() {
        it('should return a random item from starwars.all', function() {
            const randomItem = starwars.random()
            expect(starwars.all).to.include(randomItem)
        })
    })
})
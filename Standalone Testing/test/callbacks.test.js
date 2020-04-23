const chai = require('chai');
const expect = chai.expect;

const someMadeUpAsyncFunc = require('../lib/controllers/callbacks');

// Added the `only` tag to have only this set tests to run
describe.only("AsyncTest", function () {
    it("should return `You get a sweet :)` if `true` is passed in", function () {
        someMadeUpAsyncFunc(true, function (sweetCheck) {
            expect(sweetCheck).to.equal("You get a sweet :)");
        });
    });

    it("Should return `You get nothing!!` if `false` is passed in", function () {
        someMadeUpAsyncFunc(false, function (sweetCheck) {

            // Let's fail it on purpose just to see what happens
            // Failed -->   expect(sweetCheck).to.equal("You get a sweet :)");
            expect(sweetCheck).to.equal("You get nothing!!");
        });
    });
});
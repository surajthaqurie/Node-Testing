const chai = require('chai');
const expect = chai.expect;
chai.use(require("chai-as-promised"));

const someMadeUpAyncFunc = require('../lib/controllers/promise');

// Added the `only` tag to have only this set of tests to run
describe.only('AsyncTest With Promise', function () {
    it("Should return `You get a sweet :)` it `true` is passed in", function () {
        return expect(someMadeUpAyncFunc(true)).to.eventually.equal("You get a sweet :)");
    });

    it("Sholud return `You get nothing!!` if `false passed in", function () {
        return expect(someMadeUpAyncFunc(false)).to.eventually.equal("You get nothing!!");
    });
});


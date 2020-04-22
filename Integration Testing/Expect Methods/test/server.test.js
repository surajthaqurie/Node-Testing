const expect = require('chai').expect;
const request = require('request');



// Here is the description of the functionality we want to implement.
describe("Color Code Converter API", function () {

    describe("RGB to Hex conversion", function () {
        it("returns status 200", function () { });
        it("returns the color in hex", function () { });
    });

    describe("Hex to RGB conversion", function () {
        it("returns status 200", function () { });
        it("returns the color in RGB", function () { });
    });

});


// We will run our web server on the localhost port 3000.
describe("Color Code Converter API", function () {

    describe("RGB to Hex conversion", function () {

        const url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

        it("returns status 200", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("returns the color in hex", function (done) {
            request(url, function (error, response, body) {
                expect(body).to.equal("ffffff");
                done();
            });
        });

    });

    describe("Hex to RGB conversion", function () {
        const url = "http://localhost:3000/hexToRgb?hex=00ff00";

        it("returns status 200", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("returns the color in RGB", function (done) {
            request(url, function (error, response, body) {
                expect(body).to.equal("[0,255,0]");
                done();
            });
        });
    });

});

/** For Exporting Server :)
 * chai.request(app)
 *   .put('/user/me')
 *   .send({ password: '123', confirmPassword: '123' })
 *   .end(function (err, res) {
 *      expect(err).to.be.null;
 *      expect(res).to.have.status(200);
 *   });
 */
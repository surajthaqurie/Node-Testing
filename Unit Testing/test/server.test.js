const assert = require('chai').assert;

// const sayHello = require('../server').sayHello;
// const addNumber = require('../server').addNumber;

const server = require('../server');

//Result
sayHelloResult = server.sayHello();
addNumberResult = server.addNumber(5, 5);


// describe('Server', function () {
//     it('Server should return hello', function () {
//         assert.equal(server(), 'hello');
//     });
// });


describe('Server', function () {
    describe('sayHello()', function () {
        it('Server should return hello', function () {
            // let result = server.sayHello();
            assert.equal(sayHelloResult, 'hello');
        });
        it('sayHello should return type string', function () {
            // let result = server.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });
    describe('addNumber()', function () {
        it('addNumber should be above 5', function () {
            // let result = server.addNumber(5, 5);
            assert.isAbove(addNumberResult, 5);
        });
        it('addNumber should return type number', function () {
            // let result = server.addNumber(5, 5);
            assert.typeOf(addNumberResult, 'Number');
        });
    });
});


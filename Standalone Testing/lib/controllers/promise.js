// This is just an async func that takes in a bool
// and that returns a promise

module.exports = function someMadeUpAsyncFunc(boolValue, cb) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(boolValue ? "You get a sweet :)" : "You get nothing!!")
        }, 0);
    });
}
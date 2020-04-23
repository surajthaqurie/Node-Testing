
// This is just an async function that takes in a bool
// And calls a callback that returns a some message
// Depending on the bool value

function someMadeUpAsyncFunc(boolValue, cb) {
    setTimeout(function () {
        cb(boolValue ? "You get a sweet :)" : "You get nothing!!");

    }, 0);
}

module.exports = someMadeUpAsyncFunc;
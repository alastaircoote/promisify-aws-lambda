module.exports = function(func, event) {
    return new Promise(function(fulfill, reject) {
        var context = {
            fail: function(err) {
                reject(err);
            },
            succeed: function(response) {
                fulfill(response);
            },
            done: function(err, response) {
                if (err) return reject(err);
                fulfill(response);
            }
        };
        func(event, context);
    })
}
# promisify-aws-lambda

A tiny utility library to wrap up AWS Lambda functions in Promises.

## Why?

Primarily for testing. Mocha accepts promises as part of a test, so this helps us streamline
testing AWS lambda functions, like so:


    var handler = function(event, context) {
        if (event.workCorrectly) {
            context.done(null, {worked: true});
        } else {
            context.done({worked: false});
        }
    }

    it("passes", function() {
        return PromisifyLambda(lambda, {
            workCorrectly: true
        })
        .then(function(response) {
            assert.equal(response.worked, true);
        })
    });

    it("fails", function() {
        return PromisifyLambda(lambda, {
            workCorrectly: false
        })
        .catch(function(response) {
            assert.equal(response.worked, false);
        })
    });
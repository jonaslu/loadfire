 // Requires
var _ = require('underscore');


// Random Pattern
function random(backends, req, cb) {
    var randomArrayIndex = _.random(1, backends.length) - 1;
    return cb(null, backends[randomArrayIndex]);
}


// Exports
module.exports = random;

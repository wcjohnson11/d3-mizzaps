
/**
 * Module dependencies.
 */

var mongo = process.env.MONGOLAB_URI || 'mongodb://localhost/3000';
var monk = require('monk');

/**
 * Expose `db`.
 */

module.exports = monk(mongo);

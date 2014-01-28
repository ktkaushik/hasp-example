
var hasp = require('hasp');

function bf (cb) {
	console.log('this is a callback from the before filter ***** ***** ***** ***** ');
	cb();
}

function af (cb) {
	console.log('this is a callback from the after filter ***** ***** ***** ***** ');
	cb();
}

module.exports = {

  index: hasp([bf], [af], function (params, callback) {
  	callback(null, {});
  })

};
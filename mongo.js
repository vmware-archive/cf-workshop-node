var mongoose = require('mongoose');

// The attendee object schema
var attendeeSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	address: String,
	city: String,
	state: String,
	zipcode: String,
	email: String,
	sessions: [{
		name: String,
		date: String,
		completed: Boolean
	}]
	
});

mongoose.model('Attendee', attendeeSchema);

var vcap_services = JSON.parse(process.env.VCAP_SERVICES || '{}');
var uri = vcap_services != undefined && vcap_services.mongolab != undefined ? vcap_services.mongolab[0].credentials.uri : 'localhost:27017/cf-workshop-node';

mongoose.connect(uri, function(err, res) {
	if (err) {
		console.log('Error connecting to URI: ' + uri + ". " + err);
	} else {
		console.log('Connected successfully to URI: ' + uri);
	}
});
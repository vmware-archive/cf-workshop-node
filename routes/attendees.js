var express = require('express');
var router = express.Router();

router.get('/list', function(req, res) {
	var db = req.db;
	var attendeeCollection = db.get('attendees');
	attendeeCollection.find({}, {}, function(e, attendees) {
		res.render('attendees', {"attendees": attendees});
	});
});

router.get('/:attendee_id/sessions', function(req, res) {
	var db = req.db;
	var attendeeCollection = db.get('attendees');
	attendeeCollection.findOne({_id: req.params.attendee_id}, {}, function(e, attendee) {
		res.render('sessions', {"attendee": attendee});
	});
})

module.exports = router;

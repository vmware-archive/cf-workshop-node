var express = require('express');
var router = express.Router();

router.get('/list', function(req, res) {
	var db = req.db;
	var attendeeCollection = db.get('attendees');
	attendeeCollection.find({}, {}, function(e, docs) {
		res.render('attendees', {"attendees": docs});
	});
});

router.get('/:attendee_id/sessions', function(req, res) {
	var db = req.db;
	var attendeeCollection = db.get('attendees');
	attendeeCollection.findOne({_id: req.params.attendee_id}, {}, function(e, docs) {
		res.render('sessions', {"sessions": docs});
	});
})

module.exports = router;

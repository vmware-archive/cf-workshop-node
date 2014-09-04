var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var now = new Date();
	var port = process.env.PORT;
	var vcapApplication = JSON.parse(process.env.VCAP_APPLICATION || '{}');
	var vcapServices = process.env.VCAP_SERVICES;
	res.render('index', { title: 'EXAMPLE application for PCF', now: now.toLocaleString(), port: port, vcapApplication: vcapApplication, vcapServices: vcapServices });
});

module.exports = router;

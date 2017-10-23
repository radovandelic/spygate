var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var controller = require("./controller");
var view = require("./views/send");

router.use(function (req, res, next) {
	view.res = res;
	controller.view = view;
	next();
});

router.post('/create', (req, res) => {
	controller.create(req.body);
});

router.post('/update', (req, res) => {
	controller.update(req.body.id, req.body.value, req.body.key);
});

module.exports = router;
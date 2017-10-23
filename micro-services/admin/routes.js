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


router.get('/delete/:id', (req, res) => {
	var id = Number(req.params.id);
	controller.delete(id);
});

module.exports = router;
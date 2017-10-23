var model = require("../models");
/*var model = {};
var read = require("../model").read;
var getAll = require("../model").getAll;*/

var controller = {
    model: model,
    view: {},
    get_one: function (id) {
        var item = this.model.read(id);
        this.view.render_one(item);
    },
    get_all: function () {
        var items = this.model.getAll();
        this.view.render_all(items);
    }
}

module.exports = controller;
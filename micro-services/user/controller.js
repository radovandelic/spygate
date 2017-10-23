var model = require("../models")
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
    },
    create: function (object) {
        this.model.create(object);
        this.view.render_created(object);
    },
    update: function (id, value, key) {
        this.model.update(id, value, key);
        this.view.render_updated(value, key);
    }

}

module.exports = controller;
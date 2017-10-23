var model = require("../models")
/*var model = {};
var read = require("../model").read;
var getAll = require("../model").getAll;*/

var controller = {
    model: model,
    view: {},
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
var model = require("../models")
/*var model = {};
var read = require("../model").read;
var getAll = require("../model").getAll;*/

var controller = {
    model: model,
    view: {},
    delete: function (id) {
        this.model.remove(id);
        this.view.render_deleted(id);
    }
}

module.exports = controller;
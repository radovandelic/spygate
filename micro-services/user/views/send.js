var view = {
    res: {},
    render_one: function (item) {
        this.res.send(item);
    },
    render_all: function (items) {
        this.res.send(items);
    },
    render_created: function (object) {
        var message = ("Object succesfully created.\n");
        message += JSON.stringify(object);
        this.res.send(message);
    },
    render_updated: function (value, key) {
        var message = (`${key} succesfully updated to ${value}.`);
        this.res.send(message);
    }
}
module.exports = view;
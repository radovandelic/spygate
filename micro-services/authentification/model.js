var model = {
    users: {
        0: {
            username: "admin",
            email: "admin@gmail.com",
            password: "password",
            id: 0
        },
        1: {
            username: "user1",
            email: "user@gmail.com",
            password: "password1",
            id: 1
        },
        2: {
            username: "user2",
            email: "user@gmail.com",
            password: "password2",
            id: 2
        }
    },
    nextID: 0,
    create: function (newObject, callback) {
        var err = this.validate(newObject);
        newObject.id = this.nextID;
        this.db[this.nextID] = newObject;
        this.nextID++;
        callback(err, newObject);
    },
    login: function (email, password, callback) {
        var err = "";
        for (id in this.users) {
            if (this.users[id]["email"] == email) {
                if (this.users[id]["password"] = password) {
                    callback(err, this.users[id]["username"]);
                }
            }
        }
        err = "Password/email combo does not exist";
        callback(err);
    },
    update: function (id, newValue, key) {
        this.users[id][key] = newValue;
    },
    validate: function (user) {
        
    }
}

module.exports = model;
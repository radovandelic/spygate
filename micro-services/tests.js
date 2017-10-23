var express = require('express');
var app = express();

var guest = require("./guest");
var user = require("./user");
var admin = require("./admin");
//var auth = require("./authentification");

//app.use(auth);
var username = "user"
app.use("/admin", admin, user, guest);
app.use("/" + username, user, guest);
app.use("/", guest);


app.use(function(req, res) {
	res.send('404');
})

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port 3000");
    }
});
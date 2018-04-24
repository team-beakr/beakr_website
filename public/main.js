require("file-loader?name=index.html!./index.html");
require("file-loader?name=about.html!./about.html");
require("file-loader?name=contact.html!./contact.html");
require("file-loader?name=support.html!./support.html");
require("file-loader?name=login.html!./login.html");
require("file-loader?name=signup.html!./signup.html");
require("file-loader?name=dashboardstudent.html!./dashboardstudent.html");
require("file-loader?name=search.html!./search.html");
require("file-loader?name=request.html!./request.html");
require("file-loader?name=message.html!./message.html");
require("file-loader?name=dashboardteacher.html!./dashboardteacher.html");
require("file-loader?name=teachercreate.html!./teachercreate.html");
import 'stylesheets/style.css';

var hello = document.getElementById("hello");
hello.innerHTML = "Hello World!";

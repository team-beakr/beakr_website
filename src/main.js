require("file-loader?name=views/index.html!./views/index.html");
require("file-loader?name=views/about.html!./views/about.html");
require("file-loader?name=views/contact.html!./views/contact.html");
require("file-loader?name=views/support.html!./views/support.html");
require("file-loader?name=views/login.html!./views/login.html");
require("file-loader?name=views/signup.html!./views/signup.html");
require("file-loader?name=views/dashboardstudent.html!./views/dashboardstudent.html");
require("file-loader?name=views/search.html!./views/search.html");
require("file-loader?name=views/request.html!./views/request.html");
require("file-loader?name=views/message.html!./views/message.html");
import './stylesheets/style.css';

var hello = document.getElementById("hello");
hello.innerHTML = "Hello World!";

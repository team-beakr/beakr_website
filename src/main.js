require("file-loader?name=views/index.html!./views/index.html");
require("file-loader?name=views/about.html!./views/about.html");
import './stylesheets/style.css';

var hello = document.getElementById("hello");
hello.innerHTML = "Hello World!";

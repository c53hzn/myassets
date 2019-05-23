var fs = require("fs");
var yaml = require("yaml");

var file = fs.readFileSync(__dirname+"\\data.json","utf-8");
var json = yaml.parse(file);
var str = JSON.stringify(json);



fs.writeFileSync(__dirname+"\\data3.json", str, 'utf8');
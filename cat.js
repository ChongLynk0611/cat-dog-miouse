var mouse = require('./mouse');
function cat(name){
    this.name = name
    this.daday = [];
}
cat.prototype.eat = function(mouse){
    this.daday.push(mouse);
    mouse.died();
}
var tom = new cat('tom');
var jerry = new mouse('jerry');
tom.eat(jerry);
console.log(tom);
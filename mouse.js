function mouse(name){
    this.name = name;
    this.die  = false;
}
mouse.prototype.die = function(){
    this.die = true;
}
module.exports = 'mouse';
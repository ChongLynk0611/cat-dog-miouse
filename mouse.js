function mouse(name){
    this.name = name;
    this.die  = false;
}
mouse.prototype.died = function(){
    this.die = true;
}
module.exports =mouse;
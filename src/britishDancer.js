var makeBritishDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="britishdancer"></span>');

  this.step(timeBetweenSteps);
  this.setPosition(this.top, this.left);
  // console.log(top, "top from rose dancer")
  // console.log(left, "left from rose dancer")
  // console.log(this.left, "left")


};
  
makeBritishDancer.prototype = Object.create(makeDancer.prototype);

makeBritishDancer.prototype.constructor = makeBritishDancer;

//Setup a unique method to check which constructor certain dancers are coming from
makeBritishDancer.prototype.british = function(){};

makeBritishDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  // this.$node.toggle();
};

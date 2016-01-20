var makeGermanDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="germandancer"></span>');

  this.step(timeBetweenSteps);
  this.setPosition(this.top, this.left);
 
  // console.log(top, "top from blue dancer")
  // console.log(left, "left from blue dancer")
  // console.log(this.left, "left")


};
  
makeGermanDancer.prototype = Object.create(makeDancer.prototype);

makeGermanDancer.prototype.constructor = makeGermanDancer;

makeGermanDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  // this.$node.toggle();
};

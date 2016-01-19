var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;

  // return blinkyDancer;
  this.step(timeBetweenSteps);
};
  
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // console.log(timeBetweenSteps, "time setting inside step");
  // console.log(this.blinkSpeed, "the blink speed");
  makeDancer.prototype.step.call(this);
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

var makeBlueBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bluedancer"></span>');


  this.step(timeBetweenSteps);
};
  
makeBlueBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlueBlinkyDancer.prototype.constructor = makeBlueBlinkyDancer;

makeBlueBlinkyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  this.$node.toggle();
};
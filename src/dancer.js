// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // this.dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  // return dancer;
  this.timeBetweenSteps = timeBetweenSteps;
  // console.log(this.left, "left from parent function");
  // console.log(this.top, "top from parent function")
  this.setPosition(this.top, this.left);
};

makeDancer.prototype.step = function() {
  // console.log(timeBetweenSteps, "time inside makeDancer")
  // console.log(this.blinkSpeed, "Blink speed")
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
// dancer.step();

makeDancer.prototype.setPosition = function(top, left) {
  // console.log("in set position")
  // console.log(top, "top inside set position")
  // console.log(left, "left inside set position")
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  // console.log(this.$node);
};

makeDancer.prototype.lineUp = function(newTop) {
  this.top = newTop;
  this.setPosition(newTop);
};

// this.setPosition(top, left);

// makeDancer.prototype.mouse = function() {
  
// };
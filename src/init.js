
$(document).ready(function() {
  window.dancers = [];
  var germanCounter = 0;
  var britishCounter = 0;

  var distanceCalc = function(top1, left1, top2, left2) {
    // return Math.sqrt((Math.pow((Math.abs(top1 - top2)),2))+(Math.pow((Math.abs(left1 - left2)),2)));
    console.log(left1, "left1");
    console.log(left2, "left2");
    var xDistance = Math.abs(top1 - top2);
    var yDistance = Math.abs(left1 - left2);
    var squaredX = Math.pow(xDistance, 2);
    var squareY = Math.pow(yDistance, 2);
    return Math.sqrt(squaredX + squareY);





    // console.log(distance);
    // console.log(left1, left2, "left 1 and left 2");
    // console.log(left1 - left2, "left one minus left2");
    // console.log(Math.abs(left1 - left2), "absolute value");
    // console.log(Math.pow((Math.abs(left1 - left2)),2), "quadratic");

    // console.log((Math.abs(top1 - top2)), "top1 minus top2");
    // console.log(Math.sqrt((Math.pow((Math.abs(top1 - top2)),2))+(Math.pow((Math.abs(left1 - left2)),2))), "the whole thing");
  };

  var dancerIt = function(mouseLeft, mouseTop){
    var closestDist = 100000;
    var closestDancer;
    var leftCar;

    for(var i = 0; i < window.dancers.length; i++){
      leftCar = parseInt(window.dancers[i].$node.css("left"));
      //If the mouse left is less than something
      // console.log(leftCar, "left character")
      // console.log(window.dancers[i].top);
      // console.log(parseInt(window.dancers[i].$node.css("top")), ".css top!");
      var currDistance = distanceCalc(parseInt(window.dancers[i].$node.css("top")), leftCar,mouseTop, mouseLeft);
      // console.log(currDistance, "current distance")
      // console.log(closestDist, "closest distance")
      if(currDistance < closestDist){
        closestDist = currDistance;
        closestDancer = window.dancers[i];
        console.log("Inside the conditional", currDistance)
      }
    }
    return closestDancer;
   };

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    

    // make a dancer with a random position
  
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    // push the dancers to the window.dancers array
    window.dancers.push(dancer);
    if(dancer.$node[0].className === "germandancer"){
      germanCounter++;
    }
    if(dancer.$node[0].className === "britishdancer"){
      britishCounter++;
    }

    // console.log(dancer.$node, "dancer & node");
    $('body').append(dancer.$node);
  });


$(".lineUpDancers").on("click", function(event){
  // console.log($(window).height());
  var germanTop = 75;
  var britishTop = 75;
  for(var i = 0; i < window.dancers.length; i++) {
    if(window.dancers[i].$node[0].className === "germandancer"){
      window.dancers[i].lineUp(germanTop);
      germanTop+=(($(window).height()) / germanCounter);
    } else if (window.dancers[i].$node[0].className === "britishdancer") {
      window.dancers[i].lineUp(britishTop);
      britishTop+=(($(window).height()) / britishCounter);
    }
  }
 
  $(".britishdancer").animate({left:"90%"}, 500);
  $(".germandancer").animate({left:"5%"}, 500);

  $('.mousebox').mouseover(function(event){
    // console.log(event.pageX, "X axis");
    // console.log(event.pageY, "Y axis");
    var selectedDancer = dancerIt(event.pageX, event.pageY);
    //you can animate directly because $node has access to all jquery methods
    if(selectedDancer.$node[0].className === "germandancer"){
    selectedDancer.$node.animate({left:"50%"}, 500);
    } else if (selectedDancer.$node[0].className === "britishdancer") {
      selectedDancer.$node.animate({left:"60%"}, 500);
    }
    // console.log(selectedDancer.$node)
    // $(".moused").animate({left:"50%"}, 500);
    // console.log(selectedDancer);
  });

});
});





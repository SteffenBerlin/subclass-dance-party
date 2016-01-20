//HELPER FUNCTIONS:







//DOC READY

$(document).ready(function() {
  window.dancers = [];
  var germanCounter = 0;
  var britishCounter = 0;

  // var dancerIterater

  var distanceCalc = function(top1, left1, top2, left2) {
    return Math.sqrt((Math.pow((Math.abs(top1 - top2)),2))+(Math.pow((Math.abs(left1 - left2)),2)));
    // console.log(distance);
    // console.log(left1, left2, "left 1 and left 2");
    // console.log(left1 - left2, "left one minus left2");
    // console.log(Math.abs(left1 - left2), "absolute value");
    // console.log(Math.pow((Math.abs(left1 - left2)),2), "quadratic");

    // console.log((Math.abs(top1 - top2)), "top1 minus top2");
    // console.log(Math.sqrt((Math.pow((Math.abs(top1 - top2)),2))+(Math.pow((Math.abs(left1 - left2)),2))), "the whole thing");
  };

  var dancerIt = function(mouseLeft, mouseTop){
    var closestDist = 6398713267;
    var closestDancer;
    for(var i = 0; i < window.dancers.length; i++){
      //If the mouse left is less than something
      var leftCar = (mouseLeft < 950) ? 50 : 2000;
      var currDistance = distanceCalc(mouseTop, mouseLeft, window.dancers[i].top, leftCar);
      // console.log(currDistance, "current distance")
      // console.log(closestDist, "closest distance")
      if(currDistance < closestDist){
        closestDist = currDistance;
        closestDancer = window.dancers[i];
        // console.log(closestDancer, "closestDancer")
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
 
  $(".britishdancer").animate({left:"90%"}, 2500);
  $(".germandancer").animate({left:"5%"}, 2500);
  $('.mousebox').mouseover(function(event){
    var selectedDancer = dancerIt(event.pageX, event.pageY);
    // console.log(selectedDancer);
  });

});
});


// $(".britishdancer").mouseover(function(){
//     $("britishdancer").animate({left: "90%"}, 2000);
// });




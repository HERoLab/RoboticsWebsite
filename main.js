$(document).ready(function() {

//Image Conveyor
var current_image_num = 1;

function cycleToImage(i) {
 $(".conveyorImage").animate(
  {
   opacity:0,
  }, {duration: 1000, queue: false});
 $("#image_"+i).animate(
  {
   opacity:1,
  },{duration: 1000, queue: false}) ;
 $(".conveyorButton").removeClass("activeConveyorButton");
 $(".conveyorButton[for=image_"+i+"]").addClass("activeConveyorButton");
}

function moveConveyor() {
 current_image_num++;
 if (current_image_num > $(".conveyorImage").length){
  current_image_num = 1;
 }
 cycleToImage(current_image_num);
}

$(".conveyorButton").on("click", function() {
 current_image_num = $(this).attr("for").slice(6)
 clearInterval(conveyorInterval);
 cycleToImage(current_image_num);
 conveyorInterval = setInterval(moveConveyor, 4000);
});

var conveyorInterval = setInterval(moveConveyor, 4000);

//Tooltip Activation
$(document).tooltip({
 track:true
});


});

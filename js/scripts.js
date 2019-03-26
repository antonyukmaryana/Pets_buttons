$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("body").addClass("light-text");
  });
  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("light-background");
    $("body").addClass("dark-text");
  });
  $("#highlight").click(function() {
    $("#highlight").css("background-color", "lightblue");
    $("#highlight").css("border", "solid", "2px", "black");
  });
  // $("").click(function() {
    // $("body").addClass("light-text");
  // });
});

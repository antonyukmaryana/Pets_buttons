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
  // $("").click(function() {
    // $("body").addClass("light-text");
  // });
});

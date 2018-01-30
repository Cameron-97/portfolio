$(document).ready(function() {
  $(".toggle").on('click', function() {
    var elem = $(".toggle").text();
    if (elem === "Read More") {
      //Stuff to do when btn is in the read more state
      $(".toggle").text("Read Less");
      $(".text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".toggle").text("Read More");
      $(".text").slideUp();
    }
  });
});

$(document).ready(function() {
  $(".toggle-2").on('click', function() {
    var elem = $(".toggle-2").text();
    if (elem === "Read More") {
      //Stuff to do when btn is in the read more state
      $(".toggle-2").text("Read Less");
      $(".text-2").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".toggle-2").text("Read More");
      $(".text-2").slideUp();
    }
  });
});

$(document).ready(function() {
  $(".toggle-3").on('click', function() {
    var elem = $(".toggle-3").text();
    if (elem === "Read More") {
      //Stuff to do when btn is in the read more state
      $(".toggle-3").text("Read Less");
      $(".text-3").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".toggle-3").text("Read More");
      $(".text-3").slideUp();
    }
  });
});
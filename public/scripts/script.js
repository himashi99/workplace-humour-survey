//if name entered <3 characters, HTML5 validation error sent
var userName = document.getElementById("name");

userName.addEventListener("input", function (event) {
  if (userName.validity.tooShort) {
    userName.setCustomValidity("Please enter a valid name");
  } else {
    userName.setCustomValidity("");
  }
});

//if email entered is not formatted correctly, HTML5 validation error sent
var mail = document.getElementById("email");

mail.addEventListener("input", function (event) {
  if (mail.validity.typeMismatch) {
    mail.setCustomValidity("Please enter a valid email");
  } else {
    mail.setCustomValidity("");
  }
});

//if age is less than 14, HTML validation error sent
var ageLimit = document.getElementById("number");

ageLimit.addEventListener("input", function (event) {
  if (ageLimit.validity.rangeUnderflow) {
    ageLimit.setCustomValidity("You must be working age 14+");
  } else {
    ageLimit.setCustomValidity("");
  }
});

//If no movies are selected, error message is displayed and form won't submit
$("form").submit(function(e){
  if ($('input:checkbox').filter(':checked').length < 1) {
      $('.error-message').css('display','block');
      console.log('morbo!');
      e.preventDefault();
  } else {
    //open up new window with message
    window.open("page2.html");
    // $(".dialog-box").css({ display: "none" });
    // alert("Congrats");
  }
});

//If user clicks on the last movie selection i.e. None of the Above, all other choices are disabled
$(function() {
  disable_movie();
  $("#movie-checkbox10").click(disable_movie);
});

function disable_movie() {
  if (this.checked) {
    $(".disabled-group").attr("disabled", true);
  } else {
    $(".disabled-group").removeAttr("disabled");
  }
}

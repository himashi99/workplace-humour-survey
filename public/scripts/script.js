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

function validateCheckbox() {
        var n = $("input:checked").length;
        if(n == 0) {
            return false;
        } else {
            return true;
        }
    }

// var myButton = document.getElementById('submitform');
//     myButton.onclick = function(event) {
//         alert("hello");
//     }


    // $(document).ready(function(){
// var mov = document.getElementById('movie-checkbox10');
//
// mov.addEventListener("submit", function (event) {
//   if ($('input:checkbox').filter(':checked').length < 1){
//       document.getElementById('movie-checkbox10').setCustomValidity("Please select at least one");
//   return false;
//   }
//
// })
        $("form").submit(function(){
    		if ($('input:checkbox').filter(':checked').length < 1){
            document.getElementById('yo').setCustomValidity("Please select at least one");
    		return false;
    		}
        });
    // });

// var movieSelect = document.getElementById("improve-checkbox");
//
// movieSelect.addEventListener("submit", function (event) {
//   var isChecked = $('#improve-checkbox').prop('checked');
//   if (isChekced == false) {
//     movieSelect.setCustomValidity("Yo");
//   } else {
//     email.setCustomValidity("");
//   }
// });

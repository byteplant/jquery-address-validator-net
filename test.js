$( document ).ready(function() {

  // Init only once
  $.validateAddress("iv-a4dc26d2e4022fc9423af1009489c3e0");

  // OnClick
  $("#submit").click(function () {
    $("#addressform").validateAddress(function (response) {
      console.log(response);
    })
  })
});

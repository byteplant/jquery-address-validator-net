$( document ).ready(function() {

  // Init only once
  $.validateAddress("YOUR API KEY");

  // OnClick
  $("#submit").click(function () {
    $("#addressform").validateAddress(function (response) {
      console.log(response);
    })
  })
});

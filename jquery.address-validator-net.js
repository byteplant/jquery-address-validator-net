(function ( $ ) {
  var baseUrl = "https://api.address-validator.net/api/verify"

  $.validateAddress = function(apiKey){
    var apiKey = apiKey
    $.fn.validateAddress = function(cb) {
      var address = this.val();
      $.get(baseUrl + "?StreetAddress=" + $("#address").val() + "&City=" + $("#city").val() + "&PostalCode=" + $("#zip").val() + "&CountryCode=" + $("#countrycode").val() + "&APIKey=" + apiKey,
        $.proxy(function (res) {
          if (res.status == "VALID") {
            this.children("input").css('border-color', 'green');
          } else if (res.status == "SUSPECT") {
            this.children("input").css('border-color', 'orange');
          } else if (res.status == "INVALID") {
            this.children("input").css('border-color', 'red');
          } else {
            this.children("input").css('border-color', 'black');
          }
          cb(res)
      }, this));
      return this;
    };
  }
}( jQuery ));

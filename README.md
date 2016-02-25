jquery-address-validator-net
=========

A small library providing a wrapper for [api.address-validator.net](http://www.address-validator.net/adressen-pruefen-online-api.html) for jQuery

## Installation
  Download zip, extract and embed `jquery.address-validator-net.js` to your HTML.
  This Plugin needs jQuery!
## Usage
See test.js and test.html
  ```js
  // Init only once
  $.validateAddress("YOUR API KEY");

  // OnClick
  $("#submit").click(function () {
    $("#addressform").validateAddress(function (response) {
      console.log(response);
    })
  })

  //response looks like that:
  /*
    status	           VALID, INVALID, SUSPECT or error: DELAYED, RATE_LIMIT_EXCEEDED, API_KEY_INVALID_OR_DEPLETED, RESTRICTED, INTERNAL_ERROR
    formattedaddress	 full address in standardized format
    street	           street address in standardized format
    streetnumber	     street number in standardized format
    postalcode	       zip/postal code in standardized format
    city	             city in standardized format
    state	             state/province in standardized format
    country	           two-letter ISO 3166-1 country code
*/
  ```

## Release History

* 0.1.0 Initial release

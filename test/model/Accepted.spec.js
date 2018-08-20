/**
 * Topcoder Meta Services REST API
 * REST API for Topcoder Meta Services.  This describes a service that can give information on other services existing on Topcoder.  Available service links can be listed by sending GET request. Also, each service can return links to further services in their responses.  ### Pagination   Requests that return multiple items will be paginated to 20 items by default. You can specify   further pages with the ```page``` parameter. You can also set a custom page   size up to 100 with the ```perPage``` parameter.    Pagination response data is included in http headers. By Default, the response header contains links with ```next```, ```last```, ```first```, ```prev``` resource links. 
 *
 * OpenAPI spec version: 5.0.0
 * Contact: support@topcoder.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TopcoderMetaServicesRestApi);
  }
}(this, function(expect, TopcoderMetaServicesRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TopcoderMetaServicesRestApi.Accepted();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Accepted', function() {
    it('should create an instance of Accepted', function() {
      // uncomment below and update the code to test Accepted
      //var instance = new TopcoderMetaServicesRestApi.Accepted();
      //expect(instance).to.be.a(TopcoderMetaServicesRestApi.Accepted);
    });

  });

}));

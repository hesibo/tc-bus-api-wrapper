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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TopcoderMetaServicesRestApi) {
      root.TopcoderMetaServicesRestApi = {};
    }
    root.TopcoderMetaServicesRestApi.NoContent = factory(root.TopcoderMetaServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NoContent model module.
   * @module model/NoContent
   * @version 5.0.0
   */

  /**
   * Constructs a new <code>NoContent</code>.
   * No Content - The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.
   * @alias module:model/NoContent
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>NoContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NoContent} obj Optional instance to populate.
   * @return {module:model/NoContent} The populated <code>NoContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));



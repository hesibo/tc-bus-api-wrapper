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
    define(['ApiClient', 'model/Payload', 'model/Service'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Payload'), require('./Service'));
  } else {
    // Browser globals (root is window)
    if (!root.TopcoderMetaServicesRestApi) {
      root.TopcoderMetaServicesRestApi = {};
    }
    root.TopcoderMetaServicesRestApi.ExtendedService = factory(root.TopcoderMetaServicesRestApi.ApiClient, root.TopcoderMetaServicesRestApi.Payload, root.TopcoderMetaServicesRestApi.Service);
  }
}(this, function(ApiClient, Payload, Service) {
  'use strict';




  /**
   * The ExtendedService model module.
   * @module model/ExtendedService
   * @version 5.0.0
   */

  /**
   * Constructs a new <code>ExtendedService</code>.
   * The extended service entity. 
   * @alias module:model/ExtendedService
   * @class
   * @implements module:model/Service
   * @param name {String} The service name.
   * @param version {String} The service version.
   * @param commitHash {String} The service commit hash.
   * @param description {String} The service description.
   * @param baseURL {String} The service base URL.
   * @param payloads {Array.<module:model/Payload>} The service payloads
   */
  var exports = function(name, version, commitHash, description, baseURL, payloads) {
    var _this = this;

    Service.call(_this, name, version, commitHash, description, baseURL, payloads);

  };

  /**
   * Constructs a <code>ExtendedService</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtendedService} obj Optional instance to populate.
   * @return {module:model/ExtendedService} The populated <code>ExtendedService</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Service.constructFromObject(data, obj);
      if (data.hasOwnProperty('serviceId')) {
        obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The service id.
   * @member {String} serviceId
   */
  exports.prototype['serviceId'] = undefined;

  // Implement Service interface:
  /**
   * The service name.
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * The service version.
   * @member {String} version
   */
exports.prototype['version'] = undefined;

  /**
   * The service commit hash.
   * @member {String} commitHash
   */
exports.prototype['commitHash'] = undefined;

  /**
   * The service description.
   * @member {String} description
   */
exports.prototype['description'] = undefined;

  /**
   * The service base URL.
   * @member {String} baseURL
   */
exports.prototype['baseURL'] = undefined;

  /**
   * The service payloads
   * @member {Array.<module:model/Payload>} payloads
   */
exports.prototype['payloads'] = undefined;



  return exports;
}));



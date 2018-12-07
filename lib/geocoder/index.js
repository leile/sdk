"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFeatures = getFeatures;
exports.getLocationsDEPRECATED = getLocationsDEPRECATED;

var _api = require("../api");

var _config = require("../config");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getPositionParamsFromGeolocationResult(coords) {
  if (!coords) {
    return {};
  }

  var latitude = coords.latitude,
      longitude = coords.longitude;
  return {
    'focus.point.lat': latitude,
    'focus.point.lon': longitude
  };
}

function getFeatures(text, coords) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _getGeocoderHost = (0, _config.getGeocoderHost)(this.config),
      host = _getGeocoderHost.host,
      headers = _getGeocoderHost.headers;

  var searchParams = _objectSpread({}, getPositionParamsFromGeolocationResult(coords), {
    lang: 'no',
    text: text
  }, params);

  var url = "".concat(host, "/autocomplete");
  return (0, _api.get)(url, searchParams, headers).then(function (data) {
    return data.features || [];
  });
} // preserve backwards compatability


function getLocationsDEPRECATED(text) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (process.env !== 'production') {
    // eslint-disable-next-line
    console.info('service.getLocations is deprecated and will be removed in a future version. Use service.getFeatures instead');
  }

  return getFeatures.call(this, text, undefined, params);
}
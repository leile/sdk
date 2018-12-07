"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServiceConfig = getServiceConfig;
exports.getJourneyPlannerHost = getJourneyPlannerHost;
exports.getGeocoderHost = getGeocoderHost;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var HOST_CONFIG = {
  journeyplanner: 'https://api.entur.org/journeyplanner/2.0/index',
  geocoder: 'https://api.entur.org/api/geocoder/1.1'
};

function getServiceConfig(config) {
  if (!config || !config.clientName) {
    throw new Error('ERROR: You must pass a "clientName" to EnturService through the config argument. ' + 'See https://www.entur.org/dev/api/header/ for information.\n');
  }

  var _config$hosts = config.hosts,
      hosts = _config$hosts === void 0 ? {} : _config$hosts,
      rest = _objectWithoutProperties(config, ["hosts"]);

  return _objectSpread({}, rest, {
    hosts: _objectSpread({}, HOST_CONFIG, hosts)
  });
}

function getJourneyPlannerHost(_ref) {
  var hosts = _ref.hosts,
      clientName = _ref.clientName;
  return {
    host: hosts.journeyplanner,
    headers: {
      'ET-Client-Name': clientName,
      'extended-info': true
    }
  };
}

function getGeocoderHost(_ref2) {
  var hosts = _ref2.hosts,
      clientName = _ref2.clientName;
  return {
    host: hosts.geocoder,
    headers: {
      'ET-Client-Name': clientName
    }
  };
}
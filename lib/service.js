"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _trip = require("./trip");

var _bikeRental = require("./bikeRental");

var _geocoder = require("./geocoder");

var _config = require("./config");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EnturService = function EnturService(config) {
  _classCallCheck(this, EnturService);

  Object.defineProperty(this, "getFeatures", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: _geocoder.getFeatures
  });
  Object.defineProperty(this, "getLocations", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: _geocoder.getLocationsDEPRECATED
  });
  Object.defineProperty(this, "getTripPatterns", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: _trip.getTripPatterns
  });
  Object.defineProperty(this, "findTrips", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: _trip.findTrips
  });
  Object.defineProperty(this, "getStopPlaceDepartures", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: _trip.getStopPlaceDepartures
  });
  Object.defineProperty(this, "getStopPlace", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: _trip.getStopPlace
  });
  Object.defineProperty(this, "getStopPlacesByPosition", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: _trip.getStopPlacesByPosition
  });
  Object.defineProperty(this, "getBikeRentalStation", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: _bikeRental.getBikeRentalStation
  });
  Object.defineProperty(this, "getBikeRentalStations", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: _bikeRental.getBikeRentalStations
  });
  this.config = (0, _config.getServiceConfig)(config);
};

var _default = EnturService;
exports.default = _default;
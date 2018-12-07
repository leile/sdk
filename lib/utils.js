"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertFeatureToLocation = convertFeatureToLocation;
exports.convertLocationToPositionDEPRECATED = convertLocationToPositionDEPRECATED;
exports.convertPositionToBbox = convertPositionToBbox;
exports.isValidDate = isValidDate;
exports.throttler = void 0;

var _turfLinestring = _interopRequireDefault(require("turf-linestring"));

var _turfPoint = _interopRequireDefault(require("turf-point"));

var _bbox3 = _interopRequireDefault(require("@turf/bbox"));

var _destination = _interopRequireDefault(require("@turf/destination"));

var _promiseThrottle = _interopRequireDefault(require("promise-throttle"));

var _rateLimits = require("./constants/rateLimits");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function convertFeatureToLocation(feature) {
  var properties = feature.properties,
      geometry = feature.geometry;
  return {
    name: properties.name,
    place: properties.id,
    coordinates: {
      latitude: geometry.coordinates[1],
      longitude: geometry.coordinates[0]
    }
  };
} // preserve backward compatability


function convertLocationToPositionDEPRECATED(feature) {
  if (process.env !== 'production') {
    // eslint-disable-next-line
    console.info('convertLocationToPosition is deprecated and will be removed in a future version. Use convertFeatureToLocation instead');
  }

  return convertFeatureToLocation(feature);
}

function convertPositionToBbox(coordinates, distance) {
  var latitude = coordinates.latitude,
      longitude = coordinates.longitude;
  var distanceToKilometer = distance / 1000;
  var position = (0, _turfPoint.default)([longitude, latitude]);
  var east = (0, _destination.default)(position, distanceToKilometer, 0);
  var north = (0, _destination.default)(position, distanceToKilometer, 90);
  var west = (0, _destination.default)(position, distanceToKilometer, 180);
  var south = (0, _destination.default)(position, distanceToKilometer, -90);
  var line = (0, _turfLinestring.default)([east.geometry.coordinates, north.geometry.coordinates, west.geometry.coordinates, south.geometry.coordinates]);

  var _bbox = (0, _bbox3.default)(line),
      _bbox2 = _slicedToArray(_bbox, 4),
      minLng = _bbox2[0],
      minLat = _bbox2[1],
      maxLng = _bbox2[2],
      maxLat = _bbox2[3];

  return {
    minLng: minLng,
    minLat: minLat,
    maxLng: maxLng,
    maxLat: maxLat
  };
}

var throttler = function throttler(func, args) {
  var argCount = args.length;
  var requestsPerSecond;

  if (argCount <= _rateLimits.MAX_CALLS_PER_MINUTE) {
    requestsPerSecond = _rateLimits.MAX_CALLS_PER_SECOND;
  } else if (argCount <= _rateLimits.MAX_CALLS_PER_HOUR) {
    requestsPerSecond = Math.floor(_rateLimits.MAX_CALLS_PER_MINUTE / 60);
  } else {
    requestsPerSecond = Math.floor(_rateLimits.MAX_CALLS_PER_HOUR / 3600);
  }

  var promiseThrottle = new _promiseThrottle.default({
    requestsPerSecond: requestsPerSecond
  });
  return Promise.all(args.map(function (a) {
    return promiseThrottle.add(func.bind(_this, a));
  }));
};

exports.throttler = throttler;

function isValidDate(d) {
  return Object.prototype.toString.call(d) === '[object Date]' && !Number.isNaN(d.getTime());
}
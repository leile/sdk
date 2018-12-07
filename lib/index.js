"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  convertFeatureToLocation: true,
  convertPositionToBbox: true,
  convertLocationToPosition: true,
  throttler: true
};
Object.defineProperty(exports, "convertFeatureToLocation", {
  enumerable: true,
  get: function get() {
    return _utils.convertFeatureToLocation;
  }
});
Object.defineProperty(exports, "convertPositionToBbox", {
  enumerable: true,
  get: function get() {
    return _utils.convertPositionToBbox;
  }
});
Object.defineProperty(exports, "convertLocationToPosition", {
  enumerable: true,
  get: function get() {
    return _utils.convertLocationToPositionDEPRECATED;
  }
});
Object.defineProperty(exports, "throttler", {
  enumerable: true,
  get: function get() {
    return _utils.throttler;
  }
});
exports.default = void 0;

var _service = _interopRequireDefault(require("./service"));

var _utils = require("./utils");

var _travelModes = require("./constants/travelModes");

Object.keys(_travelModes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _travelModes[key];
    }
  });
});

var _featureCategory = require("./constants/featureCategory");

Object.keys(_featureCategory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _featureCategory[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _service.default;
exports.default = _default;
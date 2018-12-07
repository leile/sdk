"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.post = post;

var _queryParams = _interopRequireDefault(require("query-params"));

var _cleanDeep = _interopRequireDefault(require("clean-deep"));

var _fetch = _interopRequireDefault(require("./fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

function responseHandler(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
}

function get(url, params, headers, config) {
  return (0, _fetch.default)("".concat(url, "?").concat(_queryParams.default.encode(params)), _objectSpread({
    method: 'get'
  }, config, {
    headers: _objectSpread({}, DEFAULT_HEADERS, headers)
  })).then(responseHandler).then(function (res) {
    return res.json();
  }).then(_cleanDeep.default);
}

function post(url, params, headers, config) {
  return (0, _fetch.default)(url, _objectSpread({
    method: 'post'
  }, config, {
    headers: _objectSpread({}, DEFAULT_HEADERS, headers),
    body: JSON.stringify(params)
  })).then(responseHandler).then(function (res) {
    return res.json();
  }).then(_cleanDeep.default);
}
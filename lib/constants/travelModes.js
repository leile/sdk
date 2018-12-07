"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCarPickup = exports.isCarPark = exports.isFoot = exports.isTransit = exports.isTram = exports.isMetro = exports.isRail = exports.isLift = exports.isFunicular = exports.isWater = exports.isCoach = exports.isCar = exports.isCableway = exports.isBus = exports.isBicycle = exports.isAir = exports.TransportSubmode = exports.LegMode = exports.TransportMode = exports.AIRPORT_LINK_BUS = exports.TOURIST_RAILWAY = exports.REGIONAL_CAR_FERRY = exports.RAIL_REPLACEMENT_BUS = exports.NATIONAL_CAR_FERRY = exports.LOCAL_PASSENGER_FERRY = exports.LOCAL_CAR_FERRY = exports.INTERNATIONAL_CAR_FERRY = exports.HIGH_SPEED_VEHICLE_SERVICE = exports.HIGH_SPEED_PASSENGER_SERVICE = exports.AIRPORT_LINK_RAIL = exports.CAR_PICKUP = exports.CAR_PARK = exports.FOOT = exports.TRANSIT = exports.TRAM = exports.METRO = exports.RAIL = exports.LIFT = exports.FUNICULAR = exports.WATER = exports.COACH = exports.CAR = exports.CABLEWAY = exports.BUS = exports.BICYCLE = exports.AIR = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Any for of public transportation
var AIR = 'air';
exports.AIR = AIR;
var BICYCLE = 'bicycle';
exports.BICYCLE = BICYCLE;
var BUS = 'bus';
exports.BUS = BUS;
var CABLEWAY = 'cableway';
exports.CABLEWAY = CABLEWAY;
var CAR = 'car';
exports.CAR = CAR;
var COACH = 'coach';
exports.COACH = COACH;
var WATER = 'water';
exports.WATER = WATER;
var FUNICULAR = 'funicular';
exports.FUNICULAR = FUNICULAR;
var LIFT = 'lift';
exports.LIFT = LIFT;
var RAIL = 'rail';
exports.RAIL = RAIL;
var METRO = 'metro';
exports.METRO = METRO;
var TRAM = 'tram';
exports.TRAM = TRAM;
var TRANSIT = 'transit';
exports.TRANSIT = TRANSIT;
var FOOT = 'foot'; // Combine with foot and transit for park and ride.

exports.FOOT = FOOT;
var CAR_PARK = 'car_park'; // Combine with foot and transit for ride and kiss

exports.CAR_PARK = CAR_PARK;
var CAR_PICKUP = 'car_pickup';
exports.CAR_PICKUP = CAR_PICKUP;
var AIRPORT_LINK_RAIL = 'airportLinkRail';
exports.AIRPORT_LINK_RAIL = AIRPORT_LINK_RAIL;
var HIGH_SPEED_PASSENGER_SERVICE = 'highSpeedPassengerService';
exports.HIGH_SPEED_PASSENGER_SERVICE = HIGH_SPEED_PASSENGER_SERVICE;
var HIGH_SPEED_VEHICLE_SERVICE = 'highSpeedVehicleService';
exports.HIGH_SPEED_VEHICLE_SERVICE = HIGH_SPEED_VEHICLE_SERVICE;
var INTERNATIONAL_CAR_FERRY = 'internationalCarFerry';
exports.INTERNATIONAL_CAR_FERRY = INTERNATIONAL_CAR_FERRY;
var LOCAL_CAR_FERRY = 'localCarFerry';
exports.LOCAL_CAR_FERRY = LOCAL_CAR_FERRY;
var LOCAL_PASSENGER_FERRY = 'localPassengerFerry';
exports.LOCAL_PASSENGER_FERRY = LOCAL_PASSENGER_FERRY;
var NATIONAL_CAR_FERRY = 'nationalCarFerry';
exports.NATIONAL_CAR_FERRY = NATIONAL_CAR_FERRY;
var RAIL_REPLACEMENT_BUS = 'railReplacementBus';
exports.RAIL_REPLACEMENT_BUS = RAIL_REPLACEMENT_BUS;
var REGIONAL_CAR_FERRY = 'regionalCarFerry';
exports.REGIONAL_CAR_FERRY = REGIONAL_CAR_FERRY;
var TOURIST_RAILWAY = 'touristRailway';
exports.TOURIST_RAILWAY = TOURIST_RAILWAY;
var AIRPORT_LINK_BUS = 'airportLinkBus';
exports.AIRPORT_LINK_BUS = AIRPORT_LINK_BUS;
var TransportMode = {
  BUS: BUS,
  TRAM: TRAM,
  RAIL: RAIL,
  METRO: METRO,
  WATER: WATER,
  AIR: AIR,
  COACH: COACH,
  CAR: CAR
};
exports.TransportMode = TransportMode;

var LegMode = _objectSpread({}, TransportMode, {
  FOOT: FOOT,
  BICYCLE: BICYCLE
});

exports.LegMode = LegMode;
var TransportSubmode = {
  AIRPORT_LINK_RAIL: AIRPORT_LINK_RAIL,
  HIGH_SPEED_PASSENGER_SERVICE: HIGH_SPEED_PASSENGER_SERVICE,
  HIGH_SPEED_VEHICLE_SERVICE: HIGH_SPEED_VEHICLE_SERVICE,
  INTERNATIONAL_CAR_FERRY: INTERNATIONAL_CAR_FERRY,
  LOCAL_CAR_FERRY: LOCAL_CAR_FERRY,
  LOCAL_PASSENGER_FERRY: LOCAL_PASSENGER_FERRY,
  NATIONAL_CAR_FERRY: NATIONAL_CAR_FERRY,
  RAIL_REPLACEMENT_BUS: RAIL_REPLACEMENT_BUS,
  REGIONAL_CAR_FERRY: REGIONAL_CAR_FERRY,
  TOURIST_RAILWAY: TOURIST_RAILWAY,
  AIRPORT_LINK_BUS: AIRPORT_LINK_BUS
};
exports.TransportSubmode = TransportSubmode;

var isAir = function isAir(mode) {
  return mode === AIR;
};

exports.isAir = isAir;

var isBicycle = function isBicycle(mode) {
  return mode === BICYCLE;
};

exports.isBicycle = isBicycle;

var isBus = function isBus(mode) {
  return mode === BUS;
};

exports.isBus = isBus;

var isCableway = function isCableway(mode) {
  return mode === CABLEWAY;
};

exports.isCableway = isCableway;

var isCar = function isCar(mode) {
  return mode === CAR;
};

exports.isCar = isCar;

var isCoach = function isCoach(mode) {
  return mode === COACH;
};

exports.isCoach = isCoach;

var isWater = function isWater(mode) {
  return mode === WATER;
};

exports.isWater = isWater;

var isFunicular = function isFunicular(mode) {
  return mode === FUNICULAR;
};

exports.isFunicular = isFunicular;

var isLift = function isLift(mode) {
  return mode === LIFT;
};

exports.isLift = isLift;

var isRail = function isRail(mode) {
  return mode === RAIL;
};

exports.isRail = isRail;

var isMetro = function isMetro(mode) {
  return mode === METRO;
};

exports.isMetro = isMetro;

var isTram = function isTram(mode) {
  return mode === TRAM;
};

exports.isTram = isTram;

var isTransit = function isTransit(mode) {
  return mode === TRANSIT;
};

exports.isTransit = isTransit;

var isFoot = function isFoot(mode) {
  return mode === FOOT;
};

exports.isFoot = isFoot;

var isCarPark = function isCarPark(mode) {
  return mode === CAR_PARK;
};

exports.isCarPark = isCarPark;

var isCarPickup = function isCarPickup(mode) {
  return mode === CAR_PICKUP;
};

exports.isCarPickup = isCarPickup;
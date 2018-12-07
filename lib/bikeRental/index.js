"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBikeRentalStation = getBikeRentalStation;
exports.getBikeRentalStations = getBikeRentalStations;

var _api = require("../api");

var _query = require("./query");

var _config = require("../config");

var _utils = require("../utils");

function getBikeRentalStation(stationId) {
  var _getJourneyPlannerHos = (0, _config.getJourneyPlannerHost)(this.config),
      host = _getJourneyPlannerHos.host,
      headers = _getJourneyPlannerHos.headers;

  var url = "".concat(host, "/graphql");
  var variables = {
    id: stationId
  };
  var params = {
    query: _query.getBikeRentalStationProp,
    variables: variables
  };
  return (0, _api.post)(url, params, headers).then(function (response) {
    return response.data.bikeRentalStation;
  });
}

function getBikeRentalStations(coordinates) {
  var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  var _getJourneyPlannerHos2 = (0, _config.getJourneyPlannerHost)(this.config),
      host = _getJourneyPlannerHos2.host,
      headers = _getJourneyPlannerHos2.headers;

  var url = "".concat(host, "/graphql");
  var variables = (0, _utils.convertPositionToBbox)(coordinates, distance);
  var params = {
    query: _query.getBikeRentalStationByBoxProps,
    variables: variables
  };
  return (0, _api.post)(url, params, headers).then(function (response) {
    return (response.data || {}).bikeRentalStationsByBbox || [];
  });
}
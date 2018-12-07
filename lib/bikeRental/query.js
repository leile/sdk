"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBikeRentalStationsProps = exports.getBikeRentalStationProp = exports.getBikeRentalStationByBoxProps = void 0;
var getBikeRentalStationByBoxProps = "\nquery bikeRentalStationsByBox($minLat:Float, $minLng:Float, $maxLat:Float, $maxLng:Float) {\n  bikeRentalStationsByBbox(minimumLatitude: $minLat, minimumLongitude: $minLng, maximumLatitude: $maxLat , maximumLongitude: $maxLng) {\n    id\n    name\n    bikesAvailable\n    spacesAvailable\n    longitude\n    latitude\n  }\n}";
exports.getBikeRentalStationByBoxProps = getBikeRentalStationByBoxProps;
var getBikeRentalStationProp = "\nquery bikeRentalStation($id:String!) {\n  bikeRentalStation(id:$id) {\n    id\n    name\n    bikesAvailable\n    spacesAvailable\n    longitude\n    latitude\n  }\n}";
exports.getBikeRentalStationProp = getBikeRentalStationProp;
var getBikeRentalStationsProps = "\n{\n  bikeRentalStation {\n    id\n    name\n    bikesAvailable\n    spacesAvailable\n    longitude\n    latitude\n  }\n}";
exports.getBikeRentalStationsProps = getBikeRentalStationsProps;
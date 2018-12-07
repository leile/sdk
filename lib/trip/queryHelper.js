"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.situationFragment = exports.situationFields = exports.intermediateEstimatedCallFragment = exports.intermediateEstimatedCallFields = exports.lineFragment = exports.lineFields = exports.placeFragment = exports.placeFields = void 0;

/*
 * Common query fields and fragments used in Journeyplanner queries.
 * Interpolate them into the query strings wherever they are needed.
 */
var placeFieldsKey = 'placeFields';
var lineFieldsKey = 'lineFields';
var intEstimatedCallFieldsKey = 'intEstimatedCallFields';
var situationFieldsKey = 'situationFields';
var situationFieldsVal = "situations { ...".concat(situationFieldsKey, " }");
var placeFields = "\n    fromPlace { ...".concat(placeFieldsKey, " }\n    toPlace { ...").concat(placeFieldsKey, " }");
exports.placeFields = placeFields;
var placeFragment = "\n        fragment ".concat(placeFieldsKey, " on Place {\n          name\n          latitude\n          longitude\n          quay {\n            id\n            name\n            description\n            publicCode\n            ").concat(situationFieldsVal, "\n          }\n        }");
exports.placeFragment = placeFragment;
var lineFields = "line { ...".concat(lineFieldsKey, " }");
exports.lineFields = lineFields;
var lineFragment = "\n    fragment ".concat(lineFieldsKey, " on Line {\n      id\n      publicCode\n      name\n      transportMode\n      description\n      presentation { colour textColour }\n      authority { id name }\n      notices { text }\n      ").concat(situationFieldsVal, "\n    }");
exports.lineFragment = lineFragment;
var intermediateEstimatedCallFields = "intermediateEstimatedCalls { ...".concat(intEstimatedCallFieldsKey, " }");
exports.intermediateEstimatedCallFields = intermediateEstimatedCallFields;
var intermediateEstimatedCallFragment = "\n    fragment ".concat(intEstimatedCallFieldsKey, " on EstimatedCall {\n      quay { id name stopPlace { id } }\n      forAlighting\n      forBoarding\n      expectedArrivalTime\n      expectedDepartureTime\n      aimedArrivalTime\n      aimedDepartureTime\n      date\n    }");
exports.intermediateEstimatedCallFragment = intermediateEstimatedCallFragment;
var situationFields = situationFieldsVal;
exports.situationFields = situationFields;
var situationFragment = "\n    fragment ".concat(situationFieldsKey, " on PtSituationElement {\n      situationNumber\n      summary { value }\n      description { value }\n      detail { value }\n      validityPeriod { startTime endTime }\n      reportType\n      infoLink\n    }");
exports.situationFragment = situationFragment;
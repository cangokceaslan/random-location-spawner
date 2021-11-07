"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomLong = exports.generateRandomLat = void 0;

// LONGITUDE -180 to + 180
var generateRandomLong = function generateRandomLong() {
  var num = (Math.random() * 180).toFixed(3);
  var posorneg = Math.floor(Math.random());

  if (posorneg == 0) {
    num = num * -1;
  }

  return num;
}; // LATITUDE -90 to +90


exports.generateRandomLong = generateRandomLong;

var generateRandomLat = function generateRandomLat() {
  var num = (Math.random() * 90).toFixed(3);
  var posorneg = Math.floor(Math.random());

  if (posorneg == 0) {
    num = num * -1;
  }

  return num;
};

exports.generateRandomLat = generateRandomLat;
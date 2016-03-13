require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-funny":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Loading;
var React = require('react');

function Loading(_ref) {
  var size = _ref.size;
  var title = _ref.title;
  var message = _ref.message;
  var spinner = _ref.spinner;

  function chooseFunnyMessage() {
    var funnys = ["We'll be back in a sec.", "640K ought to be enough for anybody", "The architects are still drafting", "The bits are breeding", "We're building the buildings as fast as we can", "Would you prefer chicken, steak, or tofu?", "Pay no attention to the man behind the curtain", "And enjoy the elevator music", "While the little elves draw your map", "A few bits tried to escape, but we caught them", "And dream of faster computers", "Would you like fries with that?", "Checking the gravitational constant in your locale", "Go ahead -- hold your breath", "At least you're not on hold", "Hum something loud while others stare", "You're not in Kansas anymore", "The server is powered by a lemon and two electrodes", "We love you just the way you are", "While a larger software vendor in Seattle takes over the world", "We're testing your patience", "As if you had any other choice", "Take a moment to sign up for our lovely prizes", "Don't think of purple hippos", "Follow the white rabbit", "Why don't you order a sandwich?", "The bits are flowing slowly today", "Dig on the 'X' for buried treasure... ARRR!", "It's still faster than you could draw it"];
    return funnys[Math.floor(Math.random() * funnys.length)];
  }

  return React.createElement(
    "div",
    { className: "loading loading-" + (size || "md") },
    spinner ? React.createElement("i", { className: "fa fa-spinner fa-spin" }) : null,
    React.createElement(
      "h1",
      null,
      title || "Loading..."
    ),
    React.createElement(
      "p",
      null,
      message ? message : chooseFunnyMessage()
    )
  );
}

module.exports = exports["default"];

},{"react":undefined}]},{},[]);

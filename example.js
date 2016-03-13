require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactLoading = require('react-funny');

ReactDOM.render(React.createElement(ReactLoading, null), document.getElementById('app'));
ReactDOM.render(React.createElement(ReactLoading, { title: 'Loading all the things...' }), document.getElementById('app-title'));
ReactDOM.render(React.createElement(ReactLoading, { title: 'Putting out the fires', message: 'This could take a while...' }), document.getElementById('app-message'));
ReactDOM.render(React.createElement(ReactLoading, { size: 'lg' }), document.getElementById('app-size-lg'));
ReactDOM.render(React.createElement(ReactLoading, { size: 'md' }), document.getElementById('app-size-md'));
ReactDOM.render(React.createElement(ReactLoading, { size: 'sm' }), document.getElementById('app-size-sm'));

},{"react":undefined,"react-dom":undefined,"react-funny":undefined}]},{},[1]);

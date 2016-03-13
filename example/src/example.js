var React = require('react');
var ReactDOM = require('react-dom');
var ReactLoading = require('react-funny');

ReactDOM.render(<ReactLoading />, document.getElementById('app'));
ReactDOM.render(<ReactLoading title="Loading all the things..." />, document.getElementById('app-title'));
ReactDOM.render(<ReactLoading title="Putting out the fires" message="This could take a while..." />, document.getElementById('app-message'));
ReactDOM.render(<ReactLoading size="lg" />, document.getElementById('app-size-lg'));
ReactDOM.render(<ReactLoading size="md" />, document.getElementById('app-size-md'));
ReactDOM.render(<ReactLoading size="sm" />, document.getElementById('app-size-sm'));

var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("Main");
var Todo = require("Todo");

var actions = require("actions");
var store = require("configureStore").configure();

store.subscribe(() => {
	console.log("New state", store.getState());
});

store.dispatch(actions.addTodoItem("Clean the yard"));
store.dispatch(actions.setSearchText("yard"));
store.dispatch(actions.toggleShowCompleted());

// Load Foundation
$(document).foundation();

// App CSS
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route/>
            <IndexRoute component={Todo}/>
        </Route>
    </Router>,
    document.getElementById('app')
);




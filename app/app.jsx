var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("Main");
import Todo from "Todo";

var actions = require("actions");
var store = require("configureStore").configure();
var TodoAPI = require("TodoAPI");
import Login from "Login";

store.dispatch(actions.startAddTodos());

// Load Foundation
$(document).foundation();

// App CSS
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <Route path="todos" component={Todo}/>
                <IndexRoute component={Login}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);




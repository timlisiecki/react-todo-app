var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("Main");
var Todo = require("Todo");

var actions = require("actions");
var store = require("configureStore").configure();
var TodoAPI = require("TodoAPI");

store.subscribe(() => {
    var state = store.getState();
	console.log("New state", state);
    TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load Foundation
$(document).foundation();

// App CSS
require("style!css!sass!applicationStyles");

ReactDOM.render(
    /* <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route/>
            <IndexRoute component={Todo}/>
        </Route>
    </Router>,*/
    <Provider store={store}>
    	<Todo/>
    </Provider>,
    document.getElementById('app')
);




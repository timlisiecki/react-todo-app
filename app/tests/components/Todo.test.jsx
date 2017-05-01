var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var expect = require("expect");
var $ = require("jquery");
var TestUtils = require("react-addons-test-utils");

var configureStore = require("configureStore");
var Todo = require("Todo");
import TodoList from "TodoList";

describe("Todo App", () => {
	it("should exist", () => {
		expect(Todo).toExist();
	});

	it("should render TodoList", () => {
		var store = configureStore.configure();
		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<Todo/>
			</Provider>
		);

		var todoApp = TestUtils.scryRenderedComponentsWithType(provider, Todo)[0];
		var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

		expect(todoList.length).toEqual(1);
	});
});
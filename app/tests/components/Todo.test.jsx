var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jquery");
var TestUtils = require("react-addons-test-utils");

var Todo = require("Todo");

describe("Todo App", () => {
	it("should exist", () => {
		expect(Todo).toExist();
	});

	it("should add todo to the todos state onHandleAddTodo", () => {
		var todoText = "test text";
		var todoApp = TestUtils.renderIntoDocument(<Todo/>);

		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
		expect(todoApp.state.todos[0].createdAt).toBeA("number");
	});

	it("should toggle completed value when handleToggle called", () => {
		var todoData = {
			id: 11,
			text: "Test features",
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};
		var todoApp = TestUtils.renderIntoDocument(<Todo/>);
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);
		expect(todoApp.state.todos[0].completedAt).toBeA("number");
	});

	it("should toggle todo from completed to incomplete", () => {
		var todoData = {
			id: 11,
			text: "Test features",
			completed: true,
			createdAt: 0,
			completedAt: 123
		};
		var todoApp = TestUtils.renderIntoDocument(<Todo/>);
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(true);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toNotExist();
	});
});
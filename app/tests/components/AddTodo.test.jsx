var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jquery");
var TestUtils = require("react-addons-test-utils");

var {AddTodo} = require("AddTodo");

describe("AddTodo", () => {
	it("should exist", () => {
		expect(AddTodo).toExist();
	});

	it("should dispatch ADD_TODO_ITEM when valid todo text", () => {
		var todoText = "Check mail";
		var action = {
			type: "ADD_TODO_ITEM",
			text: todoText
		};
		var spy = expect.createSpy();
		var addTodoItem = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodoItem));

		addTodoItem.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find("form")[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});

	it("should not dispatch ADD_TODO when invalid todoText", () => {
		var todoText = "";
		var spy = expect.createSpy();
		var addTodoItem = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodoItem));

		addTodoItem.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find("form")[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});
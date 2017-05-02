var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jquery");
var TestUtils = require("react-addons-test-utils");

import * as actions from "actions";
import {TodoItem} from "TodoItem";

describe("TodoItem", () => {
	it("should exist", () => {
		expect(TodoItem).toExist();
	});

	it("should dispach UPDATE_TODO_ITEM on click", () => {
		var todoData = {
			id: 199,
			text: "Write todo.test.jsx test",
			completed: true
		};
		var action = actions.startToggleTodoItem(todoData.id, !todoData.completed);

		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<TodoItem {...todoData} dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});
});
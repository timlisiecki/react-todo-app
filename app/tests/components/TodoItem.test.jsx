var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jquery");
var TestUtils = require("react-addons-test-utils");

var TodoItem = require("TodoItem");

describe("TodoItem", () => {
	it("should exist", () => {
		expect(TodoItem).toExist();
	});

	it("should call onToggle prop with id on click", () => {
		var todoData = {
			id: 199,
			text: "Write todo.test.jsx test",
			completed: true
		};
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<TodoItem {...todoData} onToggle={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(199);
	});
});
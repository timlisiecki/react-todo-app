var expect = require("expect");
var actions = require("actions");

describe("Actions", () => {
	it("should generate search text action", () => {
		var action = {
			type: "SET_SEARCH_TEXT",
			searchText: "Some search text"
		};
		var res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	});

	it("should generate toggle show completed action", () => {
		var action = {
			type: "TOGGLE_SHOW_COMPLETED",
		};
		var res = actions.toggleShowCompleted();

		expect(res).toEqual(action);
	});

	it("should generate add todo item action", () => {
		var action = {
			type: "ADD_TODO_ITEM",
			text: "Thing to do"
		};
		var res = actions.addTodoItem(action.text);

		expect(res).toEqual(action);
	});

	it("should generate ADD_TODOS action object", () => {
		var todos = [{
			id: "111",
			text: "anything",
			completed: false,
			completedAt: undefined,
			createdAt: 33000
		}];
		var action = {
			type: "ADD_TODOS",
			todos
		};
		var res = actions.addTodos(todos);

		expect(res).toEqual(action);
	});

	it("should generate toggle todo item action", () => {
		var action = {
			type: "TOGGLE_TODO_ITEM",
			id: "123"
		};
		var res = actions.toggleTodoItem(action.id);

		expect(res).toEqual(action);
	});
});
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
var expect = require("expect");

var actions = require("actions");

var createMockStore = configureMockStore([thunk]);

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
			todo: {
				id: "123abc",
				text: "Anything we like",
				completed: false,
				createdAt: 124434
			}
		};
		var res = actions.addTodoItem(action.todo);

		expect(res).toEqual(action);
	});

	it("should create todo and dispatch ADD_TODO_ITEM", (done) => {
		const store = createMockStore({});
		const todoText = "My todo item";

		store.dispatch(actions.startAddTodoItem(todoText)).then(() => {
			const actions = store.getActions();
			
			expect(actions[0]).toInclude({
				type: "ADD_TODO_ITEM"
			});
			expect(actions[0].todo).toInclude({
				text: todoText
			});
			done();
		}).catch(done);
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
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
var expect = require("expect");

import firebase, {firebaseRef} from "app/firebase/";
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

	it("should generate update todo item action", () => {
		var action = {
			type: "UPDATE_TODO_ITEM",
			id: "123",
			updates: {completed: false}
		};
		var res = actions.updateTodoItem(action.id, action.updates);

		expect(res).toEqual(action);
	});

	it("should generate login action object", () => {
		const action = {
			type: "LOGIN",
			uid: "123abc"
		};
		const res= actions.login(action.uid);

		expect(res).toEqual(action);
	});

	it("should geneerate logout action object", () => {
		const action = {
			type: "LOGOUT"
		};
		const res = actions.logout();

		expect(res).toEqual(action);
	});

	describe("Tests with Firebase todos", () => {
		var testTodoRef;

		beforeEach((done) => {
			var todosRef = firebaseRef.child("todos");

			todosRef.remove().then(() => {
				testTodoRef = firebaseRef.child("todos").push();

				return testTodoRef.set({
					text: "Something to do",
					completed: false,
					createdAt: 3575252
				});
			})
			.then(() => done())
			.catch(done);

		});

		afterEach((done) => {
			testTodoRef.remove().then(() => done());
		});

		it("should toggle todo and dispatch UPDATE_TODO_ITEM action", (done) => {
			const store = createMockStore({});
			const action = actions.startToggleTodoItem(testTodoRef.key, true);

			store.dispatch(action).then(() => {
				const mockActions = store.getActions();

				expect(mockActions[0]).toInclude({
					type: "UPDATE_TODO_ITEM",
					id: testTodoRef.key
				});
				expect(mockActions[0].updates).toInclude({
					completed: true
				});
				expect(mockActions[0].updates.completedAt).toExist();

				done();
			}, done);
		});

		it("should populate todos and dispatch ADD_TODOS", (done) => {
			const store = createMockStore({});
			const action = actions.startAddTodos();

			store.dispatch(action).then(() => {
				const mockActions = store.getActions();

				expect(mockActions[0].type).toEqual("ADD_TODOS");
				expect(mockActions[0].todos.length).toEqual(1);
				expect(mockActions[0].todos[0].text).toEqual("Something to do");

				done();
			}, done);
		});
	});
});








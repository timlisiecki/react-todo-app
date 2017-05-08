import firebase, {firebaseRef, githubProvider} from "app/firebase/";
import moment from "moment";

export var setSearchText = (searchText) => {
	return {
		type: "SET_SEARCH_TEXT",
		searchText
	};
};

export var toggleShowCompleted = () => {
	return {
		type: "TOGGLE_SHOW_COMPLETED"
	};
};

export var addTodoItem = (todo) => {
	return {
		type: "ADD_TODO_ITEM",
		todo
	};
};

export var startAddTodoItem = (text) => {
	return (dispatch, getState) => {
		var todo = {
			text,
			completed: false,
			createdAt: moment().unix(),
			completedAt: null
		};
		var uid = getState().auth.uid;
		var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

		return todoRef.then(() => {
			dispatch(addTodoItem({
				...todo,
				id: todoRef.key
			}));
		});
	};
};

export var addTodos = (todos) => {
	return {
		type: "ADD_TODOS",
		todos
	};
};

export var startAddTodos = () => {
	return (dispatch, getState) => {
		var uid = getState().auth.uid;
		var todosRef = firebaseRef.child(`user/${uid}/todos`);

		return todosRef.once("value").then((snapshot) => {
			var todos = snapshot.val() || {};
			var parsedTodos = [];

			Object.keys(todos).forEach((todoId) => {
				parsedTodos.push({
					id: todoId,
					...todos[todoId]
				});
			});

			dispatch(addTodos(parsedTodos));
		});
	};
};

export var updateTodoItem = (id, updates) => {
	return {
		type: "UPDATE_TODO_ITEM",
		id,
		updates
	}
};

export var startToggleTodoItem = (id, completed) => {
	return (dispatch, getState) => {
		var uid = getState().auth.uid;
		var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
		var updates = {
			completed,
			completedAt: completed ? moment().unix() : null
		};

		return todoRef.update(updates).then(() => {
			dispatch(updateTodoItem(id, updates));
		});
	};
};

export var login = (uid) => {
	return {
		type: "LOGIN",
		uid
	};
};

export var startLogin = () => {
	return (dispatch, getState) => {
		return firebase.auth().signInWithPopup(githubProvider).then((result) => {
			console.log("Auth worked", result);
		}, (error) => {
			console.log("Unable to auth", error);
		});
	};
};

export var logout = () => {
	return {
		type: "LOGOUT"
	};
};

export var startLogout = () => {
	return (dispatch, getState) => {
		return firebase.auth().signOut().then(() => {
			console.log("Logged out");
		});
	};
};



















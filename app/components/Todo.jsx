var React = require("react");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");
var uuid = require("node-uuid");

var Todo = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: "",
			todos: [
				{
					id: uuid(),
					text: "Walk the dog"
				},
				{
					id: uuid(),
					text: "Clean the house"
				},
				{
					id: uuid(),
					text: "Buy groceries"
				},
				{
					id: uuid(),
					text: "Pay bills"
				},
				{
					id: uuid(),
					text: "Do laundry"
				}
			]
		};
	},
	handleAddTodo: function (text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text
				}
			]
		});
	},
	handleSearch: function(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		})
	},
	render: function() {
		var {todos} = this.state;

		return (
			<div>
				<h1 className="text-center">To Do App</h1>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		)
	}
});

module.exports = Todo;
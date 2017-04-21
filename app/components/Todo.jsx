var React = require("react");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");

var Todo = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: "",
			todos: [
				{
					id: 1,
					text: "Walk the dog"
				},
				{
					id: 2,
					text: "Clean the house"
				},
				{
					id: 3,
					text: "Buy groceries"
				},
				{
					id: 4,
					text: "Pay bills"
				},
				{
					id: 5,
					text: "Do laundry"
				}
			]
		};
	},
	handleAddTodo: function (text) {
		alert("new todo: " + text);
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
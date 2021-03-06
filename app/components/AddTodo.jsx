var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		var {dispatch} = this.props;
		var todoText = this.refs.todoText.value;

		if (todoText.length > 0) {
			this.refs.todoText.value = "";
			dispatch(actions.startAddTodoItem(todoText));
		} else {
			this.refs.todoText.focus();
		}
	}
	render() {
		return (
			<div className="container__footer">
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref="todoText" placeholder="Add new to do..."/>
					<button className="button expanded">Add To Do</button>
				</form>
			</div>
		);
	}
};

export default connect()(AddTodo);
import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.task);
   this.task = ''
  
  };

  clearElements = e =>{
    e.preventDefault();
      this.props.clearItem()
  }

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.task}
          name="task"
          onChange={this.handleChanges}
        />
        <button>Add</button>
        <button onClick={this.clearElements}>Clear</button>
      </form>
      

    );
  }
}

export default TodoForm;

import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.css'

const todos =[{
  task: "My First Todo",
  id: Date.now(),
  completed:false
}
]

class App extends React.Component {
  constructor(){
    super();
    this.state={
      todos
    };
  }
  toggleItem = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };
  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  clearItem = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}toggleItem={this.toggleItem} />
        <TodoForm addItem={this.addItem} clearItem={this.clearItem}/>
      </div>
    );
  }
}

export default App;

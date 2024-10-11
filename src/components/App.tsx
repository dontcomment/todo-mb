import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import FilterButtons from '../components/FilterButtons';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>Список задач</h1>
      <div className='input-form'>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Добавьте новую задачу"
        />
        <button onClick={handleAddTodo}>Добавить</button>
      </div>
      
      <FilterButtons setFilter={setFilter} currentFilter={filter} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={handleToggleTodo}
        deleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default App;
import React from 'react';
import { Todo } from './App';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
    return (
      <li className={todo.completed ? 'completed' : ''}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>{todo.text}</span>
        <button className="delete-button" onClick={() => deleteTodo(todo.id)}>Удалить</button>
      </li>
    );
  };

export default TodoItem;
import React from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`todo-item ${todo.completed ? 'completed' : ''}`}
  >
    <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
    <div className="actions">
      <button onClick={() => toggleComplete(todo.id)} className="complete-btn">
        <FaCheck />
      </button>
      <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
        <FaTrash />
      </button>
    </div>
  </motion.div>
);

export default TodoItem;

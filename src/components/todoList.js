import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TodoItem from './todoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => (
  <ul className="todo-list">
    <AnimatePresence>
      {todos.map((todo) => (
        <motion.li
          key={todo.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          <TodoItem
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </motion.li>
      ))}
    </AnimatePresence>
  </ul>
);

export default TodoList;

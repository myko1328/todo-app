import React from 'react';
import TodoItem from './TodoItem';

const TodosList = ({
  todos,
  handleChangeProps,
  deleteTodoProps,
  editId,
  setEditId,
  updateTodo,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          editId={editId}
          setEditId={setEditId}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodosList;

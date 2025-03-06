import React, { useState } from 'react';

const completedStyle = {
  fontStyle: 'italic',
  color: '#d35e0f',
  opacity: 0.4,
  textDecoration: 'line-through',
};

const TodoItem = ({
  todo: { completed, id, title },
  handleChangeProps,
  deleteTodoProps,
  editId,
  setEditId,
  updateTodo,
}) => {
  const [newTitle, setNewTitle] = useState(title);

  const handleEditOnchange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSave = () => {
    updateTodo(id, newTitle);
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setNewTitle(title);
  };
  return (
    <li className="todo-item">
      {editId === id ? (
        <>
          <input
            type="text"
            value={newTitle}
            className="input-text"
            style={{ width: '100%' }}
            onChange={handleEditOnchange}
          />
          <button onClick={() => handleSave()}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleChangeProps(id)}
          />
          <button onClick={() => deleteTodoProps(id)}>Delete</button>
          <button onClick={() => setEditId(id)}>Edit</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </>
      )}
    </li>
  );
};

export default TodoItem;

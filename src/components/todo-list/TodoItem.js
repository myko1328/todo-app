import React, { useState } from 'react';
import './index.css';

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
    <li className="todo-item" data-testid="todo-item">
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
          {!completed && <button onClick={() => setEditId(id)}>Edit</button>}
          <span className={`${completed ? 'completed' : ''}`}>{title}</span>
        </>
      )}
    </li>
  );
};

export default TodoItem;

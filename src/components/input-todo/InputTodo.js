import React, { useState } from 'react';

const InputTodo = ({ addTodoProps }) => {
  const [title, setTitle] = useState('');
  const [isRequired, setIsRequired] = useState(false);

  const onChange = (e) => {
    e.persist();
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim()) {
      addTodoProps(title);
      setTitle('');
      setIsRequired(false);
    } else {
      setIsRequired(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={title}
          name="title"
          onChange={onChange}
        />
        <input type="submit" className="input-submit" value="Submit" />
      </form>
      {isRequired && (
        <span style={{ fontSize: '12px', color: 'red' }}>This is required</span>
      )}
    </>
  );
};

export default InputTodo;

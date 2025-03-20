import React, { useState } from 'react';
import axios from 'axios';

const PostPage = () => {
  const [data, setData] = useState({ name: '', age: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${process.env.REACT_APP_API_URL}/post`, data)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        setMessage('Error creating document');
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <h1>POST Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={data.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" name="age" value={data.age} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p className={message === 'Document created' ? 'success' : 'error'}>{message}</p>}
    </div>
  );
};

export default PostPage;

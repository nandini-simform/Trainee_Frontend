import React, { useState } from 'react';
import axios from 'axios';

const PutPage = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState({ name: '', age: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`${process.env.REACT_APP_API_URL}/put/${id}`, data)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        setMessage('Error updating document');
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <h1>PUT Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={handleIdChange} />
        </label>
        <br />
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
      {message && <p className={message === 'Document updated' ? 'success' : 'error'}>{message}</p>}
    </div>
  );
};

export default PutPage;

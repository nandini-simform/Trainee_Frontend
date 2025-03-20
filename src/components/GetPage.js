import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/get`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>GET Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetPage;

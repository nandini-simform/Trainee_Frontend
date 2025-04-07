import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null); // State to hold the selected item ID
  const navigate = useNavigate();

  // Fetch data when the component is mounted
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/get');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  // Navigate to the post page
  const handleAddData = () => {
    navigate('/post');
  };

  // Set the selected item for deletion
  const handleSelectItemForDelete = (id) => {
    setSelectedItemId(id); // Set the selected item ID for deletion
  };

  // Navigate to delete page with selected item ID
  const handleDelete = () => {
    if (!selectedItemId) {
      console.error('No item selected for deletion!');
      return;
    }
    navigate(`/delete/${selectedItemId}`);
  };

  return (
    <div className="container">
      <h1>Home Page</h1>
      <button onClick={handleAddData}>Add Data</button>

      <div>
        <h3>Fetched Data:</h3>
        {data.map((item) => (
          <div key={item._id}>
            <span>{item.name} {item.age}</span>
            <button onClick={() => handleSelectItemForDelete(item._id)}>Select for Deletion</button>
          </div>
        ))}
      </div>

      <button onClick={handleDelete} disabled={!selectedItemId}>
        Delete Selected Item
      </button>
    </div>
  );
};

export default HomePage;

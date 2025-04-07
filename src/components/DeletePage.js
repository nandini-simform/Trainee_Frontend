import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeletePage = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    const deleteItem = async () => {
      try {
        const response = await fetch(`http://localhost:5000/delete/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Item deleted successfully');
          navigate('/home'); // Navigate back to the home page after deletion
        } else {
          console.error('Failed to delete item');
          alert('Failed to delete item');
        }
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('Error deleting item');
      }
    };

    deleteItem(); // Call the delete function when the page is loaded
  }, [id, navigate]);

  return (
    <div>
      <h1>Deleting Item...</h1>
    </div>
  );
};

export default DeletePage;

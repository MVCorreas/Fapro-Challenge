"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export const MainScreen = () => {
  const [entities, setEntities] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();
  
  // Fetch entities from the API
  const fetchEntities = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      setError('No token found');
      return;
    }
    
    try {
      const response = await axios.get('https://api-fapro-itw.fapro.dev/v1/api_entities/entities/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        }
      });
      
      setEntities(response.data.data); // Adjust based on actual response structure
    } catch (error) {
      setError('Error fetching entities');
      console.error('Error fetching entities:', error);
    }
  };

  useEffect(() => {
    fetchEntities();
  }, []);

  const FunRemove = async (id) => {
    if (window.confirm("Do you want to remove?")) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://api-fapro-itw.fapro.dev/v1/api_entities/entities/${id}/`, {
          method: "DELETE",
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          },
        });
  
        if (response.status === 204) {
          console.log("Entity deleted successfully");
  
          // Filter out the deleted entity from the list
          setEntities((prevEntities) => prevEntities.filter((entity) => entity.id !== id));
        } else {
          console.error(`Failed to delete entity, status code: ${response.status}`);
          const responseBody = await response.json();
          console.log("Error response:", responseBody);
        }
      } catch (err) {
        console.error("Failed to delete entity:", err.message);
      }
    }
  };

  const handleCreateEntity = () => {
    router.push('/create-entity');
  }

  const logOut = () => {
    router.push('/signin')
  }
  
  return (
    <div>
      <h1>Main Screen</h1>
      {error && <div className="error">{error}</div>}
      <ul>
        {entities.length > 0 ? (
          entities.map((entity) => (
            <li key={entity.id}>
              {entity.business_name}
              <button className="btn btn-danger" onClick={()=>{FunRemove(entity.id)}}>Detete</button>
            </li>
          ))
        ) : (
          <li>No entities found</li>
        )}
      </ul>
      <div className='btn btn-outline btn-sm'>
        <button onClick={handleCreateEntity}>Create Entity</button>
      </div>
      <div className='btn btn-outline btn-sm'>
        <button onClick={logOut}>Log Out</button>
      </div>
    </div>
  );
};

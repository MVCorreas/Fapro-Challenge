"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useRouter} from 'next/navigation'

export const MainScreen = () => {
  const [entities, setEntities] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
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
    
    fetchEntities();
  }, []);

  const handleCreateEntity = () => {
    router.push('/create-entity')
  }
  
  return (
    <div>
      <h1>Main Screen</h1>
      {error && <div className="error">{error}</div>}
      <ul>
        {entities.length > 0 ? (
          entities.map((entity) => (
            <li key={entity.id}>{entity.name}</li> // Adjust based on actual entity properties
          ))
        ) : (
          <li>No entities found</li>
        )}
      </ul>
      <div className='btn btn-outline btn-sm'>
      <button onClick={handleCreateEntity}>Create Entity</button>
      </div>
     
    </div>
  );
};

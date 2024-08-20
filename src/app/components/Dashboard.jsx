"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const apiUrl = process.env.NEXT_PUBLIC_API_URL; 

export const Dashboard = () => {
  const [entities, setEntities] = useState([]);
  const [disabledEntities, setDisabledEntities] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();
  
  const fetchEntities = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      setError('No token found');
      return;
    }
    
    try {
      const response = await axios.get(`${apiUrl}/api_entities/entities/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        }
      });

      const enabledEntities = response.data.data.filter(entity => entity.is_enabled);
      
      setEntities(enabledEntities);
    } catch (error) {
      setError('Error fetching entities');
      console.error('Error fetching entities:', error);
    }
  };

  const fetchDisabledEntities = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError('No token found');
      return;
    }

    try {
      const response = await axios.get(`${apiUrl}/api_entities/entities/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
      });

      const disabledEntitiesList = response.data.data.filter(entity => !entity.is_enabled);
      setDisabledEntities(disabledEntitiesList);
    } catch (error) {
      setError('Error fetching disabled entities');
      console.error('Error fetching disabled entities:', error);
    }
  };

  useEffect(() => {
    fetchEntities();
  }, []);

  const removeEntity = async (id) => {
    if (window.confirm("Do you want to remove?")) {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found');
        return;
      }
      
      try {
        const response = await axios.delete(`${apiUrl}/api_entities/entities/${id}/`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          },
        });
  
        if (response.status === 204) {
          console.log("Entity deleted successfully");
  
          setEntities((prevEntities) => prevEntities.filter((entity) => entity.id !== id));
        } else {
          console.error(`Failed to delete entity, status code: ${response.status}`);
        }
      } catch (error) {
        console.error("Failed to delete entity:", error.message);
      }
    }
  };

  const handleCreateEntity = () => {
    router.push('/create-entity');
  };

  const handleEditEntity = (entityId) => {
    router.push(`/edit-entity/${entityId}`);
};

  const logOut = () => {
    router.push('/');
  };
  
  return (
    <div>
      <h1>Main Screen</h1>
      {error && <div className="error">{error}</div>}
      <ul>
        {entities.length > 0 ? (
          entities.map((entity) => (
            <li key={entity.id}>
              {entity.business_name}
              <button className='btn btn-outline btn-sm' onClick={() => handleEditEntity(entity.id)}>Edit</button>
              <button className="btn btn-danger" onClick={() => removeEntity(entity.id)}>Delete</button>
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
        <button onClick={fetchDisabledEntities}>Show Disabled Entities</button>
      </div>
      <div className='btn btn-outline btn-sm'>
        <button onClick={logOut}>Log Out</button>
      </div>
      {disabledEntities.length > 0 && (
        <div>
          <h2>Disabled Entities</h2>
          <ul>
            {disabledEntities.map((entity) => (
              <li key={entity.id}>
                {entity.business_name}
                <button className='btn btn-outline btn-sm' onClick={() => handleEditEntity(entity.id)}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


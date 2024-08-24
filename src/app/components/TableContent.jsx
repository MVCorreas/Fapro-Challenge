"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { EyeIcon, BinIcon, PlusIcon, EditIcon } from "../../../public/Icons";
import Link from 'next/link';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const TableContent = () => {
  const [entities, setEntities] = useState([]);
  const [disabledEntities, setDisabledEntities] = useState([]);
  const [showDisabledEntities, setShowDisabledEntities] = useState(false);
  const [error, setError] = useState(null);
  const [selectedEntities, setSelectedEntities] = useState([]);
  const router = useRouter();

  const fetchEntities = async () => {
    if (typeof window === "undefined") return; // Avoids issues with SSR

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

      const enabledEntities = response.data.data.filter(entity => entity.is_enabled);
      const disabledEntitiesList = response.data.data.filter(entity => !entity.is_enabled);

      setEntities(enabledEntities);
      setDisabledEntities(disabledEntitiesList);
    } catch (error) {
      setError('Error fetching entities');
      console.error('Error fetching entities:', error);
    }
  };

  useEffect(() => {
    fetchEntities();
  }, []);

  const updateEntityStatus = async (id, newStatus) => {
    if (typeof window === "undefined") return; // Avoids issues with SSR

    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found');
      return;
    }

    try {
      await axios.patch(`${apiUrl}/api_entities/entities/${id}/`,
        { is_enabled: newStatus },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          },
        }
      );

      fetchEntities();
    } catch (error) {
      console.error('Error updating entity status:', error);
      setError('Error updating entity status');
    }
  };

  const handleRemoveEntity = async (id) => {
    if (window.confirm("Do you want to remove?")) {
      if (typeof window === "undefined") return; // Avoids issues with SSR

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
          setEntities(prevEntities => prevEntities.filter(entity => entity.id !== id));
          setDisabledEntities(prevDisabledEntities => prevDisabledEntities.filter(entity => entity.id !== id));
        } else {
          console.error(`Failed to delete entity, status code: ${response.status}`);
        }

        fetchEntities();
      } catch (error) {
        console.error("Failed to delete entity:", error.message);
        setError('Failed to delete entity');
      }
    }
  };

  const handleCreateEntity = () => router.push('/create-entity');
  const handleEditEntity = (entityId) => router.push(`/edit-entity/${entityId}`);
  const toggleDisabledEntities = () => setShowDisabledEntities(prev => !prev);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allEntitiesIds = [...entities.map(entity => entity.id), ...disabledEntities.map(entity => entity.id)];
      setSelectedEntities(allEntitiesIds);
    } else {
      setSelectedEntities([]);
    }
  };

  const handleSelectEntity = (id) => {
    setSelectedEntities(prev =>
      prev.includes(id) ? prev.filter(entityId => entityId !== id) : [...prev, id]
    );
  };

  const renderTableRows = (entitiesList, showEditButton = true) => (
    entitiesList.length > 0 ? (
      entitiesList.map((entity) => (
        <tr key={entity.id}>
          <th>
            <label>
              <input
                type="checkbox"
                className="checkbox"
                checked={selectedEntities.includes(entity.id)}
                onChange={() => handleSelectEntity(entity.id)}
              />
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-8 w-8">
                  <Image
                    src={entity.image || '/Rocket.png'}
                    alt={entity.business_name}
                    width={50}
                    height={50}
                
                  />
                </div>
              </div>
              <div
              className="font-bold text-xs cursor-pointer"
              onClick={() => handleEditEntity(entity.id)} 
            >
              {entity.business_name}
            </div>
            </div>
          </td>
          <td>{entity.credential}</td>
          <td className="text-xs">{new Date(entity.created_at).getFullYear()}</td>
          <td>
            <p>{entity.is_enabled ? 'Active' : 'Inactive'}</p>
          </td>
          <td>
            <div className="flex gap-2">
              <button onClick={() => handleEditEntity(entity.id)}>
                <EditIcon />
              </button>
              {entity.is_enabled && (
                <button onClick={() => handleRemoveEntity(entity.id)}>
                  <BinIcon />
                </button>
              )}
            </div>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="6" className="text-center text-xs p-4">
          No items found.
        </td>
      </tr>
    )
  );

  return (
    <div className="overflow-x-auto bg-white rounded-sm shadow m-2">
      <div className="flex flex-row items-center justify-between space-x-1 p-2">
        <div className="stat-desc font-semibold text-black">My Companies</div>
        <div className="justify-end gap-1">
          <button
            className="btn my-1 text-xs btn-sm bg-purple-700 hover:bg-violet-400 text-white"
            onClick={handleCreateEntity}
          >
            <PlusIcon />
            Add
          </button>
          <button
            className="btn my-1 text-xs btn-sm bg-purple-700 hover:bg-violet-400 text-white"
            onClick={toggleDisabledEntities}
          >
            <EyeIcon />
            {showDisabledEntities ? 'Hide' : 'Show'} Inactive
          </button>
        </div>
      </div>

      <div className="max-h-72 overflow-y-auto">
        <table className="table min-w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedEntities.length === [...entities, ...disabledEntities].length}
                  />
                </label>
              </th>
              <th>Name</th>
              <th>ID</th>
              <th>Since</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows(entities)}
            {showDisabledEntities && renderTableRows(disabledEntities, false)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

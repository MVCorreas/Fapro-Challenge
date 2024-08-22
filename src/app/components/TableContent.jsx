'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { EyeIcon, BinIcon, DownloadIcon, PlusIcon } from "../../../public/Icons";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const TableContent = () => {
  const [entities, setEntities] = useState([]);
  const [disabledEntities, setDisabledEntities] = useState([]);
  const [showDisabledEntities, setShowDisabledEntities] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
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

      // Re-fetch entities after updating the status
      fetchEntities();
    } catch (error) {
      console.error('Error updating entity status:', error);
      setError('Error updating entity status');
    }
  };

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

        // Re-fetch entities after deletion
        fetchEntities();
      } catch (error) {
        console.error("Failed to delete entity:", error.message);
      }
    }
  };

  const handleCreateEntity = () => router.push('/create-entity');
  const handleEditEntity = (entityId) => router.push(`/edit-entity/${entityId}`);
  const logOut = () => router.push('/');
  const toggleDisabledEntities = () => setShowDisabledEntities(prev => !prev);



  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allProductIds = tableData.map((product) => product.id);
      setSelectedProducts(allProductIds);
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter((productId) => productId !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  return (
    <div className="overflow-x-auto bg-white rounded-sm shadow m-2">
      <div className="flex flex-row items-center justify-between space-x-1 p-2">
        <div className="stat-desc font-semibold text-black">My Companies</div>
        <button className="btn my-1 text-xs btn-sm" onClick={handleCreateEntity}>
          <PlusIcon />
         Add
        </button>
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
                    checked={selectedProducts.length === entities.length}
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
            {entities.length > 0 ? (
              entities.map((entity) => (
                <tr key={entity.id}>
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={selectedProducts.includes(entity.id)}
                        onChange={() => handleSelectProduct(entity.id)}
                      />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-6 w-6">
                          <Image
                            src={entity.image ? entity.image : '/ProfileAvatar.jpeg'}
                            alt={entity.business_name}
                            width={30}
                            height={30}
                          />
                        </div>
                      </div>
                      <div className="font-bold text-xs">{entity.business_name}</div>
                    </div>
                  </td>
                  <td>{entity.credential}</td>
                  <td className="text-xs">{new Date(entity.created_at).getFullYear()}</td>
                  <td>
                    <p>{entity.is_enabled ? 'Active' : 'Inactive'}</p>
                  </td>
                 
                    <td>
                      <div className="flex gap-2">
                        <EyeIcon />
                        <BinIcon />
                      </div>
                    </td>
                
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-xs p-4">
                  No companies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}  
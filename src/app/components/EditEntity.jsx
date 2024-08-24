"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const EditEntity = ({ entityId }) => {
    const [formData, setFormData] = useState({
        business_name: '',
        credential: '',
        is_enabled: false,
    });
    const [additionalData, setAdditionalData] = useState({
        industry_type: '',
        number_of_employees: '',
        annual_turnover: '',
        market_value: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false); 
    const router = useRouter();

    useEffect(() => {
        const fetchEntity = async () => {
            const token = localStorage.getItem('token'); // Access inside useEffect
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

                const entities = response.data.data;
                const entity = entities.find(item => item.id === parseInt(entityId, 10));

                if (entity) {
                    setFormData({
                        business_name: entity.business_name || '',
                        credential: entity.credential || '',
                        is_enabled: entity.is_enabled ?? false,
                    });

                    // Fetch additional data from localStorage
                    const storedAdditionalData = localStorage.getItem(`entity_${entityId}_additional_data`);
                    if (storedAdditionalData) {
                        setAdditionalData(JSON.parse(storedAdditionalData));
                    }
                } else {
                    setError('Entity not found');
                }
            } catch (error) {
                setError('Error fetching entity details');
                console.error('Error fetching entity details:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (entityId) {
            fetchEntity(); 
        }
    }, [entityId]);

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleAdditionalDataChange = (e) => {
        const { name, value } = e.target;
        setAdditionalData(prevAdditionalData => ({
            ...prevAdditionalData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        if (!token) {
            setError('No token found');
            return;
        }

        try {
            await axios.patch(
                `${apiUrl}/api_entities/entities/${entityId}/`,
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );

            localStorage.setItem(`entity_${entityId}_additional_data`, JSON.stringify(additionalData));

            setSuccess('Entity updated successfully!');
            setIsEditing(false); // Exit edit mode after successful update
            router.push('/dashboard');
        } catch (error) {
            setError('Error updating entity');
            console.error('Error updating entity:', error);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    
    return (
        <div className="relative flex flex-col h-screen text-gray-700 overflow-visible">
          <div
            className="absolute inset-0 z-0 rounded-lg m-32 h-[80%] shadow-xl"
            style={{
              backgroundImage: "url('/Background1.avif')",
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center', 
            }}
          ></div>
      
          <div className="relative flex items-center justify-center z-10 m-24 h-full">
            <div className="flex flex-col text-white items-center justify-center bg-violet-400 opacity-70 p-8 rounded-lg shadow-lg w-[80%] max-w-lg">
              <div className="text-center text-3xl p-4">
                <h1>{formData.business_name}</h1>
              </div>
      
              {error && <div className="error">{error}</div>}
              {success && <div className="success">{success}</div>}
              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="business_name" className="block">Business Name:</label>
                    <input
                      type="text"
                      id="business_name"
                      name="business_name"
                      value={formData.business_name}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="credential" className="block">Credential:</label>
                    <input
                      type="text"
                      id="credential"
                      name="credential"
                      value={formData.credential}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="is_enabled" className="block">Active:</label>
                    <input
                      type="checkbox"
                      className="toggle"
                      id="is_enabled"
                      name="is_enabled"
                      checked={formData.is_enabled}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Additional fields */}
                  <div>
                    <label htmlFor="industry_type" className="block">Industry Type:</label>
                    <input
                      type="text"
                      id="industry_type"
                      name="industry_type"
                      value={additionalData.industry_type}
                      onChange={handleAdditionalDataChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="number_of_employees" className="block">Number of Employees:</label>
                    <input
                      type="text"
                      id="number_of_employees"
                      name="number_of_employees"
                      value={additionalData.number_of_employees}
                      onChange={handleAdditionalDataChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="annual_turnover" className="block">Annual Turnover:</label>
                    <input
                      type="text"
                      id="annual_turnover"
                      name="annual_turnover"
                      value={additionalData.annual_turnover}
                      onChange={handleAdditionalDataChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="market_value" className="block">Market Value:</label>
                    <input
                      type="text"
                      id="market_value"
                      name="market_value"
                      value={additionalData.market_value}
                      onChange={handleAdditionalDataChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <button className="btn btn-outline btn-sm" type="submit">Update Entity</button>
                  <button className="btn btn-outline btn-sm" type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
              ) : (
                <div>
                  <p><strong>Business Name:</strong> {formData.business_name}</p>
                  <p><strong>Credential:</strong> {formData.credential}</p>
                  <p><strong>Status:</strong> {formData.is_enabled ? 'Enabled' : 'Disabled'}</p>
                  <p><strong>Industry Type:</strong> {additionalData.industry_type}</p>
                  <p><strong>Number of Employees:</strong> {additionalData.number_of_employees}</p>
                  <p><strong>Annual Turnover:</strong> {additionalData.annual_turnover}</p>
                  <p><strong>Market Value:</strong> {additionalData.market_value}</p>
                  <button className="btn btn-outline btn-sm" onClick={() => setIsEditing(true)}>Edit</button>
                </div>
              )}
            </div>
          </div>
        </div>
    );
};

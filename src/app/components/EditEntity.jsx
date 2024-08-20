"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const EditEntity = ({ entityId }) => {
    const [formData, setFormData] = useState({
        business_name: '',
        credential: '',
        is_enabled: false,
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false); 
    const router = useRouter();

    useEffect(() => {
        const fetchEntity = async () => {
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

                const entities = response.data.data;
                const entity = entities.find(item => item.id === parseInt(entityId, 10));

                if (entity) {
                    setFormData({
                        business_name: entity.business_name || '',
                        credential: entity.credential || '',
                        is_enabled: entity.is_enabled ?? false,
                    });
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

        fetchEntity();
    }, [entityId]);

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
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
        <div>
            <h1>Edit Entity</h1>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="business_name">Business Name:</label>
                        <input
                            type="text"
                            id="business_name"
                            name="business_name"
                            value={formData.business_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="credential">Credential:</label>
                        <input
                            type="text"
                            id="credential"
                            name="credential"
                            value={formData.credential}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="is_enabled">Active:</label>
                        <input
                            type="checkbox"
                            className='toggle'
                            id="is_enabled"
                            name="is_enabled"
                            checked={formData.is_enabled}
                            onChange={handleChange}
                        />
                    </div>
                    <button className='btn btn-outline btn-sm' type="submit">Update Entity</button>
                    <button className='btn btn-outline btn-sm' type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <div>
                    <p><strong>Business Name:</strong> {formData.business_name}</p>
                    <p><strong>Credential:</strong> {formData.credential}</p>
                    <p><strong>Status:</strong> {formData.is_enabled ? 'Enabled' : 'Disabled'}</p>
                    <button className='btn btn-outline btn-sm' onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};

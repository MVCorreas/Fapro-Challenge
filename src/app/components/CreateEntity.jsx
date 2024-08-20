"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const CreateEntity = () => {
    const [formData, setFormData] = useState({
        business_name: '',
        credential: '',
        additional_field1: '', 
        additional_field2: '', 
    });
    const [status, setStatus] = useState({ error: '', success: '' });
    const router = useRouter();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
      
        if (!token) {
            setStatus({ error: 'No token found', success: '' });
            return;
        }
      
        try {
            const response = await axios.post(
                `${apiUrl}/api_entities/entities/`,
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );
            
            setStatus({
                error: '',
                success: 'Entity created successfully!',
            });
            
            const createdEntityId = response.data.id;
            router.push(`/dashboard?id=${createdEntityId}`);
        } catch (error) {
            setStatus({
                error: 'Error creating entity',
                success: '',
            });
            console.error('Error creating entity:', error);
        }
    };
    
    return (
        <div>
            <h1>Create Entity</h1>
            {status.error && <div className="error">{status.error}</div>}
            {status.success && <div className="success">{status.success}</div>}
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <div key={key}>
                        <label htmlFor={key}>{key.replace('_', ' ').toUpperCase()}:</label>
                        <input
                            type="text"
                            id={key}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            required={key === 'business_name' || key === 'credential'}
                        />
                    </div>
                ))}
                <button type="submit">Create Entity</button>
            </form>
        </div>
    );
};

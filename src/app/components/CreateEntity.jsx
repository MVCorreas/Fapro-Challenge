'use client';

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
      const [error, setError] = useState('');
      const [success, setSuccess] = useState('');
      const router = useRouter();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        
        if (!token) {
          setError('No token found');
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
      
          setSuccess('Entity created successfully!');
          router.push('/?created=true'); 
        } catch (error) {
          setError('Error creating entity');
          console.error('Error creating entity:', error);
        }
      };
      
    
      return (
        <div>
          <h1>Create Entity</h1>
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
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
            {/* Add additional fields here */}
            <div>
              <label htmlFor="additional_field1">Additional Field 1:</label>
              <input
                type="text"
                id="additional_field1"
                name="additional_field1"
                value={formData.additional_field1}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="additional_field2">Additional Field 2:</label>
              <input
                type="text"
                id="additional_field2"
                name="additional_field2"
                value={formData.additional_field2}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Create Entity</button>
          </form>
        </div>
      );
    
    
}
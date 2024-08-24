"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MainButton } from "./Buttons";
import { CloseIcon } from "../../../public/Icons";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const CreateEntity = () => {
  const [formData, setFormData] = useState({
    business_name: "",
    credential: "",
    additional_field1: "",
    additional_field2: "",
  });
  const [status, setStatus] = useState({ error: "", success: "" });
  const [errors, setErrors] = useState({});
  const [dashboardId, setDashboardId] = useState(null); // State to store the dashboard ID
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (formData.business_name.length > 50) {
      newErrors.business_name =
        "Business name cannot be longer than 50 characters";
    }
    if (!/^\d{6}$/.test(formData.credential)) {
      newErrors.credential = "Credential must be exactly 6 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const token = localStorage.getItem("token"); // Access inside useEffect

      if (!token) {
        setStatus({ error: "No token found", success: "" });
        return;
      }

      const response = await axios.post(
        `${apiUrl}/api_entities/entities/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      setStatus({
        error: "",
        success: "Entity created successfully!",
      });

      const createdEntityId = response.data.id;
      setDashboardId(createdEntityId); // Store the created entity ID in state
      router.push(`/dashboard?id=${createdEntityId}`);
    } catch (error) {
      setStatus({
        error: "Error creating entity",
        success: "",
      });
      console.error("Error creating entity:", error);
    }
  };

  const handleGoBack = () => {
    if (dashboardId) {
      router.push(`/dashboard?id=${dashboardId}`);
    }
  };

  return (
    <div className="relative flex flex-col max-h-fit z-10 text-gray-700 overflow-visible">
      <div className="absolute inset-0 bg-white opacity-40 z-0 rounded-lg m-32 shadow-xl"></div>
      <div className="relative p-16 items-center z-10 m-24">
      <button
            onClick={() => handleGoBack()}
           className="absolute top-12 right-20 bg-violet-400 hover:bg-violet-700 p-4 rounded-full"
          >
            <CloseIcon />
          </button>
          <br/>
        <p className="text-3xl text-violet-700 text-center mt-4">ADD A NEW ENTITY</p>
       
        <div
          className="min-w-sm mx-auto card bg-violet-400 bg-opacity-30 m-4 text-white p-10 mt-32 md:mt-32 lg:mt-24 items-center"
          style={{ borderTopLeftRadius: "20%" }}
        >
        
          <div className="card-body w-[85%]">
           
            {status.error && <div className="error">{status.error}</div>}
            {status.success && <div className="success">{status.success}</div>}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="my-2">
                <label className="label" htmlFor="business_name">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business_name"
                  value={formData.business_name}
                  onChange={handleChange}
                  className="input input-bordered w-full text-black rounded-full"
                  required
                />
                {errors.business_name && (
                  <div className="text-error">{errors.business_name}</div>
                )}
              </div>
              <div className="my-2">
                <label className="label" htmlFor="credential">
                  Credential
                </label>
                <input
                  type="text"
                  name="credential"
                  value={formData.credential}
                  onChange={handleChange}
                  className="input input-bordered w-full text-black rounded-full"
                  required
                />
                {errors.credential && (
                  <div className="text-error">{errors.credential}</div>
                )}
              </div>
              <div className="my-2">
                <label className="label" htmlFor="additional_field1">
                  Field 1
                </label>
                <input
                  type="text"
                  name="additional_field1"
                  value={formData.additional_field1}
                  onChange={handleChange}
                  className="input input-bordered w-full text-black rounded-full"
                />
              </div>
              <div className="my-2">
                <label className="label" htmlFor="additional_field2">
                  Field 2
                </label>
                <input
                  type="text"
                  name="additional_field2"
                  value={formData.additional_field2}
                  onChange={handleChange}
                  className="input input-bordered w-full text-black rounded-full"
                />
              </div>
              <div className="flex justify-center p-2">
                <MainButton name="Add Company" onClick={handleSubmit} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

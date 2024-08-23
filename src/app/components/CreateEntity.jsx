"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { NavBarDashboard } from "./NavBar";
import { LeftPanel } from "./LeftPanel";
import { MainButton } from "./Buttons";

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

    const token = localStorage.getItem("token");

    if (!token) {
      setStatus({ error: "No token found", success: "" });
      return;
    }

    try {
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
      router.push(`/dashboard?id=${createdEntityId}`);
    } catch (error) {
      setStatus({
        error: "Error creating entity",
        success: "",
      });
      console.error("Error creating entity:", error);
    }
  };

  return (
    <div className="relative flex flex-col max-h-fit z-10 text-gray-700 overflow-visible">
      <div
        className="absolute inset-0 bg-amber-900 opacity-40 z-0 rounded-lg m-32"
   
      ></div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center z-10 m-24"  >
        <div className="min-w-sm mx-auto card bg-white bg-opacity-30 m-4 text-white p-10 mt-32 md:mt-32 lg:mt-24 items-center " style={{ borderTopLeftRadius: "20%" }}>
          <div className="card-body">
            <h1 className="card-title text-2xl justify-center">
              ADD A NEW ENTITY
            </h1>
            {status.error && <div className="error">{status.error}</div>}
            {status.success && <div className="success">{status.success}</div>}
            <form onSubmit={handleSubmit}>
              <div className="my-2">
                <label className="label" htmlFor="business_name">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business_name"
                  value={formData.business_name}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-sm text-black rounded-full"
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
                  className="input input-bordered w-full max-w-sm text-black rounded-full"
                  required
                />
                {errors.credential && (
                  <div className="text-error">{errors.credential}</div>
                )}
              </div>
              <div className="my-2">
                <label className="label" htmlFor="field1">
                  Field 1
                </label>
                <input
                  type="text"
                  name="field1"
                  value={formData.field1}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-sm text-black rounded-full"
                />
              </div>
              <div className="my-2">
                <label className="label" htmlFor="field2">
                  Field 2
                </label>
                <input
                  type="text"
                  name="field2"
                  value={formData.field2}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-sm text-black rounded-full"
                />
              </div>
              <div className="flex justify-center">
                <MainButton name="Add Company" onClick={handleSubmit} />
              </div>
            </form>
          </div>
          
        </div>
        <div className="flex flex-col w-full p-8 bg-zinc-900 bg-opacity-80 rounded-lg h-full justify-center" style={{ borderTopLeftRadius: '30%' }}>
          <p className="text-6xl font-light text-purple-300 mb-12 ">Contact Us</p>
          <p className="text-4xl leading-8 text-white mb-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit error architecto eveniet corporis vel! 
          </p>

        </div>
      </div>
    </div>
  );
};

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
    industry_type: "",
    number_of_employees: "",
    annual_turnover: "",
    market_value: "",
  });
  const [status, setStatus] = useState({ error: "", success: "" });
  const [errors, setErrors] = useState({});
  const [dashboardId, setDashboardId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setStatus({ error: "No token found", success: "" });
    }
  }, []);

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
      const token = localStorage.getItem("token");

      if (!token) {
        setStatus({ error: "No token found", success: "" });
        return;
      }

      const { business_name, credential } = formData;

      const response = await axios.post(
        `${apiUrl}/api_entities/entities/`,
        { business_name, credential },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const createdEntityId = response.data.data.id;
      if (createdEntityId) {
        setDashboardId(createdEntityId);

        // Store additional fields in localStorage
        localStorage.setItem(
          `entity_${createdEntityId}_additional_data`,
          JSON.stringify({
            industry_type: formData.industry_type,
            number_of_employees: formData.number_of_employees,
            annual_turnover: formData.annual_turnover,
            market_value: formData.market_value,
          })
        );

        setStatus({
          error: "",
          success: "Entity created successfully!",
        });
        router.push(`/dashboard?id=${createdEntityId}`);
      } else {
        setStatus({ error: "Entity ID not found in response", success: "" });
      }
    } catch (error) {
      setStatus({
        error: "Error creating entity",
        success: "",
      });
      console.error("Error creating entity:", error);
    }
  };

  const handleGoBack = () => {
    router.push("/dashboard");
  };

  return (
    <div className="relative flex flex-col max-h-fit z-10 text-gray-700 overflow-visible">
      <div className="absolute inset-0 bg-white opacity-40 z-0 rounded-lg m-32 h-[80%] shadow-xl"></div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center z-10 m-24">
        <button
          onClick={handleGoBack}
          className="absolute top-12 right-12 bg-violet-400 hover:bg-violet-700 p-4 rounded-full flex items-center justify-center"
        >
          <CloseIcon />
        </button>

        <p className="text-3xl text-violet-700 text-center mt-8 col-span-full">
          ADD A NEW ENTITY
        </p>
        <div
          className="min-w-[85%] mx-auto card bg-violet-400 bg-opacity-30 text-white p-10 mt-12 rounded-lg shadow-md col-span-full md:col-span-2"
          style={{ borderTopLeftRadius: "20%" }}
        >
          <div className="card-body">
            {status.error && <div className="text-red-500">{status.error}</div>}
            {status.success && (
              <div className="text-green-500">{status.success}</div>
            )}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="my-2">
                <label className="label" htmlFor="business_name">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business_name"
                  value={formData.business_name}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs text-black rounded-full"
                  required
                />
                {errors.business_name && (
                  <div className="text-red-500">{errors.business_name}</div>
                )}
              </div>
              <div className="my-2">
                <label className="label" htmlFor="credential">
                  Corporate ID Number
                </label>
                <input
                  type="text"
                  name="credential"
                  value={formData.credential}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs text-black rounded-full"
                  required
                />
                {errors.credential && (
                  <div className="text-red-500">{errors.credential}</div>
                )}
              </div>
              <div className="my-2">
                <label className="label" htmlFor="industry_type">
                  Type of Industry
                </label>
                <select
                  name="industry_type"
                  value={formData.industry_type}
                  onChange={handleChange}
                  className="select w-full max-w-xs text-black"
                  required
                >
                  <option disabled value="">
                    Select Type of Industry
                  </option>
                  <option>Finance</option>
                  <option>Tourism</option>
                  <option>Construction</option>
                  <option>Transport</option>
                  <option>Insurance</option>
                </select>
              </div>
              <div className="my-2">
                <label className="label" htmlFor="number_of_employees">
                  Number of Employees
                </label>
                <input
                  type="text"
                  name="number_of_employees"
                  value={formData.number_of_employees}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs text-black rounded-full"
                />
              </div>
              <div className="my-2">
                <label className="label" htmlFor="annual_turnover">
                  Annual Turnover
                </label>
                <input
                  type="text"
                  name="annual_turnover"
                  value={formData.annual_turnover}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs text-black rounded-full"
                />
              </div>
              <div className="my-2">
                <label className="label" htmlFor="market_value">
                  Market Value
                </label>
                <input
                  type="text"
                  name="market_value"
                  value={formData.market_value}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs text-black rounded-full"
                />
              </div>
              <div className="col-span-1 md:col-span-2 flex justify-center p-2">
                <MainButton name="Add Company" onClick={handleSubmit} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

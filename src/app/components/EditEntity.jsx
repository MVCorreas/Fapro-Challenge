"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { EditIcon, CloseIcon } from "../../../public/Icons";
import { MainButton } from "./Buttons";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const EditEntity = ({ entityId }) => {
  const [formData, setFormData] = useState({
    business_name: "",
    credential: "",
    is_enabled: false,
  });
  const [additionalData, setAdditionalData] = useState({
    industry_type: "",
    number_of_employees: "",
    annual_turnover: "",
    market_value: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchEntity = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found");
        return;
      }

      try {
        const response = await axios.get(`${apiUrl}/api_entities/entities/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        const entities = response.data.data;
        const entity = entities.find(
          (item) => item.id === parseInt(entityId, 10) //parseINT, turns strings into integers, 10 is the radix that inteprets strings as decimals
        );

        if (entity) {
          setFormData({
            business_name: entity.business_name || "",
            credential: entity.credential || "",
            is_enabled: entity.is_enabled ?? false,
          });

          const storedAdditionalData = localStorage.getItem(
            `entity_${entityId}_additional_data`
          );
          if (storedAdditionalData) {
            setAdditionalData(JSON.parse(storedAdditionalData));
          }
        } else {
          setError("Entity not found");
        }
      } catch (error) {
        setError("Error fetching entity details");
        console.error("Error fetching entity details:", error);
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAdditionalDataChange = (e) => {
    const { name, value } = e.target;
    setAdditionalData((prevAdditionalData) => ({
      ...prevAdditionalData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No token found");
      return;
    }

    try {
      await axios.patch(
        `${apiUrl}/api_entities/entities/${entityId}/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem(
        `entity_${entityId}_additional_data`,
        JSON.stringify(additionalData)
      );

      setSuccess("Entity updated successfully!");
      setIsEditing(false);
      router.push("/dashboard");
    } catch (error) {
      setError("Error updating entity");
      console.error("Error updating entity:", error);
    }
  };

  const handleGoBack = () => {
    router.push("/dashboard");
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="relative flex flex-col h-screen text-gray-700 overflow-hidden">
      <div
       className="absolute inset-0 opacity-80 z-0 min-h-screen"
       style={{
         backgroundImage: "url('/Assets/WhiteDsk.jpg')",
         backgroundSize: "cover",
         backgroundBlendMode: "overlay",
         backgroundRepeat: "no-repeat",
       }}
     ></div>
       <div className="absolute inset-0 z-0 rounded-lg m-32 h-[80%] shadow-2xl bg-light-teal opacity-20"></div>
       
      <div className="relative flex items-center justify-center z-10 m-24 h-full">
      <div className="absolute top-12 right-12 z-20 flex gap-2">
            {!isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2 w-24 h-12 flex items-center justify-center bg-dark-pink hover:bg-light-pink rounded-full shadow-md"
                >
                  <EditIcon className="w-6 h-6 text-black" />
                </button>
                <button
                  onClick={handleGoBack}
                  className="p-2 w-24 h-12 flex items-center justify-center bg-dark-pink hover:bg-light-pink rounded-full shadow-md"
                >
                  <CloseIcon className="w-6 h-6 text-black" />
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(false)}
                className="p-2 w-24 h-12 flex items-center justify-center bg-dark-pink hover:bg-light-pink rounded-full shadow-md"
              >
                <CloseIcon className="w-6 h-6 text-black" />
              </button>
            )}
          </div>

      <div className="flex flex-col text-white items-center justify-center bg-dark-teal opacity-80 p-8 rounded-lg shadow-lg max-w-full w-[65%] max-h-full h-[75%] overflow-auto relative top-6">

          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center text-3xl p-4 z-10 mt-4">
            <h1>{formData.business_name}</h1>
          </div>
         
          <div className="mt-16 w-full flex justify-center opacity-100 mt-[20%]">
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
            {isEditing ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 w-full max-w-md mx-auto"
              >
                <div>
                  <label htmlFor="business_name" className="block">
                    Business Name:
                  </label>
                  <input
                    type="text"
                    id="business_name"
                    name="business_name"
                    value={formData.business_name}
                    onChange={handleChange}
                    required
                    className="input input-bordered w-full text-black rounded-full"
                  />
                </div>
                <div>
                  <label htmlFor="credential" className="block">
                    Credential:
                  </label>
                  <input
                    type="text"
                    id="credential"
                    name="credential"
                    value={formData.credential}
                    onChange={handleChange}
                    required
                    className="input input-bordered w-full text-black rounded-full"
                  />
                </div>
                <div>
                  <label htmlFor="is_enabled" className="block">
                    Active:
                  </label>
                  <input
                    type="checkbox"
                    className="toggle"
                    id="is_enabled"
                    name="is_enabled"
                    checked={formData.is_enabled}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="industry_type" className="block">
                    Industry Type:
                  </label>
                  <select
                    id="industry_type"
                    name="industry_type"
                    value={additionalData.industry_type}
                    onChange={handleAdditionalDataChange}
                    className="select w-full text-black rounded-full"
                  >
                    <option value="" disabled>
                      Industry Type
                    </option>
                    <option value="Finance">Finance</option>
                    <option value="Tourism">Tourism</option>
                    <option value="Construction">Construction</option>
                    <option value="Transport">Transport</option>
                    <option value="Insurance">Insurance</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="number_of_employees" className="block">
                    Number of Employees:
                  </label>
                  <input
                    type="text"
                    id="number_of_employees"
                    name="number_of_employees"
                    value={additionalData.number_of_employees}
                    onChange={handleAdditionalDataChange}
                    className="input input-bordered w-full text-black rounded-full"
                  />
                </div>
                <div>
                  <label htmlFor="annual_turnover" className="block">
                    Annual Turnover:
                  </label>
                  <input
                    type="text"
                    id="annual_turnover"
                    name="annual_turnover"
                    value={additionalData.annual_turnover}
                    onChange={handleAdditionalDataChange}
                    className="input input-bordered w-full text-black rounded-full"
                  />
                </div>
                <div>
                  <label htmlFor="market_value" className="block">
                    Market Value:
                  </label>
                  <input
                    type="text"
                    id="market_value"
                    name="market_value"
                    value={additionalData.market_value}
                    onChange={handleAdditionalDataChange}
                    className="input input-bordered w-full text-black rounded-full"
                  />
                </div>
                <div className="my-4 flex justify-center">
                  <MainButton name="Update Entity" />
                </div>
              </form>
            ) : (
              <div className="text-xl space-y-4">
                <p className="font-light text-2xl">
                  <strong>Business Name:</strong> {formData.business_name}
                </p>
                <p className="font-light text-2xl">
                  <strong>Credential:</strong> {formData.credential}
                </p>
                <p className="font-light text-2xl">
                  <strong>Status:</strong>{" "}
                  {formData.is_enabled ? "Enabled" : "Disabled"}
                </p>
                <p className="font-light text-2xl">
                  <strong>Industry Type:</strong> {additionalData.industry_type}
                </p>
                <p className="font-light text-2xl">
                  <strong>Number of Employees:</strong>{" "}
                  {additionalData.number_of_employees}
                </p>
                <p className="font-light text-2xl">
                  <strong>Annual Turnover:</strong>{" "}
                  {additionalData.annual_turnover}
                </p>
                <p className="font-light text-2xl">
                  <strong>Market Value:</strong> {additionalData.market_value}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

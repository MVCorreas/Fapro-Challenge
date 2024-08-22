"use client"
import { useState } from "react";
import Image from "next/image";
import { EyeIcon, BinIcon, DownloadIcon } from "../../../public/Icons";

const tableData = [
  {
    id: 1,
    image: "/Product1.jpeg",
    name: "Men Tracking Shoes",
    price: 99,
    date: "10 Apr 24",
    status: "Delivered",
    action: true,
  },
  {
    id: 2,
    image: "/Product2.webp",
    name: "Cocooil Body Oil",
    price: 99,
    date: "07 Apr 24",
    status: "On Going",
    action: true,
  },
  {
    id: 3,
    image: "/Product3.jpeg",
    name: "Freeze Air",
    price: 99,
    date: "02 Apr 24",
    status: "Delivered",
    action: true,
  },
  {
    id: 4,
    image: "/Product4.jpg",
    name: "Ladies Shoes",
    price: 99,
    date: "08 Apr 24",
    status: "Cancelled",
    action: true,
  },
  {
    id: 5,
    image: "/Product3.jpeg",
    name: "Freeze Air",
    price: 99,
    date: "02 Apr 24",
    status: "Delivered",
    action: true,
  },
  {
    id: 6,
    image: "/Product4.jpg",
    name: "Ladies Shoes",
    price: 99,
    date: "08 Apr 24",
    status: "Cancelled",
    action: true,
  },
  {
    id: 7,
    image: "/Product3.jpeg",
    name: "Freeze Air",
    price: 99,
    date: "02 Apr 24",
    status: "Delivered",
    action: true,
  },
  {
    id: 8,
    image: "/Product4.jpg",
    name: "Ladies Shoes",
    price: 99,
    date: "08 Apr 24",
    status: "Cancelled",
    action: true,
  },
];

export const TableContent = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

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
        <div className="stat-desc font-semibold text-black">Recent Orders</div>
        <button className="btn my-1 text-xs btn-sm">
          <DownloadIcon />
          Report
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
                    checked={selectedProducts.length === tableData.length}
                  />
                </label>
              </th>
              <th>Product</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(({ id, image, name, price, date, status, action }) => (
              <tr key={id}>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={selectedProducts.includes(id)}
                      onChange={() => handleSelectProduct(id)}
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-6 w-6">
                        <Image src={image} alt={name} width={30} height={30} />
                      </div>
                    </div>
                    <div className="font-bold text-xs">{name}</div>
                  </div>
                </td>
                <td>${price}</td>
                <td className="text-xs">{date}</td>
                <td>
                  <button
                    className={`btn btn-xs p-1 ${
                      status === "Delivered"
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-500"
                        : status === "On Going"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-400/20 dark:text-blue-500"
                        : "bg-red-100 text-red-800 dark:bg-red-400/20 dark:text-red-500"
                    }`}
                  >
                    {status}
                  </button>
                </td>
                {action && (
                  <td>
                    <div className="flex gap-2">
                      <EyeIcon />
                      <BinIcon />
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
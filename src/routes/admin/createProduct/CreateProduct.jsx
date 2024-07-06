import React, { useEffect, useState } from "react";
import { useCreateProductMutation } from "../../../context/api/productApi";
import { useGetInputValue } from "../../../hooks/useGetInputValue";
import "./CreateProduct.scss";
let initalState = {
  title: "",
  price: "",
  url: [],
  category: "",
  description: "",
};

const CreateProduct = () => {
  const { formData, handleChange, setFormData } = useGetInputValue(initalState);
  let [createProduct, { isLoading, isSuccess }] = useCreateProductMutation();

  useEffect(() => {
    if (isSuccess) {
      setFormData(initalState);
    }
  }, [isSuccess]);
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.url = formData.url.split("\n").filter((i) => i.trim());
    createProduct(formData);
  };

  return (
    <div className="createProduct">
      <h2>CreateProduct</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input
            required
            value={formData.title}
            onChange={handleChange}
            type="text"
            name="title"
            id="title"
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            value={formData.price}
            onChange={handleChange}
            type="number"
            name="price"
            id="price"
            required
          />
        </label>

        <label htmlFor="category">
          <select name="category" id="category">
            <option value={formData.category}></option>
          </select>
        </label>

        <label htmlFor="url">
          url
          <textarea
            name="url"
            value={formData.url}
            onChange={handleChange}
            id="url"
          ></textarea>
        </label>

        <label htmlFor="description">
          description
          <input
            value={formData.description}
            onChange={handleChange}
            type="text"
            name="description"
            id="description"
            required
          />
        </label>

        <button disabled={isLoading}>
          {isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;

"use client";

import React, { useContext, useEffect, useState } from "react";
import images from "@/utils/images";
import { StepperContext } from "../Stepper";
import { Box } from "@mui/material";
import Button from "../Button";
import Image from "next/image";
import { fetchProducts } from "@/api/fetchProducts";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { updateProducts } from "@/redux/features/UserExperienceSlice";

export type Product = {
  id: string;
  image: string;
  name: string;
};

const Products = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<Array<Product>>([]);
  const [searchedProducts, setSearchedProducts] = useState<Array<Product>>([]);
  const [products, setProducts] = useState<Array<Product>>([]);
  const [currentProducts, setCurrentProducts] = useState<Array<Product>>([]);
  const { products: allSelectedProducts } = useAppSelector(
    (state) => state.userExperience
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      const selectedNames = allSelectedProducts.map((p) => p.name);
      const filteredData = data.filter(
        (product) => !selectedNames.includes(product.name)
      );

      setProducts(data);
      setSearchedProducts(filteredData);
      setCurrentProducts(filteredData);
      setSelectedProducts(allSelectedProducts);
    };
    getProducts();
  }, []);

  const handleRemove = (index: number) => {
    const updatedSelected = selectedProducts.filter((_, i) => i !== index);
    setSelectedProducts(updatedSelected);
  };

  function searchProducts(searchTerm: string) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filter = currentProducts.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setSearchedProducts(filter);
  }

  useEffect(() => {
    if (searchValue) {
      searchProducts(searchValue);
    } else {
      setSearchedProducts(currentProducts);
    }
  }, [searchValue, currentProducts]);

  useEffect(() => {
    const selectedNames = selectedProducts.map((p) => p.name);
    const filtered = products.filter(
      (product) => !selectedNames.includes(product.name)
    );
    setSearchedProducts(filtered);
    setCurrentProducts(filtered);
  }, [selectedProducts, products]);

  useEffect(() => {
    dispatch(updateProducts(selectedProducts));
  }, [selectedProducts, dispatch]);

  const { handleBack, handleNext } = useContext(StepperContext);

  return (
    <div className="w-full h-full flex flex-col place-content-between items-center">
      <div className="w-4/5 h-[80%] flex flex-col justify-start items-center ">
        <h2 className="text-xl font-semibold">
          Select 3+ products that you use
        </h2>
        <p className="my-3">Build your tech stack from the get go.</p>
        {/* Search input */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none w-full">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
            placeholder="Search products"
            required
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="w-full my-3 overflow-y-auto scrollbar-hidden">
          {selectedProducts.length > 0 && (
            <div className="w-full flex flex-wrap gap-2 items-center my-3">
              {selectedProducts.map((product, index) => (
                <div
                  key={index}
                  className="p-2 flex justify-center items-center gap-2 border border-gray-300 rounded-lg bg-gray-50"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={20}
                    height={20}
                    className="rounded"
                  />
                  <span className="text-sm">{product.name}</span>
                  <Image
                    src={images.closeIcon}
                    alt="close"
                    onClick={() => handleRemove(index)}
                    className="cursor-pointer"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="w-full my-4">
            <p>Products</p>
            <div>
              {searchedProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between my-4 pr-5"
                >
                  <div className="flex items-center justify-start gap-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={30}
                      height={30}
                      className="object-cover rounded"
                    />
                    <span>{product.name}</span>
                  </div>
                  <Image
                    src={images.addCircle}
                    alt="add circle"
                    onClick={() =>
                      setSelectedProducts((prev) => [...prev, product])
                    }
                    className="cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          borderTop: "1px solid #ECECF1",
          width: "100%",
        }}
      >
        <Button
          handleClick={handleBack}
          text="Back"
          background="bg-white"
          className="text-light-purple font-medium"
        />
        <Button
          text={"Next"}
          background=""
          handleClick={handleNext}
          disabled={allSelectedProducts.length < 3}
          className="disabled:bg-light-purple/20 disabled:text-light-purple/50 bg-light-purple text-white"
        />
      </Box>
    </div>
  );
};

export default Products;

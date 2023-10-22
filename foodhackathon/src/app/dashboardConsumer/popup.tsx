"use client"

import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface PopupFormProps {
    isOpen: boolean;
    closePopup: () => void;
    onSubmit: (data: any) => void; // Adjust 'any' to the expected data type if known
  }

  const PopupForm: React.FC<PopupFormProps> = ({ isOpen, closePopup, onSubmit }) => {
    const { handleSubmit, control } = useForm();

  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
          <h1 className="text-3xl text-center pb-10">Contract Information</h1>  
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="input1"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="mb-4 p-2 w-full border rounded"
                  placeholder="Product Type"
                />
              )}
            />

            <Controller
              name="input2"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="mb-4 p-2 w-1/2 border rounded"
                  placeholder="Product Quantity"
                />
              )}
            />

            <Controller
            name="input3"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <input
                {...field}
                className="mb-4 p-2 w-1/2 border rounded mr-0"
                placeholder="Payout"
                />
            )}
            /> 

            <Controller
              name="input4"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="mb-4 p-2 w-full border rounded"
                  placeholder="Date Required"
                />
              )}
            />

            <Controller
              name="input5"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="mb-4 p-2 w-full border rounded"
                  placeholder="E-Signature"
                />
              )}
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Submit Contract Request
            </button>
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default PopupForm;

"use client"

import React, { useState, useEffect } from 'react';
import Button from './button'; // Import the Button component
import PopupForm from './popup'; // Import the PopupForm component
import { Payment, columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
  //         contractName: string
  //   value: String 
  //   vendor: string
  //   dateAccepted: String 
  //   completedOrTerminatedDate: String
  //   status: "Accepted" | "Pending" | "Complete" | "Terminated" 
        contractName: "Banana",
        value: "$3 M",
        status: "Pending",
        dateAccepted: "7/10/23",
        completedOrTerminatedDate: "8/10/23",
        vendor: "uncle Basheer"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          status: "Complete",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          vendor: "uncle bob"
      },
      
    ]
  }
  

export default function DemoPage() {
  const [data, setData] = useState<Payment[] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const onSubmit = (formData: Payment) => {
    // Handle the form data (e.g., send it to a server, update state)
    // You can add logic to update the data array with the new payment data here
    // Example: setData([...data, formData]);
    closePopup();
  };

  useEffect(() => {
    async function fetchData() {
      const paymentData = await getData();
      setData(paymentData);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="border-b-2 border-red-900 mb-4 pb-2 bg-white">
          <h1 className="text-3xl font-bold mb-2">Foodify</h1>
          <p className="text-white-600">Consumer Interface</p>
        </div>
        <div className="container mx-auto py-2 font-thin text-justify bg-white">
          {data ? (
            <DataTable columns={columns} data={data} />
          ) : (
            <p>Loading data...</p>
          )}
        </div>
        <div className="container mx-auto py-5">
            <Button onClick={openPopup} />
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <PopupForm isOpen={isPopupOpen} closePopup={closePopup} onSubmit={onSubmit} />
        </div>
      )}
    </>
  );
}

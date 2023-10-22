"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import PopupForm from "./popup"; // Import the PopupForm component
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts";
import { UserButton } from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

async function getData() {
  const getFood = await getDocs(collection(db, "contracts"));
  return getFood;
}

export default function DemoPage() {
  const [number, setNumber] = useState(2);
  const [data, setData] = useState<any | null>(null);
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
      const querySnap = await getData();
      const contractsArray = querySnap.docs.map((doc) => doc.data());
      setNumber(3);
      setData(contractsArray);
    }

    fetchData();
  }, []);
  const data1 = [
    {
      revenue: 10400,
      subscription: 240,
    },
    {
      revenue: 14405,
      subscription: 300,
    },
    {
      revenue: 9400,
      subscription: 200,
    },
    {
      revenue: 8200,
      subscription: 278,
    },
    {
      revenue: 7000,
      subscription: 189,
    },
    {
      revenue: 9600,
      subscription: 239,
    },
    {
      revenue: 11244,
      subscription: 278,
    },
    {
      revenue: 26475,
      subscription: 189,
    },
  ];

  return (
    <>
      <div className="bg-white h-screen">
        <div className="border-b-2 border-red-900 mb-4 pb-2  bg-white">
          <h1 className="text-3xl font-bold mb-2">Foodify</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className="flex mx-14 mt-6">
          <div className="flex-1">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Corn Commodity Pricing
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$495.50</div>
                  <p className="text-xs text-muted-foreground">
                    +4.26% from last month
                  </p>
                  <div className="h-[80px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={data1}
                        margin={{
                          top: 5,
                          right: 10,
                          left: 10,
                          bottom: 0,
                        }}
                      >
                        <Line
                          type="monotone"
                          strokeWidth={2}
                          dataKey="revenue"
                          activeDot={{
                            r: 6,
                            style: {
                              fill: "var(--theme-primary)",
                              opacity: 0.25,
                            },
                          }}
                          stroke="#000000"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="-my-4">
                    <h1 className="text-center font-extrabold text-2xl ">
                      <span className="font-extrabold text-4xl">.</span> . .
                    </h1>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Contract Views
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+1350</div>
                  <p className="text-xs text-muted-foreground">
                    +99.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Transacted Contracts
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">16</div>
                  <p className="text-xs text-muted-foreground">
                    +2 from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Contracts in Progress
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{number}</div>
                  <p className="text-xs text-muted-foreground">
                    2 finished last month
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="my-6 mx-14 py-2 font-thin text-justify bg-white">
          <Card>
            {data ? (
              <DataTable columns={columns} data={data} />
            ) : (
              <p>Loading data...</p>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}

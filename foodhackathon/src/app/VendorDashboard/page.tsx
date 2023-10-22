"use client";
import Contracts from "./components/contracts";
import { InteractContract } from "./components/interactcontract";
import { MetricContract } from "./components/metric";
import { PriceContract } from "./components/price";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTableBrowsing } from "./components/data-tableBrowsing";
import { DataTableCurrent } from "./components/data-tableCurrent";
import { columns } from "./components/columns";

import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";

async function getData() {
  const q1 = query(collection(db, "contracts"), where("left", "==", true));
  const getFood = await getDocs(q1);
  return getFood;
}

async function getData1() {
  const q1 = query(collection(db, "contracts"), where("left", "==", false));
  const getFood = await getDocs(q1);
  return getFood;
}

export default function DemoPage() {
  const [data, setData] = useState<any | null>(null);
  const [dataRight, setDataRight] = useState<any | null>(null);
  useEffect(() => {
    async function fetchData() {
      const querySnap = await getData1();
      const contractsArray = querySnap.docs.map((doc) => doc.data());
      setData(contractsArray);
      const querySnap1 = await getData();
      const contractsArray1 = querySnap1.docs.map((doc) => doc.data());
      setDataRight(contractsArray1);
    }

    fetchData();
  }, []);
  console.log(123);
  console.log(data);

  return (
    <>
      {/* <div className="text-3xl mx-auto">
            <h1 className="container">
                Foodify
            </h1>
        </div> */}
      <div className="bg-white">
        <div className="border-gray-200 mb-6 pb-2 bg-white border-b-2">
          <h1 className="relative z-20 flex items-center py-3 text-2xl ml-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Foodify
          </h1>
          {/* <h1 className="text-3xl mt-4 mb-1 text-gray-600 font-serif text-center">Foodify</h1> */}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="w-3/4  ml-24 ">
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
              <div className="-my-4">
                <h1 className="text-center font-extrabold text-2xl "></h1>
              </div>
            </CardContent>
          </Card>
          <Card className="w-3/4 ml-16">
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
          <Card className="w-3/4 ml-10">
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
          <Card className="w-3/4">
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
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                3 completed next month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flow-root py-5">
          <Card className="container ml-24 font-thin text-justify bg-white w-7/12 float-left ">
            {data ? (
              <DataTableBrowsing columns={columns} data={data} />
            ) : (
              <p>Loading data...</p>
            )}
          </Card>
          <Card className="container mr-24 font-thin text-justify bg-white w-1/4 float-right">
            {dataRight ? (
              <DataTableCurrent columns={columns} data={dataRight} />
            ) : (
              <p>Loading data...</p>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}

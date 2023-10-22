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
  } from "@/components/ui/card"

import { PaymentCurrent, columnCurrent } from "./components/columnCurrent";
import { PaymentBrowsing, columnBrowsing } from "./components/columnBrowsing";
import { DataTableCurrent } from "./components/data-tableCurrent";
import { DataTableBrowsing } from "./components/data-tableBrowsing";


async function getDataCurrent(): Promise<PaymentCurrent[]> {
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
      cropType: "Banana",
      productQuantity: "10",
      dateAccepted: "7/10/23",
      completedOrTerminatedDate: "8/10/23",
      buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        cropType: "Apple",
        productQuantity: "10",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },   
  ]
}

async function getDataBrowsing(): Promise<PaymentBrowsing[]> {
    // Fetch data from your API here.
    return [
      {
        contractName: "Banana",
        value: "$3 M",
        dateAccepted: "7/10/23",
        completedOrTerminatedDate: "8/10/23",
        buyer: "Rich Man 1",
        cropType: "Bananas", 
        productQuantity: "1000"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          buyer: "Rich Man 1",
          cropType: "Apples", 
          productQuantity: "1200"
      },
      {
        contractName: "Banana",
        value: "$3 M",
        dateAccepted: "7/10/23",
        completedOrTerminatedDate: "8/10/23",
        buyer: "Rich Man 1",
        cropType: "Bananas", 
        productQuantity: "1000"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          buyer: "Rich Man 1",
          cropType: "Apples", 
          productQuantity: "1200"
      },
      {
        contractName: "Banana",
        value: "$3 M",
        dateAccepted: "7/10/23",
        completedOrTerminatedDate: "8/10/23",
        buyer: "Rich Man 1",
        cropType: "Bananas", 
        productQuantity: "1000"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          buyer: "Rich Man 1",
          cropType: "Apples", 
          productQuantity: "1200"
      },
      {
        contractName: "Banana",
        value: "$3 M",
        dateAccepted: "7/10/23",
        completedOrTerminatedDate: "8/10/23",
        buyer: "Rich Man 1",
        cropType: "Bananas", 
        productQuantity: "1000"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          buyer: "Rich Man 1",
          cropType: "Apples", 
          productQuantity: "1200"
      },
      {
        contractName: "Banana",
        value: "$3 M",
        dateAccepted: "7/10/23",
        completedOrTerminatedDate: "8/10/23",
        buyer: "Rich Man 1",
        cropType: "Bananas", 
        productQuantity: "1000"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          buyer: "Rich Man 1",
          cropType: "Apples", 
          productQuantity: "1200"
      },
      {
        contractName: "Banana",
        value: "$3 M",
        dateAccepted: "7/10/23",
        completedOrTerminatedDate: "8/10/23",
        buyer: "Rich Man 1",
        cropType: "Bananas", 
        productQuantity: "1000"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          buyer: "Rich Man 1",
          cropType: "Apples", 
          productQuantity: "1200"
      },
      {
        contractName: "Banana",
        value: "$3 M",
        dateAccepted: "7/10/23",
        completedOrTerminatedDate: "8/10/23",
        buyer: "Rich Man 1",
        cropType: "Bananas", 
        productQuantity: "1000"
      },
      {
          contractName: "Apple",
          value: "$4 M",
          dateAccepted: "2/10/23",
          completedOrTerminatedDate: "4/10/23",
          buyer: "Rich Man 1",
          cropType: "Apples", 
          productQuantity: "1200"
      },
    ]
  }
  

export default async function DemoPage() {
  const dataCurrent = await getDataCurrent()
  const dataBrowsing = await getDataBrowsing()

  return (
    <>
        {/* <div className="text-3xl mx-auto">
            <h1 className="container">
                Foodify
            </h1>
        </div> */}
        <div className = "bg-white">
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
              <Card className= "w-3/4  ml-24 ">
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
                    <h1 className="text-center font-extrabold text-2xl ">
                    </h1>
                  </div>
                </CardContent>
              </Card>
              <Card className= "w-3/4 ml-16">
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
              <Card className= "w-3/4 ml-10">
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
              <Card className= "w-3/4">
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
        <div className = "flow-root py-5">
            <Card className="container ml-24 font-thin text-justify bg-white w-7/12 float-left ">
                <div className = "mx-2">
                    <DataTableBrowsing columns={columnBrowsing} data={dataBrowsing} />
                </div>
            </Card>
            <Card className="container mr-24 font-thin text-justify bg-white w-1/4 float-right">
                <div className = "mx-2">
                    <DataTableCurrent columns={columnCurrent} data={dataCurrent} />
                </div>
            </Card>
        </div>
        </div>
    </>
  )
}




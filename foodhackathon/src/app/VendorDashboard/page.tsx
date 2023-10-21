import Contracts from "./components/contracts";
import { InteractContract } from "./components/interactcontract";
import { MetricContract } from "./components/metric";
import { PriceContract } from "./components/price";

import { Payment, columns } from "./components/columns";
import { DataTable } from "./components/data-table";

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
      buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    {
        contractName: "Apple",
        value: "$4 M",
        status: "Complete",
        dateAccepted: "2/10/23",
        completedOrTerminatedDate: "4/10/23",
        buyer: "Rich Man 1"
    },
    
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <>
        {/* <div className="text-3xl mx-auto">
            <h1 className="container">
                Foodify
            </h1>
        </div> */}
        <div className = "bg-white">
        <div className="border-b-2 border-red-900 mb-4 pb-2 bg-white">
            <h1 className="text-3xl font-bold mb-2">Foodify</h1>
            <p className="text-white-600">Vendor Interface</p>
        </div>
        <div className ="h-56 grid grid-cols-3 gap-4 content-start">
            <div><MetricContract/></div>
            <div><PriceContract/></div>
        </div>
        <div className="container mx-auto py-2 font-thin text-justify bg-white">
            <DataTable columns={columns} data={data} />
        </div>
        </div>
    </>
  )
}




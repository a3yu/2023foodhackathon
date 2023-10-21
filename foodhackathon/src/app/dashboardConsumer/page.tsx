import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

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
            <p className="text-white-600">Consumer Interface</p>
        </div>
        <div className="container mx-auto py-2 font-thin text-justify bg-white">
            <DataTable columns={columns} data={data} />
        </div>
        </div>
    </>
  )
}

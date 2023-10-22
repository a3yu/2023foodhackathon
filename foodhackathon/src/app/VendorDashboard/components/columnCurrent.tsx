"use client"
 
import { ColumnDef } from "@tanstack/react-table"  
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

 
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PaymentCurrent = {
  contractName: string
  value: String 
  buyer: string
  dateAccepted: String 
  completedOrTerminatedDate: String
  productQuantity: String
  status: "Accepted" | "Pending" | "Complete" | "Terminated" 
}

export const columnCurrent: ColumnDef<PaymentCurrent>[] = [
    {
        accessorKey: "contractName",  
        header: () => <div className="text-left">Contract Name</div>,
        cell: ({ row }) => {
    
            return (
                <Popover >
                <PopoverTrigger asChild>
                    <Button className="hover:bg-gray-400 bg-gray-200
 text-black"> {row.getValue("contractName") }</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-white ml-60">
                    <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-normal text-sm"><b>Buyer: </b>{row.getValue("buyer")}</h4>
                        <h4 className="font-normal text-sm"><b>Date Accepted: </b>{row.getValue("dateAccepted")}</h4>
                        <h4 className="font-normal text-sm"><b>Completion Date: </b>{row.getValue("completedOrTerminatedDate")}</h4>
                        <h4 className="font-normal text-sm"><b>Payout: </b>{row.getValue("value")}</h4>
                        <h4 className="font-normal text-sm"><b>Payout: </b>{row.getValue("productQuantity")}</h4>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                        </div>
                        {/* <div className = "flow-root">
                        <div className="float-right">
                            <Button className = "hover hover: bg-red-200" variant="outline">Decline</Button>
                        </div>
                        <div className="float-left">
                            <Button className = "hover hover: bg-green-200"variant="outline">Accept</Button>
                        </div>
                        </div> */}
                    </div>
                    </div>
                </PopoverContent>
                </Popover>
            )
          }
        },
  {
    accessorKey: "buyer",
    header: "Buyer",
  },
  {
    accessorKey: "dateAccepted",
    header: "Date Accepted",
  },
  {
    accessorKey: "completedOrTerminatedDate",
    header: "CT Date",
  },
  {
    accessorKey: "productQuantity", 
    header: "Product Quantity"
  },
  // {
  //   accessorKey: "value",
  //   header: "Value",
  // },
  {
    accessorKey: "value",
    header: "Value"
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="text-right">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      return <div className="text-right font-thin">{row.getValue("status")}</div>
    }
  },
  // {
  //   accessorKey: "options",
  //   header: "options",
  // },
  // {
  //   id: "options",
  //   cell: ({ row }) => {
  //     const payment = row.original
 
  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.options)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     )
  //   },
  // },
]
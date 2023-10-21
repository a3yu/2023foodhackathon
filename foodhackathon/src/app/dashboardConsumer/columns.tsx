"use client"
 
import { ColumnDef } from "@tanstack/react-table"  
import "typeface-inter"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  contractName: string
  value: String 
  vendor: string
  dateAccepted: String 
  completedOrTerminatedDate: String
  status: "Accepted" | "Pending" | "Complete" | "Terminated" 
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "contractName",  
    header: () => <div className="text-left">Contract Name</div>,
    },
  {
    accessorKey: "vendor",
    header: "Vendor",
  },
  {
    accessorKey: "dateAccepted",
    header: "Date Accepted",
  },
  {
    accessorKey: "completedOrTerminatedDate",
    header: "CT Date",
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

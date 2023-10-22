"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  contractName: string;
  value: String;
  vendor: string;
  dateAccepted: String;
  endDate: String;
  crop: string;
  status: "Accepted" | "Pending" | "Complete" | "Terminated";
};

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
    accessorKey: "endDate",
    header: "CT Date",
  },
  // {
  //   accessorKey: "value",
  //   header: "Value",
  // },
  {
    accessorKey: "value",
    header: "Value",
  },
  {
    accessorKey: "crop",
    header: "Crop",
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
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-right font-normal">
          <div className="text-right font-normal">
            {row.getValue("status") === "Accepted" ? (
              <span className="border-2 border-green-500 p-1 rounded-full bg-green-500 text-white font-semibold">
                {row.getValue("status")}
              </span>
            ) : row.getValue("status") === "Complete" ? (
              <span className="border-2 border-green-500 p-1 rounded-full bg-green-500 text-white font-semibold">
                {row.getValue("status")}
              </span>
            ) : row.getValue("status") === "Pending" ? (
              <span className="border-2 border-yellow-400 p-1 rounded-full bg-yellow-400 text-white font-semibold">
                {row.getValue("status")}
              </span>
            ) : row.getValue("status") === "Terminated" ? (
              <span className="border-2 border-red-500 p-1 rounded-full bg-red-500 text-white font-semibold">
                {row.getValue("status")}
              </span>
            ) : (
              <span className="border-2 border-gray-500 p-1 rounded-full bg-gray-500 text-white font-semibold">
                {row.getValue("status")}
              </span>
            )}
          </div>
        </div>
      );
    },
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
];

"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PaymentBrowsing = {
<<<<<<< HEAD
  contractName: string;
  value: String;
  vendor: string;
  dateAccepted: String;
  endDate: String;
  crop: string;
  status: "Accepted" | "Pending" | "Complete" | "Terminated";
=======
  contractName: String;
  value: String;
  buyer: string;
  dateAccepted: String;
  completedOrTerminatedDate: String;
  cropType: String;
  productQuantity: String;
>>>>>>> d10640bb9f5e84893ebe435c049dbc5a6a5dcc23
};

export const columnBrowsing: ColumnDef<PaymentBrowsing>[] = [
  {
    accessorKey: "contractName",
    header: () => <div className="text-left">Contract Name</div>,
    cell: ({ row }) => {
<<<<<<< HEAD

        return (
            <Popover >
            <PopoverTrigger asChild>
                <Button className="hover:bg-gray-400 bg-white text-black"> {row.getValue("contractName") }</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-white ml-28">
                <div className="grid gap-4">
                <div className="space-y-2">
                    <h4 className="font-medium leading-none">{row.getValue("buyer")}</h4>
                    <p className="text-sm text-muted-foreground">
                        <div>{row.getValue("contractName")}</div>
                    </p>
=======
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button className="hover:bg-gray-400">
              {" "}
              {row.getValue("contractName")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-white ml-28">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">
                  {row.getValue("buyer")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  <div>{row.getValue("contractName")}</div>
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">{}</div>
                <div className="flow-root">
                  <div className="float-right">
                    <Button
                      className="hover hover: bg-red-200"
                      variant="outline"
                    >
                      Decline
                    </Button>
                  </div>
                  <div className="float-left">
                    <Button
                      className="hover hover: bg-green-200"
                      variant="outline"
                    >
                      Accept
                    </Button>
                  </div>
>>>>>>> d10640bb9f5e84893ebe435c049dbc5a6a5dcc23
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      );
    },
<<<<<<< HEAD
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
    }
]
=======
  },
  {
    accessorKey: "crop",
    header: "Product Type",
  },
  {
    accessorKey: "quantity",
    header: "Product Quantity",
  },
  {
    accessorKey: "vendor",
    header: "Buyer",
  },
  {
    accessorKey: "endDate",
    header: "Completion Date",
  },
  {
    accessorKey: "value",
    header: "Payout",
  },
];
>>>>>>> d10640bb9f5e84893ebe435c049dbc5a6a5dcc23

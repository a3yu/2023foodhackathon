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
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useEffect } from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PaymentBrowsing = {
  contractName: String;
  value: String;
  buyer: string;
  dateAccepted: String;
  completedOrTerminatedDate: String;
  cropType: String;
  productQuantity: String;
};

export const columnBrowsing: ColumnDef<PaymentBrowsing>[] = [
  {
    accessorKey: "contractName",
    header: () => <div className="text-left">Contract Name</div>,
    cell: ({ row }) => {
      function sendData(data: any) {
        const ref = query(
          collection(db, "contracts"),
          where("contractName", "==", data),
          limit(1)
        );
        async function A() {
          const doc = await getDocs(ref);
          doc.forEach(async (doc) => {
            await updateDoc(doc.ref, {
              left: true,
              status: "Pending",
            }).then(() => {
              window.location.reload();
            });
          });
        }
        A();
      }
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button className="hover:bg-gray-200 bg-white text-black">
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
                      onClick={() => {
                        sendData(row.getValue("contractName"));
                      }}
                    >
                      Accept
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      );
    },
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
    accessorKey: "buyer",
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

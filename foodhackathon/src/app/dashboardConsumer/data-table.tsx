"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import * as React from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { db } from "@/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

type Inputs = {
  contractName: string;
  value: String;
  vendor: "N/A";
  quantity: String;
  dateAccepted: "N/A";
  crop: string;
  endDate: String;
  status: "Pending";
};

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });
  console.log(123);
  console.log(data);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newData = {
      ...data,
      vendor: "N/A",
      dateAccepted: "N/A",
      status: "Pending",
    };
    addDoc(collection(db, "contracts"), newData).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="p-6">
      <div className="flex items-center py-2 justify-end ">
        <h1 className="container -ml-6 text-3xl font-bold">
          Current Contracts
        </h1>
        <Input
          placeholder="Filter Contracts..."
          value={
            (table.getColumn("contractName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("contractName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="hover:bg-gray-200"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="font-normal">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="float-left w-full">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">Create Contract</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] w-full">
              <form onSubmit={handleSubmit(onSubmit)}>
                <DialogHeader>
                  <DialogTitle>Create Contract</DialogTitle>
                  <DialogDescription>
                    Fill in the details to create a new contract.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="contractName" className="text-right">
                      Contract Name
                    </Label>
                    <Input
                      id="contractName"
                      type="text"
                      placeholder="Enter Contract Name"
                      className="col-span-3"
                      {...register("contractName")}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="terminatedDate" className="text-right">
                      End Date
                    </Label>
                    <Input
                      id="terminatedDate"
                      type="date"
                      className="col-span-3"
                      {...register("endDate")}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="value" className="text-right">
                      Value ($)
                    </Label>
                    <Input
                      id="value"
                      type="number"
                      placeholder="Enter Value"
                      className="col-span-3"
                      {...register("value")}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="quantity" className="text-right">
                      Quantity (lb)
                    </Label>
                    <Input
                      id="quantity"
                      type="number"
                      placeholder="Enter Quantity"
                      className="col-span-3"
                      {...register("quantity")}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="crop" className="text-right">
                      Crop
                    </Label>
                    <Input
                      id="crop"
                      type="text"
                      placeholder="Enter Crop"
                      className="col-span-3"
                      {...register("crop")}
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Create Contract</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="hover:bg-gray-200"
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="hover:bg-gray-200"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

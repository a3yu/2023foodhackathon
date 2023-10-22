import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// Code would be : <Input id="name" placeholder="Name of your project" />
import { Label } from "@/components/ui/label"


export function PriceContract() {
    const deliverydate = "4/10/23"
    const summaryofgoods = "3M$ in Apples"
    const buyer = "Rich Man 1"
    return (
        <Card className="w-[350px]">
            <CardHeader>
            <CardTitle>Next Delivery Date: {deliverydate}</CardTitle>
            <CardDescription>Goods Need: {summaryofgoods}</CardDescription>
            </CardHeader>
            <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name of Contracter</Label>
                    <Label htmlFor="contractor name"> {buyer} </Label>
                </div>
                </div>
            </form>
            </CardContent>
            <CardFooter className="flex justify-between">
            </CardFooter>
        </Card>
    )
}
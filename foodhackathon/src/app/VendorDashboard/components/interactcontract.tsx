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
import { Label } from "@/components/ui/label"



export function InteractContract() {
    return (
        <Card className="w-[350px]">
            <CardHeader>
            <CardTitle>Total Value of Goods</CardTitle>
            <CardDescription>Quick Summary of Contract</CardDescription>
            </CardHeader>
            <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name of Contracter</Label>
                    <Label htmlFor="contractor name"> Buyer </Label>
                </div>
                </div>
            </form>
            </CardContent>
            <CardFooter className="flex justify-between">
            <Button variant="outline">Decline</Button>
            <Button>Accept</Button>
            </CardFooter>
        </Card>
    )
}
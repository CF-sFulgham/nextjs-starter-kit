"use client"

import { useState } from "react"
import { ArrowUpDown, ChevronDown, Search, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const shipments = [
  {
    id: "TRK-9823",
    orderId: "ORD-7612",
    date: "July 2, 2025",
    status: "In Transit",
    carrier: "FedEx",
    estimatedDelivery: "July 5, 2025",
  },
  {
    id: "TRK-9814",
    orderId: "ORD-7598",
    date: "June 30, 2025",
    status: "Delivered",
    carrier: "UPS",
    estimatedDelivery: "July 3, 2025",
  },
  {
    id: "TRK-9802",
    orderId: "ORD-7563",
    date: "June 28, 2025",
    status: "Delivered",
    carrier: "USPS",
    estimatedDelivery: "July 1, 2025",
  },
  {
    id: "TRK-9795",
    orderId: "ORD-7542",
    date: "June 25, 2025",
    status: "Delivered",
    carrier: "DHL",
    estimatedDelivery: "June 29, 2025",
  },
  {
    id: "TRK-9788",
    orderId: "ORD-7531",
    date: "June 23, 2025",
    status: "Delivered",
    carrier: "FedEx",
    estimatedDelivery: "June 26, 2025",
  },
  {
    id: "TRK-9782",
    orderId: "ORD-7520",
    date: "June 20, 2025",
    status: "Delivered",
    carrier: "UPS",
    estimatedDelivery: "June 24, 2025",
  },
  {
    id: "TRK-9775",
    orderId: "ORD-7512",
    date: "June 18, 2025",
    status: "Delivered",
    carrier: "USPS",
    estimatedDelivery: "June 22, 2025",
  },
]

export default function ShipmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [carrierFilter, setCarrierFilter] = useState("all")

  const filteredShipments = shipments.filter((shipment) => {
    const matchesSearch =
      shipment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shipment.orderId.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || shipment.status === statusFilter
    const matchesCarrier = carrierFilter === "all" || shipment.carrier === carrierFilter

    return matchesSearch && matchesStatus && matchesCarrier
  })

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Shipments</h1>
        <p className="text-muted-foreground">Track and manage your shipments</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              Total Shipments
            </CardTitle>
            <CardDescription>All shipments this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-green-500" />
              Delivered
            </CardTitle>
            <CardDescription>Successfully delivered</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-blue-500" />
              In Transit
            </CardTitle>
            <CardDescription>Currently in transit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full items-center gap-2 md:w-auto">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by tracking ID or order ID..."
              className="w-full md:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="In Transit">In Transit</SelectItem>
                <SelectItem value="Delivered">Delivered</SelectItem>
              </SelectContent>
            </Select>
            <Select value={carrierFilter} onValueChange={setCarrierFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by carrier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Carriers</SelectItem>
                <SelectItem value="FedEx">FedEx</SelectItem>
                <SelectItem value="UPS">UPS</SelectItem>
                <SelectItem value="USPS">USPS</SelectItem>
                <SelectItem value="DHL">DHL</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium">
                    Tracking ID
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium">
                    Order ID
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium">
                    Shipped Date
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>Carrier</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Est. Delivery</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredShipments.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    No shipments found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredShipments.map((shipment) => (
                  <TableRow key={shipment.id}>
                    <TableCell className="font-medium">{shipment.id}</TableCell>
                    <TableCell>{shipment.orderId}</TableCell>
                    <TableCell>{shipment.date}</TableCell>
                    <TableCell>{shipment.carrier}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-2.5 w-2.5 rounded-full ${
                            shipment.status === "In Transit" ? "bg-blue-500" : "bg-green-500"
                          }`}
                        ></div>
                        <span>{shipment.status}</span>
                      </div>
                    </TableCell>
                    <TableCell>{shipment.estimatedDelivery}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Track
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

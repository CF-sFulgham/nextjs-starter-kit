import Link from "next/link"

import { ArrowRight, ArrowUpRight, Box, Package, Truck, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FirstName } from "./user/user"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, <FirstName /></h1>    
        <p className="text-muted-foreground">Here's what's happening with your learning plans.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Total Learning Plans",
            value: "12",
            description: "3 new this month",
            icon: Box,
          },
          {
            title: "Active Orders",
            value: "4",
            description: "2 pending approval",
            icon: Package,
          },
          {
            title: "Shipments",
            value: "8",
            description: "3 in transit",
            icon: Truck,
          },
          {
            title: "Storage Used",
            value: "60%",
            description: "6GB of 10GB",
            icon: Upload,
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="recent-plans" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent-plans">Recent Plans</TabsTrigger>
          <TabsTrigger value="active-orders">Active Orders</TabsTrigger>
          <TabsTrigger value="shipments">Shipments</TabsTrigger>
        </TabsList>
        <TabsContent value="recent-plans" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Mathematics Learning Plan",
                description: "Created on July 2, 2025",
                status: "Completed",
              },
              {
                title: "Science Learning Plan",
                description: "Created on June 28, 2025",
                status: "In Progress",
              },
              {
                title: "Custom Learning Plan",
                description: "Created on June 25, 2025",
                status: "Completed",
              },
            ].map((design, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle>{design.title}</CardTitle>
                  <CardDescription>{design.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${design.status === "Completed" ? "bg-green-500" : "bg-amber-500"}`}
                    ></div>
                    <span className="text-sm font-medium">{design.status}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    View details
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/dashboard/designs">
              <Button variant="outline">View all designs</Button>
            </Link>
          </div>
        </TabsContent>
        <TabsContent value="active-orders" className="space-y-4">
          <div className="rounded-lg border">
            <div className="grid grid-cols-5 border-b p-4 font-medium">
              <div>Order ID</div>
              <div>Product</div>
              <div>Date</div>
              <div>Status</div>
              <div>Actions</div>
            </div>
            {[
              {
                id: "ORD-7652",
                product: "Science Learning Plan",
                date: "July 3, 2025",
                status: "Processing",
              },
              {
                id: "ORD-7645",
                product: "Mathematics Learning Plan",
                date: "July 1, 2025",
                status: "Pending Approval",
              },
              {
                id: "ORD-7612",
                product: "Custom Learning Plan",
                date: "June 28, 2025",
                status: "In Production",
              },
            ].map((order, index) => (
              <div key={index} className="grid grid-cols-5 items-center p-4">
                <div className="font-medium">{order.id}</div>
                <div>{order.product}</div>
                <div>{order.date}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${
                        order.status === "Processing"
                          ? "bg-blue-500"
                          : order.status === "Pending Approval"
                            ? "bg-amber-500"
                            : "bg-green-500"
                      }`}
                    ></div>
                    <span>{order.status}</span>
                  </div>
                </div>
                <div>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Details
                    <ArrowUpRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/dashboard/orders">
              <Button variant="outline">View all orders</Button>
            </Link>
          </div>
        </TabsContent>
        <TabsContent value="shipments" className="space-y-4">
          <div className="rounded-lg border">
            <div className="grid grid-cols-5 border-b p-4 font-medium">
              <div>Tracking ID</div>
              <div>Order ID</div>
              <div>Shipped Date</div>
              <div>Status</div>
              <div>Actions</div>
            </div>
            {[
              {
                id: "TRK-9823",
                orderId: "ORD-7612",
                date: "July 2, 2025",
                status: "In Transit",
              },
              {
                id: "TRK-9814",
                orderId: "ORD-7598",
                date: "June 30, 2025",
                status: "Delivered",
              },
              {
                id: "TRK-9802",
                orderId: "ORD-7563",
                date: "June 28, 2025",
                status: "Delivered",
              },
            ].map((shipment, index) => (
              <div key={index} className="grid grid-cols-5 items-center p-4">
                <div className="font-medium">{shipment.id}</div>
                <div>{shipment.orderId}</div>
                <div>{shipment.date}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${
                        shipment.status === "In Transit" ? "bg-blue-500" : "bg-green-500"
                      }`}
                    ></div>
                    <span>{shipment.status}</span>
                  </div>
                </div>
                <div>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Track
                    <ArrowUpRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/dashboard/shipments">
              <Button variant="outline">View all shipments</Button>
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

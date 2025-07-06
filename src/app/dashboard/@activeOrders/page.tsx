"use client";

import Link from "next/link"
import { useState, useEffect } from "react";
import { GetActiveOrders } from "../../api/v1/public/dashboard/getDashoard"
import { ActiveOrder } from "../../api/types";
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TabsContent } from "@/components/ui/tabs"

export default function ActiveOrdersPage() {
  const [activeOrders, setActiveOrders] = useState<ActiveOrder[]>([]);

  useEffect(() => {
    GetActiveOrders().then(async (data) => {
        const orders = await data.json();
        setActiveOrders(orders['activeOrders']);
    });
  }, []);

  return (
    <TabsContent value="active-orders" className="space-y-4">
        <div className="rounded-lg border">
          <div className="grid grid-cols-5 border-b p-4 font-medium">
            <div>Order ID</div>
            <div>Product</div>
            <div>Date</div>
            <div>Status</div>
            <div>Actions</div>
          </div>
          {activeOrders.map((order, index) => (
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
  );
}

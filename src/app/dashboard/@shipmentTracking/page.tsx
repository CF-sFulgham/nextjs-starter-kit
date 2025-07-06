"use client";

import Link from "next/link"
import { useState, useEffect } from "react";
import { GetShipments } from "../../api/v1/public/dashboard/getDashoard"
import { TrackingInfo } from "../../api/types";
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TabsContent } from "@/components/ui/tabs"

export default function ShipmentTrackingPage() {
  const [trackingInfo, setTrackingInfo] = useState<TrackingInfo[]>([]);

  useEffect(() => {
    GetShipments().then(async (data) => {
      const shipments = await data.json();
      setTrackingInfo(shipments['shipments']);
    });
  }, []);

  return (
    <TabsContent value="shipments" className="space-y-4">
        <div className="rounded-lg border">
          <div className="grid grid-cols-5 border-b p-4 font-medium">
            <div>Tracking ID</div>
            <div>Order ID</div>
            <div>Shipped Date</div>
            <div>Status</div>
            <div>Actions</div>
          </div>
          {trackingInfo.map((shipment, index) => (
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
  );
}

"use client";

import Link from "next/link"
import { useState, useEffect } from "react";
import { GetRecentPlans } from "../../api/v1/public/dashboard/getDashoard"
import { RecentPlan } from "../../api/types";
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"


export default function RecentPlansPage() {
  const [recentPlans, setRecentPlans] = useState<RecentPlan[]>([]);

  useEffect(() => {
    GetRecentPlans().then(async (data) => {
        const plans = await data.json();
        setRecentPlans(plans['recentPlans']);
    });
  }, []);

  return (
    <TabsContent value="recent-plans" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recentPlans.map((design, index) => (
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
  );
}

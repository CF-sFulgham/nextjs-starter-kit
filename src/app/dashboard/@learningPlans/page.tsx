"use client";

import { useState, useEffect } from "react";
import { GetLearningPlans } from "../../api/v1/public/dashboard/getDashoard"
import { LearningPlan } from "../../api/types";
import { Box, Package, Truck, Upload } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LearningPlansPage() {
  const [learningPlans, setLearningPlans] = useState<LearningPlan[]>([]);

  useEffect(() => {
    GetLearningPlans().then(async (data) => {
        const plans = await data.json();
        setLearningPlans(plans['learningPlans']);
    });
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {learningPlans.map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              {(() => {
              switch (item.icon) {
                case "box":
                  return <Box className="h-4 w-4 text-muted-foreground" />;
                case "package":
                  return <Package className="h-4 w-4 text-muted-foreground" />;
                case "truck":
                  return <Truck className="h-4 w-4 text-muted-foreground" />;
                // Add more cases as needed
                default:
                  return <Upload className="h-4 w-4 text-muted-foreground" />;
              }
              })()}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
  );
}

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FirstName } from "./user/user"
import ActiveOrdersPage from "./@activeOrders/page"
import LearningPlansPage from "./@learningPlans/page"
import RecentPlansPage from "./@recentPlans/page"
import ShipmentTrackingPage from "./@shipmentTracking/page"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, <FirstName /></h1>    
        <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your learning plans.</p>
      </div>

      <LearningPlansPage />

      <Tabs defaultValue="recent-plans" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent-plans">Recent Plans</TabsTrigger>
          <TabsTrigger value="active-orders">Active Orders</TabsTrigger>
          <TabsTrigger value="shipments">Shipments</TabsTrigger>
        </TabsList>
        <RecentPlansPage />
        <ActiveOrdersPage />
        <ShipmentTrackingPage />
      </Tabs>
    </div>
  )
}

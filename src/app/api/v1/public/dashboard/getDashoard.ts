import activeOrders from "./active-orders-data.json";
import learningPlans from "./learning-plans-data.json";
import recentPlans from "./recent-plans-data.json";
import shipments from "./shipments-data.json";

export const GetActiveOrders = async() => {
  return Response.json(activeOrders);
}

export const GetLearningPlans = async() => {
  return Response.json(learningPlans);
}

export const GetRecentPlans = async() => {
  return Response.json(recentPlans);
}

export const GetShipments = async() => {
  return Response.json(shipments);
}
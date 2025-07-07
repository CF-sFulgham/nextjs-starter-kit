export type Product = {
    id: string;
    name: string;
    description: string;
    price: string;
    icon: string;
    image: string;
    category: string;
    rating: number;
    reviews: number;
    features: string[];
  };

export type ActiveOrder = {
    id: string;
    product: string;
    date: string;
    status: string;
};

export type LearningPlan = {
    title: string;
    value: string;
    description: string;
    icon: string;
};

export type RecentPlan = {
    title: string;
    description: string;
    status: string;
};

export type TrackingInfo = {
    id: string;
    orderId: string;
    date: string;
    status: string;
};

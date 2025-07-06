import products from "./product-data.json";

export const GetProducts = async() => {
  return Response.json(products);
}
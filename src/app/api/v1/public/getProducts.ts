import products from "../../data.json";

export const GetProducts = async() => {
  return Response.json(products);
}
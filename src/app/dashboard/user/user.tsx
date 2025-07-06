import { currentUser } from "@clerk/nextjs/server";

export const FirstName = async() => {
  const userObj = await currentUser();

  return (<span>{userObj?.firstName}</span>);
}

export const LastName = async() => {
  const userObj = await currentUser();

  return (<span>{userObj?.lastName}</span>);
}
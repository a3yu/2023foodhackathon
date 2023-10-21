import React from "react";
import { SignOutButton } from "@clerk/nextjs";
import { db } from "@/firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

async function page() {
  const getFood = await getDocs(collection(db, "contracts"));
  getFood.docs.map((doc) => {
    console.log(doc.data());
  });
  return (
    <div>
      <SignOutButton />
    </div>
  );
}

export default page;

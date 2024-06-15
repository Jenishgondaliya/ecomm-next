"use server";

import connectDB from "@/utils/db";
import Product from "@/models/Product";
import { redirect } from "next/navigation";

const addProduct = async (formData: FormData) => {
  const name = formData.get("name") as string;
  console.log("%c Line:8 🍣 name", "color:#7f2b82", name);
  const price = formData.get("price") as string;
  console.log("%c Line:10 🍐 price", "color:#b03734", price);
  const image = formData.get("image") as string;
  console.log("%c Line:12 🍡 image", "color:#6ec1c2", image);
  const category = formData.get("category") as string;
  console.log("%c Line:14 🥟 category", "color:#4fff4B", category);

  if (!name || !price || !image || !category) {
    throw new Error("Please fill all fields");
  }

  await connectDB();

  await Product.create({ name, price, image, category });
  redirect("/admin/dashboard");
};

export { addProduct };

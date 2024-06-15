import Product from "@/models/Product";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { category } = await request.json();
    console.log("%c Line:8 🥪 category", "color:#93c0a4", category);
    await connect();
    const products = await Product.find({
      category: category,
    });
    console.log("%c Line:12 🥖 products", "color:#ffdd4d", products);
    return NextResponse.json(
      { data: products },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log("%c Line:18 🥟 e", "color:#6ec1c2", e);

    return NextResponse.json({
      success: false,
      message: "Something goes wrong !Please try again",
    });
  }
};

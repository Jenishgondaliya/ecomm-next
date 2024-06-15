import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";
console.log(
  "%c Line:6 🥑 process.env.key_id",
  "color:#42b983",
  process.env.key_id
);
console.log(
  "%c Line:8 🍏 process.env.key_secret",
  "color:#ea7e5c",
  process.env.key_secret
);
const razorpay = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
});
export const POST = async (request) => {
  try {
    const { amount, currency } = await request.json();
    console.log("%c Line:20 🍋 currency", "color:#93c0a4", currency);
    console.log("%c Line:20 🍰 amount", "color:#465975", amount);
    const payment_capture = 1;
    var options = {
      amount: amount,
      currency: "INR",
      receipt: "rcp1",
      payment_capture,
    };
    const order = await razorpay.orders.create(options);
    return  NextResponse.json(
      { orderId: order.id },
      {
        status: 200,
      }
    );
  } catch (err) {
    return  NextResponse(err, {
      status: 500,
    });
  }
};

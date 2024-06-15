import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
const generatedSignature = (
  razorpayOrderId: string,
  razorpayPaymentId: string
) => {
  const keySecret = process.env.key_secret;
  console.log("%c Line:9 🍧 keySecret", "color:#3f7cff", keySecret);
  if (!keySecret) {
    throw new Error(
      "Razorpay key secret is not defined in environment variables."
    );
  }
  const sig = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");
  return sig;
};
export async function POST(request: NextRequest) {
  const { orderCreationId, razorpayPaymentId, razorpaySignature } =
    await request.json();
  console.log(
    "%c Line:24 🥚 razorpayPaymentId",
    "color:#2eafb0",
    razorpayPaymentId
  );
  console.log(
    "%c Line:24 🍌 orderCreationId",
    "color:#42b983",
    orderCreationId
  );
  console.log(
    "%c Line:29 🥑 razorpaySignature",
    "color:#b03734",
    razorpaySignature
  );
  const signature = generatedSignature(orderCreationId, razorpayPaymentId);
  console.log("%c Line:27 🍇 signature", "color:#f5ce50", signature);
  if (signature !== razorpaySignature) {
    return NextResponse.json(
      { message: "payment verification failed", isOk: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { message: "payment verified successfully", isOk: true },
    { status: 200 }
  );
}

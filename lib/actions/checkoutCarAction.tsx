"use server";

import { Car, carsData } from "@/constants/Cars";
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";

interface Props {
  car: Car;
  startDateStr: string;
  endDateStr: string;
  totalDays: number;
  totalToPay: number;
}

export const checkoutCarAction = async ({
  car,
  startDateStr,
  endDateStr,
  totalDays,
  totalToPay,
}: Props) => {
  const line_items = [
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: `${car.brand} ${car.model} - Rent (${totalDays} days)`,
        },
        unit_amount: Math.round(totalToPay * 100),
      },
      quantity: 1,
    },
  ];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_CASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_CASE_URL}/`,
  });

  if (session.url) {
    redirect(session.url);
  }
};

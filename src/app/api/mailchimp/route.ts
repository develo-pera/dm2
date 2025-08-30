import { subscribeToMailchimp } from "@/lib/mailchimp";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, interestedIn } = await request.json();

  console.log("email", email);
  console.log("interestedIn", interestedIn);

  try {
    const response = await subscribeToMailchimp(email, interestedIn);
    console.log("response", response);
    return NextResponse.json({ success: true, message: "Uspesno ste se pretplatili na našu mejling listu", response });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Došlo je do greške prilikom pretplate na našu mejling listu, pokušajte ponovo kasnije." }, { status: 500 });
  }
}
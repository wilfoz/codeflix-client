import { NextRequest, NextResponse } from "next/server";
import { loginValidations } from "@/app/lib/validations/loginValidations";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = loginValidations.parse(await request.json());
    console.log(email, password);
    return new NextResponse('It works!')
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error.message, { status: 400 });
  }
}
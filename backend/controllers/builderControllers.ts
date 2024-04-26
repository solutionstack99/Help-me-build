import { NextRequest, NextResponse } from "next/server";

export const allBuilder = async (req: NextRequest) => {
  return NextResponse.json({
    message: "Hello, World!",
  });
};

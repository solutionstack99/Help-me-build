import { NextRequest, NextResponse } from "next/server";
import Builder from "../models/builder";

// Get all builders => /api/builders
export const allBuilder = async (req: NextRequest) => {
  return NextResponse.json({
    message: "Hello, World!",
  });
};

// Create new builder => /api/admin/builders
export const newBuilder = async (req: NextRequest) => {
  const body = await req.json();

  const builder = await Builder.create(body);

  return NextResponse.json({
    success: true,
    builder,
  });
};

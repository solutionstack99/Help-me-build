import { NextRequest, NextResponse } from "next/server";
import Builder from "../models/builder";
import build from "next/dist/build";

// Get all builders => /api/builders
export const allBuilder = async (req: NextRequest) => {
  const resPerPage: number = 8;

  const builders = await Builder.find();

  return NextResponse.json({
    success: true,
    resPerPage,
    builders,
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

// Get Builder Details => /api/builders/:id
export const getBuilderDetails = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const builder = await Builder.findById(params.id);

  if (!builder) {
    return NextResponse.json(
      {
        message: "Builder not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    builder,
  });
};

//
export const updateBuilder = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  let builder = await Builder.findById(params.id);
  const body = await req.json();

  if (!builder) {
    return NextResponse.json({ message: "Builder not found" }, { status: 404 });
  }

  builder = await Builder.findByIdAndUpdate(params.id, body, {
    // This will return the updated data
    new: true,
  });

  return NextResponse.json({
    success: true,
    builder,
  });
};

// Delete Builder => /api/admin/builders/:id
export const deleteBuilder = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  let builder = await Builder.findById(id);

  if (!builder) {
    return NextResponse.json({ message: "Builder not found" }, { status: 404 });
  }

  // TODO: Delete imaage the related to the builder

  await builder.deleteOne();

  return NextResponse.json({
    success: true,
    message: "Builder is deleted",
  });
};

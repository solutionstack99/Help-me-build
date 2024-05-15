import dbConnect from "@/backend/config/dbConnect";
import { newBuilder } from "@/backend/controllers/builderControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

// Call from backend/controllers/backend/config/dbConnect.ts
dbConnect();

router.post(newBuilder);

export async function POST(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

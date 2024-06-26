import dbConnect from "@/backend/config/dbConnect";
import { allBuilder } from "@/backend/controllers/builderControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

// Call from backend/controllers/backend/config/dbConnect.ts
dbConnect();

router.get(allBuilder);

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

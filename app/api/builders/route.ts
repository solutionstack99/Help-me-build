import dbConnect from "@/backend/config/dbConnect";
import {
  allBuilder,
  newBuilder,
} from "@/backend/controllers/builderControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

// Call from backend/controllers/backend/config/dbConnect.ts
dbConnect();

router.get(allBuilder);
router.post(newBuilder);

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

export async function POST(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

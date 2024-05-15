import dbConnect from "@/backend/config/dbConnect";
import { updateBuilder } from "@/backend/controllers/builderControllers";
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

router.put(updateBuilder);

export async function PUT(request: NextRequest, clx: RequestContext) {
  return router.run(request, clx);
}

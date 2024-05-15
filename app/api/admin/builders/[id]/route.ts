import dbConnect from "@/backend/config/dbConnect";
import {
  deleteBuilder,
  updateBuilder,
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

router.put(updateBuilder);
router.delete(deleteBuilder);

export async function PUT(request: NextRequest, clx: RequestContext) {
  return router.run(request, clx);
}

export async function DELETE(request: NextRequest, clx: RequestContext) {
  return router.run(request, clx);
}

import { allBuilder } from "@/backend/controllers/builderControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

router.get(allBuilder);

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

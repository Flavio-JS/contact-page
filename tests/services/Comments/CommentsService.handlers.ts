import { rest } from "msw";
import { createRandomComments } from "./CommentsService.mocks";

export const userServiceHandlers = [
  rest.get("*/comments", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(createRandomComments()));
  }),
];

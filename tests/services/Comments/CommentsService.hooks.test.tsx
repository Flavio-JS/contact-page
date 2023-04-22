import { renderHook, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { useGetCommentsByPostId } from "../../../src/api/services/jsonPlaceholder/Comments/CommentsService.hooks";
import { createWrapper } from "../../utils/createQueryWrapper";
import { userServiceHandlers } from "./CommentsService.handlers";

const server = setupServer(...userServiceHandlers);

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

describe("UserService.hooks", () => {
  test("expect to return at least 1 comment with informed ID (useGetCommentsByPostId)", async () => {
    // mock garante pelo menos 1 post de ID = 1
    const postId = 1;
    const { result } = renderHook(
      () =>
        useGetCommentsByPostId({
          enabled: true,
          getCommentsId: `getCommentsId${postId}`,
          postId,
        }),
      {
        wrapper: createWrapper(),
      }
    );
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    console.log(result.current.data);
    expect(
      result.current.data ? result.current.data?.length > 0 : false
    ).toEqual(true);
  });
});

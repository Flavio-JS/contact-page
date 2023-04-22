import { faker } from "@faker-js/faker";
import { IComment } from "../../../src/api/services/jsonPlaceholder/Comments/CommentsService.types";

export const createRandomComments = () => {
  const mockedArrayOfComments: IComment[] = [];

  while (mockedArrayOfComments.length < 30) {
    let postId = faker.datatype.number();

    mockedArrayOfComments.push({
      postId,
      id: faker.datatype.number(),
      name: faker.lorem.words(),
      email: faker.internet.email(),
      body: faker.lorem.sentences(),
    });
  }

  mockedArrayOfComments.push({
    postId: 1,
    id: faker.datatype.number(),
    name: faker.lorem.words(),
    email: faker.internet.email(),
    body: faker.lorem.sentences(),
  });

  return mockedArrayOfComments;
};

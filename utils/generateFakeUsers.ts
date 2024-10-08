import { faker } from "@faker-js/faker";

interface User {
  firstName: string,
  lastName: string,
  email: string, 
  password: string
  friends: string[]
}
 
const createFakeUser = () : User => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({length: 5, memorable: true}),
    friends: []
  }
};

export const generateFakeUsers = (length: number) => {
  const users: User[] = [];

  for (let i = 0; i < length; i++) {
    users.push(createFakeUser());
  }

  return users;
};
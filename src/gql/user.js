import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation register($values: UserInput) {
    register(values: $values) {
      id
      name
      username
      password
      email
    }
  }
`;

export const LOGIN = gql`
  mutation login($values: loginValues) {
    login(values: $values) {
      token
    }
  }
`;

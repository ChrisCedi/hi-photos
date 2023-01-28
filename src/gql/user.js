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

export const GET_USER = gql`
  query getUser($id: ID, $username: String) {
    getUser(id: $id, username: $username) {
      id
      name
      username
      email
      avatar
      createAt
      description
      password
      siteWeb
    }
  }
`;

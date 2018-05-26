import gql from "graphql-tag";

export const GET_HOLIDAYS = gql`
  query {
    holidays {
      id
      name
      date
    }
  }
`;

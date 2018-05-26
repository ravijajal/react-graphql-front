import gql from "graphql-tag";

export const CREATE_HOLIDAY = gql `
  mutation createHoliday($name: String!, $date: String!) {
    createHoliday(name: $name, date: $date) {
      id
      name
      date
    }
  }
`;
export const UPDATE_HOLIDAY = gql `
  mutation updateHoliday($id:String!, $name: String!, $date: String!) {
    updateHoliday(id:$id, name: $name, date: $date) {
      id
      name
      date
    }
  }
`;
export const DELETE_HOLIDAY = gql `
  mutation deleteHoliday($id:String!) {
    deleteHoliday(id:$id) {
      id
      name
      date
    }
  }
`;
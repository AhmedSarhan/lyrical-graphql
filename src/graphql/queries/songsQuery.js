import { gql } from '@apollo/client';

export const GET_SONGS = gql`
  query getSongs {
    songs {
      id
      title
    }
  }
`;
export const GET_SINGLE = gql`
  query song($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

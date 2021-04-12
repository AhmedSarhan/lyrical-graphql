import { gql } from '@apollo/client';

export const CREATE_SONG = gql`
  mutation addSong($title: String!) {
    addSong(title: $title) {
      id
    }
  }
`;
export const DELETE_SONG = gql`
  mutation deleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;
export const ADD_LYRIC = gql`
  mutation addLyricToSong($songId: ID!, $content: String!) {
    addLyricToSong(songId: $songId, content: $content) {
      id
    }
  }
`;
export const LIKE_LYRIC = gql`
  mutation likeLyric($id: ID!) {
    likeLyric(id: $id) {
      id
      content
      likes
    }
  }
`;

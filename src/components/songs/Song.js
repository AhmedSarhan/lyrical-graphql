import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DELETE_SONG } from '../../graphql/mutations/songMutations';
const Song = ({ song, refetch }) => {
  const history = useHistory();
  const [deleteSong] = useMutation(DELETE_SONG);
  const singleSongHandler = (event) => {
    event.stopPropagation();
    history.push(`/song/${song.id}`);
  };
  const deleteSongHandler = (event) => {
    event.stopPropagation();
    console.log(song.id);
    deleteSong({
      variables: {
        id: song.id,
      },
    })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          refetch();
          // setRefetchStatus((prev) => prev + 1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <li
      className="collection-item"
      onClick={singleSongHandler}
      style={{ position: 'relative', cursor: 'pointer' }}
    >
      <h5 className="center-align indigo-text text-darken-3">{song.title}</h5>
      <i
        className="material-icons right red-text text-darken-4"
        onClick={deleteSongHandler}
        style={{
          position: 'absolute',
          top: '25%',
          right: '5px',
          transform: 'translate(-50%, 10px)',
          cursor: 'pointer',
        }}
      >
        delete
      </i>
    </li>
  );
};

export default Song;

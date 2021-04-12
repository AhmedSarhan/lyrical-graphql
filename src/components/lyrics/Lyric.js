import { useMutation } from '@apollo/client';
import React from 'react';
import { LIKE_LYRIC } from '../../graphql/mutations/songMutations';

const Lyric = ({ lyric, refetch }) => {
  const [likeLyric] = useMutation(LIKE_LYRIC);
  const likeLyricHandler = () => {
    likeLyric({
      variables: {
        id: lyric.id,
      },
    })
      .then((res) => {
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <li className="collection-item" style={{ position: 'relative' }}>
      <h5 className="center-align indigo-text text-darken-3">
        {lyric.content}
      </h5>
      <span
        style={{
          position: 'absolute',
          top: '25%',
          right: '0px',
          transform: 'translate(-50%, 10px)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <i
          className="material-icons blue-text text-darken-4"
          style={{ cursor: 'pointer', marginRight: '5px' }}
          onClick={likeLyricHandler}
        >
          thumb_up
        </i>{' '}
        {lyric.likes > 0 && <span> ({lyric.likes})</span>}
      </span>
    </li>
  );
};

export default Lyric;

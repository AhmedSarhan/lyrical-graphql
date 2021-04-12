import React from 'react';
import Lyric from './Lyric';
const LyricList = ({ lyricList, refetch }) => {
  return (
    <ul className="collection" style={{ margin: '20px auto 50px auto' }}>
      {lyricList.length > 0 &&
        lyricList.map((lyric) => (
          <Lyric key={lyric.id} lyric={lyric} refetch={refetch} />
        ))}
    </ul>
  );
};

export default LyricList;

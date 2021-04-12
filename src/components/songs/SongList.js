import React, { useEffect, useState } from 'react';

import Song from './Song';
const SongList = ({ error, loading, data, refetch }) => {
  const [songsState, setSongsState] = useState([]);
  useEffect(() => {
    if (data && data.songs) {
      setSongsState([...data.songs]);
    }
  }, [data, data?.songs]);
  console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error Loading Data</div>;
  }
  return (
    <ul className="collection" style={{ margin: '20px auto 50px auto' }}>
      {songsState.length > 0 &&
        songsState.map((song) => (
          <Song key={song.id} song={song} refetch={refetch} />
        ))}
    </ul>
  );
};

export default SongList;

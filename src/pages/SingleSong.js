import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import AddLyric from '../components/lyrics/AddLyric';
import LyricList from '../components/lyrics/LyricList';
import { GET_SINGLE } from '../graphql/queries/songsQuery';
import { useParams } from 'react-router-dom';
const SingleSong = () => {
  const params = useParams();
  const [singleSong, setSingleSong] = useState({});
  const { loading, data, error, refetch } = useQuery(GET_SINGLE, {
    variables: {
      id: params.id,
    },
  });
  useEffect(() => {
    if (data) {
      setSingleSong({ ...data.song });
    }
  }, [data]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error Loading Data</div>;
  }
  console.log();
  return (
    <div className="container">
      <h3
        style={{ textAlign: 'center', margin: '20px auto', color: '#30336b' }}
      >
        {singleSong.title}
      </h3>

      {singleSong.lyrics && singleSong.lyrics.length > 0 && (
        <LyricList lyricList={singleSong.lyrics} refetch={refetch} />
      )}
      <AddLyric id={singleSong.id} refetch={refetch} />
    </div>
  );
};

export default SingleSong;

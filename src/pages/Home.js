import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SONGS } from '../graphql/queries/songsQuery';
import CreateSong from '../components/songs/CreateSong';
import SongList from '../components/songs/SongList';

const Home = () => {
  const { error, loading, data, refetch } = useQuery(GET_SONGS);
  return (
    <>
      <CreateSong refetch={refetch} />
      <SongList error={error} loading={loading} data={data} refetch={refetch} />
    </>
  );
};

export default Home;

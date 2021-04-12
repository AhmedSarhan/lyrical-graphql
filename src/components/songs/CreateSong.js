import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_SONG } from '../../graphql/mutations/songMutations';
const CreateSong = ({ refetch }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [addSong] = useMutation(CREATE_SONG);
  const newSongHandler = async (data, e) => {
    console.log(data);
    addSong({
      variables: {
        title: data.title,
      },
    })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          e.target.reset();
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h3 className="center-align indigo-text text-darken-3">
        Create New Song
      </h3>
      <form
        onSubmit={handleSubmit(newSongHandler)}
        style={{ margin: '50px auto' }}
      >
        <div className="input-field col" style={{ display: 'flex' }}>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            type="text"
            className="validate"
            autoComplete="false"
            ref={register({
              required: 'please enter the title of the song first',
              minLength: {
                value: 3,
                message: "Song Title can't be shorter than 3 characters",
              },
            })}
            style={{ width: '80%' }}
          />
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            style={{ marginTop: '8px', position: 'relative', width: '20%' }}
          >
            New
            <i
              className="material-icons right"
              style={{ position: 'absolute', top: '0', right: '5px' }}
            >
              send
            </i>
          </button>
        </div>
        {errors.title && (
          <small
            className="red-text text-darken-3"
            style={{ display: 'block' }}
          >
            {errors.title.message}
          </small>
        )}
      </form>
    </>
  );
};

export default CreateSong;

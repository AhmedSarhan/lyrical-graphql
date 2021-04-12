import React from 'react';
import { useForm } from 'react-hook-form';
import { ADD_LYRIC } from '../../graphql/mutations/songMutations';
import { useMutation } from '@apollo/client';
const AddLyric = ({ id, refetch }) => {
  const [addLyricToSong] = useMutation(ADD_LYRIC);
  const { register, errors, handleSubmit } = useForm();
  const newLyricHandler = (data, e) => {
    addLyricToSong({
      variables: {
        songId: id,
        content: data.content,
      },
    })
      .then((res) => {
        e.target.reset();
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form
      onSubmit={handleSubmit(newLyricHandler)}
      style={{ margin: '50px auto' }}
    >
      <div className="input-field col" style={{ display: 'flex' }}>
        <label htmlFor="content">Add Lyric</label>
        <input
          name="content"
          id="content"
          type="text"
          className="validate"
          autoComplete="false"
          ref={register({
            required: 'please enter the content of the lyric first',
            minLength: {
              value: 5,
              message: "lyric content can't be shorter than 5 characters",
            },
          })}
          style={{ width: '80%' }}
        />
        <button
          className="btn waves-effect waves-light indigo darken-3"
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
      {errors.content && (
        <small className="red-text text-darken-3" style={{ display: 'block' }}>
          {errors.content.message}
        </small>
      )}
    </form>
  );
};

export default AddLyric;

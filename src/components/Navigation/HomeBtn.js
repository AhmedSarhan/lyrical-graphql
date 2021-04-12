import React from 'react';
import { useHistory } from 'react-router';

const HomeBtn = () => {
  const history = useHistory();
  return (
    <div
      style={{
        backgroundColor: '#30336b',
        textAlignL: 'center',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        position: 'relative',
        bottom: '20px',
        left: '50%',
        cursor: 'pointer',
      }}
      onClick={() => history.push('/')}
    >
      <span
        className="material-icons"
        style={{
          transform: 'translate(24%, 25%)',
          fontSize: '35px',
          color: '#ffffff',
        }}
      >
        home
      </span>
    </div>
  );
};

export default HomeBtn;

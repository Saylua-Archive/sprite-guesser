import React from 'react';

export default function Choice(props) {
  return (
    <button className='choice' onClick={props.onClick}>
      {props.choice}
    </button>
  );
}

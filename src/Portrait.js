import React from 'react';

export default function Portrait(props) {
  const degrees = Math.floor(1 + Math.random() * 360);
  const filter = `contrast(0) sepia(100%) hue-rotate(${degrees}deg) saturate(1000%) brightness(90%)`;
  const image = <img
    src={`/img/sprites/${props.sprite.species}/${props.sprite.variant}.png`}
    alt={`Guess this sprite!`}
    title={`Guess this sprite!`}
    style={{
      filter: props.visible ? 'inherit' : filter,
    }}
    />;
  return (
    <div className={props.visible ? '' : 'blur'} key={`${props.sprite.species}${props.sprite.variant}`}>
      {image}
    </div>
  );
}

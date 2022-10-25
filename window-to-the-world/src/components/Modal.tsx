import React from 'react';

interface Props {
  item : {name: string, image: string, sound: string;};
  open : boolean;
  handleClick: ()=> void;
}

export default function Modal({item, open, handleClick}:Props) {
  return(
    <div onClick={handleClick} className={open ? 'modal modal-open' : 'modal'}>
      <img src={item.image} alt={item.name} />
    </div>
  )
}

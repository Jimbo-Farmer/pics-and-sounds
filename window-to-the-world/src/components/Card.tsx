import React from 'react';

interface Props {
  image: string;
  altText: string;
  handleClick: () => void;
}

export default function Card({image, altText, handleClick}: Props) {

  return(
    <div onClick={handleClick} className="card">
      <img src={image} alt={altText} />
    </div>
  )
}

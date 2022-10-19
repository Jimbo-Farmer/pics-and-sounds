import React, {useState} from 'react';

interface Props {
  image: string;
  altText: string;
  handleClick: () => void;
}

export default function Card({image, altText, handleClick}: Props) {
  const [big, setBig] = useState(false);
  return(
    <div onClick={()=> {handleClick(); setBig(!big)}} className={big ? 'card card-expanded' : 'card'}>
      <img src={image} alt={altText} />
    </div>
  )
}

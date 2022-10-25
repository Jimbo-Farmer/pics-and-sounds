import React, { useState } from 'react';
import './styles/style.scss';
import Card from './components/Card';
import animals from './resources/animals/Animals';
import {Howl, Howler} from 'howler';

function App() {
  const [expanded, setExpanded] = useState(false);
  const SoundPlay = (src: string) => {
    const sound = new Howl({src})
    sound.play();
  }
  Howler.volume(1.0);
  const handleImageClick  = (sound : string) => { 
    if(!expanded){
      setTimeout(()=>{SoundPlay(sound)}, 200); //slight delay to give image time to expand
    }
    setExpanded(!expanded);
  }
  return(
    <div className='card-container'>
      {animals.map((item, index) => {
        return (
          <Card key={index} image={item.image} altText= {item.name} handleClick = {()=>{handleImageClick(item.sound)}} />
          );
        })
      }
    </div>
  )
} 

export default App;

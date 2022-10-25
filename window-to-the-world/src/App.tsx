import React, { useState } from 'react';
import './styles/style.scss';
import Card from './components/Card';
import animals from './resources/animals/Animals';
import {Howl, Howler} from 'howler';

function App() {
  interface CardItem {
    image: string;
    name: string;
    sound: string;
  }

  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalName, setModalName] = useState('');
  const SoundPlay = (src: string) => {
    const sound = new Howl({src})
    sound.play();
  }
  Howler.volume(1.0);
  const handleImageClick  = (item : CardItem) => { 
    if(!expanded){
      setTimeout(()=>{SoundPlay(item.sound)}, 200); //slight delay to give image time to expand
    }
    setExpanded(!expanded);
    setModalOpen(!modalOpen);
    setModalName(item.name);
    setModalImage(item.image);
  }
  return(
    <div className='card-container'>
      <div onClick={()=>{setModalOpen(!modalOpen); setExpanded(!expanded)}} className={modalOpen ? 'modal modal-open' : 'modal'}>
        <img src={modalImage} alt={modalName} />
      </div>
      {animals.map((item, index) => {
        return (
          <Card key={index} image={item.image} altText= {item.name} handleClick = {()=>{handleImageClick(item)}} />
          );
        })
      }
    </div>
  )
} 

export default App;

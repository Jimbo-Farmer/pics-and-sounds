import React, { useState } from 'react';
import './styles/style.scss';
import {Howl, Howler} from 'howler';
import animals from './resources/animals/Animals';
import Modal from './components/Modal';
import Card from './components/Card';

function App() {
  interface CardItem {
    image: string;
    name: string;
    sound: string;
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState({name:'', image:'', sound:''});
  const SoundPlay = (src: string) => {
    const sound = new Howl({src})
    sound.play();
  }
  Howler.volume(1.0);
  const handleImageClick  = (item : CardItem) => { 
    if(!modalOpen){
      setTimeout(()=>{SoundPlay(item.sound)}, 200); // Slight delay to give image time to expand.
    }
    if(window.document.body.scrollWidth < 1000){
      setModalOpen(!modalOpen); // Disable modal on larger screens. 
    }
    setModalItem(item);
  }

  return(
    <div className='card-container'>
      <Modal item={modalItem} open={modalOpen} handleClick={()=>{setModalOpen(!modalOpen)}} />
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

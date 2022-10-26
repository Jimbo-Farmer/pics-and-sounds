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

  const [menuOpen, setMenuOpen] = useState(false);
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
    setModalOpen(!modalOpen); 
    setModalItem(item);
  }

  return(
    <div className='page-container'>
      <div className={menuOpen ? 'menu-icon menu-icon-open' : 'menu-icon'} onClick={()=>{setMenuOpen(!menuOpen)}}><span></span><span></span><span></span></div> 
      <div className={menuOpen ? 'menu menu-open' : 'menu'}>
        <ul>
          <li>Animals</li>
          <li>Vehicles</li>
        </ul>
      </div>
      <div className='card-container'>
        <Modal item={modalItem} open={modalOpen} handleClick={()=>{setModalOpen(!modalOpen)}} />
        {animals.map((item, index) => {
          return (
            <Card key={index} image={item.image} altText= {item.name} handleClick = {()=>{handleImageClick(item)}} />
          );
        })}
      </div>
    </div>
  )
} 

export default App;

import React, { useState } from 'react';
import './styles/style.scss';
import {Howl, Howler} from 'howler';
import animals from './resources/animals/Animals';
import Modal from './components/Modal';
import Card from './components/Card';
import allCategories from './resources/resourcesMaster';
import { CardItem } from './resources/resourcesMaster';

function App() {
  const [category, setCategory] = useState(allCategories[0].array)
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
        {allCategories.map((category, index) => {
          return(
            <li key={category.name} onClick={()=>{setCategory(allCategories[index].array); setMenuOpen(false)}}>{category.name}</li>
          )
        })}       
        </ul>
      </div>
      <div className='card-container'>
        <Modal item={modalItem} open={modalOpen} handleClick={()=>{setModalOpen(!modalOpen)}} />
        {category.map((item, index) => {
          return (
            <Card key={index} image={item.image} altText= {item.name} handleClick = {()=>{handleImageClick(item)}} />
          );
        })}
      </div>
    </div>
  )
} 

export default App;

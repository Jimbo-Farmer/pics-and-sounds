import React, { Component } from 'react';
import './styles/style.scss';
import Card from './components/Card';
import animals from './resources/animals/Animals';
import {Howl, Howler} from 'howler';

class App extends Component {
  SoundPlay = (src: string) => {
    const sound = new Howl({src})
    sound.play();
  }

  RenderCards = () => {
    const playSound  = (sound : string) => {
      return () => {
        this.SoundPlay(sound)
      }
    }
    return animals.map((item, index) => {
      return (
        <Card key={index} image={item.image} altText= {item.name} handleClick = {playSound(item.sound)} />
      );
    })
  }

  render() {
    Howler.volume(1.0);
    return <div className='App'>
      {this.RenderCards()}
    </div>;
    
  }
} 

export default App;

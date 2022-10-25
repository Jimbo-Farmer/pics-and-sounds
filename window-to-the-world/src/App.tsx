import React, { useState } from 'react';
import './styles/style.scss';
import Card from './components/Card';
import animals from './resources/animals/Animals';
import {Howl, Howler} from 'howler';

// class App extends Component {
  
//   SoundPlay = (src: string) => {
//     const sound = new Howl({src})
//     sound.play();
//   }
  
//   RenderCards = () => {
//     let expanded : boolean = false;
//     const handleImageClick  = (sound : string) => {
//       expanded = !expanded;
//       return () => {
//         if(expanded){
//           setTimeout(()=>{this.SoundPlay(sound)}, 500); //slight delay to give image time to expand
//         }
//       }
//     }
//     return animals.map((item, index) => {
//       return (
//         <Card key={index} image={item.image} altText= {item.name} handleClick = {handleImageClick(item.sound)} expanded={expanded} />
//       );
//     })
//   }

//   render() {
//     Howler.volume(1.0);
//     return <div className='App'>
//       {this.RenderCards()}
//     </div>;
    
//   }
// } 

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

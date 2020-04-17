import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Ranks';
import './App.css';

const clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '1446557d22ea491c97defb97e7baba6f'
});

const particlesOptions ={
  particles: {
     number:{
       value:100,
       density:{
         enable:true,
         value_area:800
       },
       "color": {
        "value": "#0000ff"
       },
     }
     
  }
}
class App extends Component {
  constructor() {
    super();
    this.state= {
      input:'',
      imageUrl:''
    }
  }

  onInputChange =(event,target,value) => {
    this.setState({input:event,target,value});
  }

  onButtonSubmit =() => {
    this.setState({imageUrl: this.setState.input});

      app.models.predict(
        "https://samples.clarifai.com/face-det.jpg")
        .then(
        function(response) {
          console.log(response);
        },
        function(err) {
          // there was an error
        }
);


    
  }

  render() {
    return (
      <div className="App">
              <Particles className='particles'
              params={particlesOptions}
              />

        <Navigation/>
        <Logo />
        <ImageLinkForm 
         onInputChange={this.onInputChange}
         onButtonSubmit={this.onButtonSubmit}
          />
        <Rank />
        <FaceRecognition imageUrl={this.setState.imageUrl} />
      </div>
    );
  }
}

export default App;


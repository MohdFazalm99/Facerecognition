import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register'
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Ranks';
import './App.css';
 

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
      imageurl:'',
      box:{},
      route:'signin',
      isSignedin:false,
    }
  }


  Facelocation=(data)=>{
    const clarifaiface =data.outputs[0].data.regions[0].region_info.bounding_box ;
    const image=document.getElementById('inputimage');
    const width=Number(image.width);
    const height=Number(image.height);
    return{
      leftcol:clarifaiface.left_col*width,
      toprow:clarifaiface.top_row*height,
      rightcol:width-(clarifaiface.right_col*width),
      bottomrow:height-(clarifaiface.bottom_row*height),
    }

  }

  Facebox=(box) =>{
    this.setState({box:box});
  }
  
  onInputChange =(event) => {
    this.setState({input:event.target.value});
  }

  Buttonsubmit=()=>{
    this.setState({imageurl:this.state.input});

    app.models.predict(Clarifai.FACE_DETECT_MODEL,
       this.state.input)
       .then(response => this.Facebox(this.Facelocation(response))
       .catch(err => console.log(err))
    
  );
  
  }

  onRoutechange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedin:false})
    }else if(route === 'home'){
      this.setState({isSignedin:true})
    }
    this.setState({route:route});
  }

  render() {
    const {isSignedin,imageurl,route,box }= this.state;
    return (
      <div className="App">
              <Particles className='particles'
              params={particlesOptions}
              />

        <Navigation isSignedin={isSignedin} onRoutechange={this.onRoutechange}/>
        {route === 'home'
          ?<div>
            <Logo />
            <ImageLinkForm 
            onInputChange={this.onInputChange}
            Buttonsubmit={this.Buttonsubmit}
              />
            <Rank />
            <FaceRecognition box={box} imageurl={imageurl} />
          </div>
          :(
            route === 'signin'
            ?<Signin onRoutechange={this.onRoutechange} />
            :<Register onRoutechange={this.onRoutechange} />
          )
          
          }
      </div>
    );
  }
}

export default App;


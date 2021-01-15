import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import FileUpload from './components/FileUpload/FileUpload';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 300,
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      route: 'signin',
      isSignedIn: false,
    }
  }

  onInputChange = (event) => {
    console.log(event);
  }

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState({ isSignedIn: false });
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  }


  render() {
    return (
      <div className="App">
        <Particles
          className='particles'
          params={particlesOptions}
        />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        { this.state.route === 'signin' ?
          <Signin onRouteChange={this.onRouteChange} /> : (
            this.state.route === 'register' ?
              <Register onRouteChange={this.onRouteChange} /> :
              <div>
                <Logo />
                <FileUpload />
              </div>
          )
        }
      </div>
    );
  }
}

export default App;

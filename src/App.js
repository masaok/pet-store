import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      default_image:
        'https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_5629.jpg',
      status: 'on',
    };
  }

  handleChange = () => {
    if (this.state.status === 'on') {
      this.setState({
        status: 'off',
      });
    } else {
      this.setState({
        status: 'on',
      });
    }
  };

  componentDidMount() {
    document.title = 'Pet Store App Home'; // set the title only when this component is mounted
  }

  render() {
    const { default_image, status } = this.state;

    console.log(default_image);
    return (
      <div>
        <h1>Home</h1>
        <h2 style={{ margin: 10 }}>Status: {status}</h2>
        <Toggle changeHandler={this.handleChange} />
        {status === 'on' ? <img src={default_image} alt={default_image} /> : ''}
      </div>
    );
  }
}

export default App;

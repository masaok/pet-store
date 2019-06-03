import React from 'react';
// import logo from './logo.svg';
// import './App.css';

class Toggle extends React.Component {

  render() {
    const { changeHandler } = this.props
    return (
      <div style={{marginBottom:10}}>
        <button onClick={changeHandler}>Toggle</button>
      </div>
    )
  }
}
export default Toggle;

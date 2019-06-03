import React from 'react';

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

import React from 'react'
import Card from './Card'
class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Masao"
    };
  }

  updateName = (event) => {
    console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <Card contactName={this.state.name} />
        Enter name here: <input onChange={this.updateName} />
      </div>
    )
  }
}
export default Contact
import React from 'react'
class Card extends React.Component {
  render() {
    const { contactName } = this.props
    return <h1>React-y Card Name: {contactName}</h1>
  }
}
export default Card

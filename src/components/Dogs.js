import React from 'react'
class Dogs extends React.Component {
  render() {
    const { match } = this.props

    const breed = match.params.breed

    return (
      <div>
        <h1>Dogs</h1>
        <h1>Breed: {breed}</h1>
      </div>
    )
  }
}
export default Dogs
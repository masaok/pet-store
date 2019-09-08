import React from 'react'
import { Link } from 'react-router-dom'
class Dogs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        this.setState({ data })
      })
  }

  render() {
    const { match } = this.props
    // const { message } = this.state.data

    console.log('DOGS > RENDER > state:')
    console.log(this.state)

    const breed = match.params.breed

    // console.log(message)

    return (
      <div>
        <h1>Dogs</h1>
        <h1>Breed: {breed}</h1>
        <h1>Random image:</h1>
        <h1>
          <img
            src={this.state.data && this.state.data.message}
            alt={this.state.data && this.state.data.message}
          />
        </h1>
        <h2>{this.state.data && this.state.data.message}</h2>
        <Link to='/contact'>Contact</Link>
      </div>
    )
  }
}
export default Dogs

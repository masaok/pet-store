import React from 'react'
import { Link } from 'react-router-dom'
class Dogs extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      image_url: 'https://images-na.ssl-images-amazon.com/images/I/61cyfz198BL._SX425_.jpg',
    };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        this.setState({ data })
      });
  }

  render() {
    const { match } = this.props
    // const { message } = this.state.data

    console.log("DOGS > RENDER > state:")
    console.log(this.state)

    const breed = match.params.breed

    // console.log(message)

    return (
      <div>
        <h1>Dogs</h1>
        <h1>Breed: {breed}</h1>
        <h1>Random image:</h1>
        <h1><img src={this.state.image_url}
                 alt={this.state.image_url} /></h1>
      </div>
    )
  }
}
export default Dogs
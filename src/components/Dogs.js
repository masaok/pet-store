import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from './Toggle';

class Dogs extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      showStatus: true,
      showImage: true,
    };
  }
  handleImageChange = () => {
    if (this.state.showImage) {
      this.setState({
        showImage: false
      })
    } else {
      this.setState({
        showImage: true
      })
  }
  }
  handleChange = () => {
    if (this.state.showStatus) {
      this.setState({
        showStatus: false
      })
    } else {
      this.setState({
        showStatus: true
      })
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
        <Toggle changeHandler={this.handleImageChange} />
        <h1>
          
          {this.state.showImage && <img src={this.state.data && this.state.data.message}
                 alt={this.state.data && this.state.data.message} />}
                 
        </h1>
        <Toggle changeHandler={this.handleChange} />
        <h2>{this.state.showStatus && this.state.data && this.state.data.status}</h2>         
        <h2>{this.state.data && this.state.data.message}</h2>
        <Link to="/contact">Contact</Link>
      </div>
    )
  }
}
export default Dogs
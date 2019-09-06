import React from 'react'
class Meerkat extends React.Component {
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
    // const { match } = this.props
    // const { message } = this.state.data

    console.log('DOGS > RENDER > state:')
    console.log(this.state)

    return (
      <div>
        <h1>Under construction...</h1>
        <ul>
          <li>
            <a href='https://material-ui.com/guides/responsive-ui/'>
              Responsive UI in MUI
            </a>
          </li>
          <li>
            <a href='https://material-ui.com/components/use-media-query/'>
              useMediaQuery Responsive Option
            </a>
          </li>
        </ul>
        <img
          src='https://media1.giphy.com/media/EIiJp9cQ3GeEU/giphy.gif?cid=790b76115d1403fe7a4c787177a243b3&rid=giphy.gif'
          alt='under construction'
        />
      </div>
    )
  }
}
export default Meerkat

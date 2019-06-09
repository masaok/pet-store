import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const styles = theme => ({
  root: {
    backgroundColor: '#e8eeed',
    display: 'flex',
    maxWidth: '100vw',
    flexDirection: 'column',
    overflow: 'auto',
  }
})

class Starfish extends React.Component {

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
        <h1>Starfish are cool</h1>
        <h2>The Starfish component is wrapped in withStyles</h2>
        <h3><a href="https://material-ui.com/styles/basics/#higher-order-component-api">MUI Styling High Order Components withStyles</a></h3>
        <h1><img src={this.state.image_url}
          alt={this.state.image_url} /></h1>
        <h2>Typography and Box example:</h2>
        <a href="https://material-ui.com/components/box/">MUI Box</a>
        <h3>
          The colors come from the <a href="https://material-ui.com/customization/default-theme/">default theme</a>
        </h3>
        <Typography component="div" variant="body1">
          <Box color="primary.main">primary.main</Box>
          <Box color="secondary.main">secondary.main</Box>
          <Box color="error.main">error.main</Box>
          <Box color="text.primary">text.primary</Box>
          <Box color="text.secondary">text.secondary</Box>
          <Box color="text.disabled">text.disabled</Box>
          <Box color="text.hint">text.hint</Box>
        </Typography>
      </div>
    )
  }
}


/**
 * The default way to export a component
 */
// export default Starfish

/**
 * The basic way to export a component withStyles
 */
export default withStyles(styles)(Starfish)

/**
 * Dondi uses "withTheme: true", but the default theme colors worked without it, so I left it commented
 * https://github.com/mui-org/material-ui/issues/8937#issuecomment-341085210
 */
// export default withStyles(styles, { withTheme: true })(Starfish)
import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

/**
 * This styles variable is required by withStyles at the bottom, but...
 * none of the styling is actually used on this page yet
 * @param {*} theme 
 */
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
      image_url: 'https://images-na.ssl-images-amazon.com/images/I/61cyfz198BL._SX425_.jpg',
    };
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <h1>Starfish are cool</h1>
        <h2>The Starfish component is wrapped in withStyles</h2>
        <h2 className={classes.root}>This is styled with the root style</h2>
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
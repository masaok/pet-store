import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Button from 'react-bootstrap/Button';

// or less ideally
// import { Button } from 'react-bootstrap';

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

class Baboon extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      image_url: 'https://i.pinimg.com/originals/af/5c/2b/af5c2bb5f630e9d2d8eb1a235bec2ea1.gif',
    };
  }

  render() {
    return (
      <div>
        {/* This style code is required by the Bootstrap Flat Button */}
        <style type="text/css">
          {`
          .btn-flat {
            background-color: purple;
            color: white;
          }

          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }
          `}
        </style>
        <h1>Baboons like Bootstrap.  This page is a <a href="https://react-bootstrap.github.io/">Bootstrap</a> Demo page.</h1>
        <h2>The Baboon component is wrapped in withStyles (just FYI, not Bootstrap related)</h2>
        <h1><img src={this.state.image_url}
          alt={this.state.image_url} /></h1>
        <h2>Bootstrap Flat Button example:</h2>
        <Button variant="flat" size="xxl">
          this is a bootstrap flat button
        </Button>
      </div>
    )
  }
}

/**
 * The basic way to export a component withStyles
 */
export default withStyles(styles)(Baboon)